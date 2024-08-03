"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from '@clerk/nextjs'

export const LandingContent = () => {

    const { isSignedIn } = useAuth();

    return (
        <div className="text-[#111827] font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>
                    The Best Platform for E-Learning
                </h1>
            </div>
            <div className="text-sm md:text-xl font-light text-[#111827]">
                    Understand English With The Help Of Hebrew
            </div>
            <div>
                {isSignedIn && (
                    <Link href="/">
                        <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                            Start Learning Now
                        </Button>
                    </Link>
                )}
                {!isSignedIn && (
                    <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                        <SignInButton mode='modal'>
                            Start Learning Now
                        </SignInButton>
                    </Button>
                )}
            </div>
            <div className="text-[#111827] text-sx md:text-sm font-normal">
                No credit card required !
            </div>
        </div>
    )
}