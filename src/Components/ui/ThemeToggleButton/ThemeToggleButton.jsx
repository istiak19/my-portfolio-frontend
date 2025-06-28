"use client";

import * as React from "react";
import { Button } from "../button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../dropdown-menu";

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="relative transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] transition-transform duration-500 scale-100 rotate-0 dark:scale-0 dark:-rotate-90"
                    />
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-500 scale-0 rotate-90 dark:scale-100 dark:rotate-0"
                    />
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}