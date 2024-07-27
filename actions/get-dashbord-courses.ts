import { db } from "@/lib/db";
import { Category, Chapter, Course } from "@prisma/client";
import { getProgress } from "@/actions/get-progress";

type CourseWithProgressWithCategroy = Course & {
    categroy: Category;
    chapters: Chapter[];
    progress: number | null;
};

type DashboardCourses = {
    completedCourses: CourseWithProgressWithCategroy[];
    coursesInProgress: CourseWithProgressWithCategroy[];
}

export const GetDashboradCourses = async ( userId : string ): Promise<DashboardCourses> => {
    try {

        const purchasedCourses = await db.purchase.findMany({
            where: {
                userId: userId,
            },
            select: {
                course: {
                    include: {
                        category: true,
                        chapters: {
                            where: {
                                isPublished: true,
                            }
                        }
                    }
                }
            }
        });

        const courses = purchasedCourses.map((purchase) => purchase.course) as unknown as CourseWithProgressWithCategroy[];

        for (let course of courses ) {
            const progress = await getProgress(userId , course.id);
            course["progress"] = progress;
        }

        const completedCourses = courses.filter((course) => course.progress === 100);

        const coursesInProgress = courses.filter((course) => (course.progress ?? 0) <100);

        return { completedCourses , coursesInProgress };

    } catch (error) {
        console.log("[GET_DASHBOARD_COURSES]", error);
        return {
            completedCourses: [],
            coursesInProgress: [],
        }
    }
}