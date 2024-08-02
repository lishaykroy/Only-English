"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from '@clerk/nextjs'

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

export const LandingNavbar = () => {

    const { isSignedIn } = useAuth();

    return (
        <nav className="bg-[#111827] p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <h1 className={cn("text-2xl font-bold text-white" , font.className)}>
                    Only-English
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                    <Button variant="outline" className="rounded-full">
                        <SignInButton mode='modal'/>
                    </Button>
                </Link>
            </div>
        </nav>
    )

}