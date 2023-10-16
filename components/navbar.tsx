"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles, User } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";


const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items">
                {/* <Menu className="block md:hidden" /> */}
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl", font.className)}>companion.ai</h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white" />
                </Button>
                <ModeToggle />
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
} 