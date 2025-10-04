"use client";

import Link from "next/link";
import { Home, PlusCircle, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { ModeToggle } from "../ui/ThemeToggleButton/ThemeToggleButton";
import { toast } from "react-hot-toast";
import { signOut } from "next-auth/react";

export default function Sidebar() {

    const handleLogout = () => {
        toast.success("Logging out...");
        signOut({ callbackUrl: "/" });
    };

    const links = [
        { name: "Dashboard", path: "/dashboard", icon: <Home className="h-4 w-4" /> },
        { name: "Create Project", path: "/dashboard/project", icon: <PlusCircle className="h-4 w-4" /> },
        { name: "Create Blog", path: "/dashboard/blog", icon: <PlusCircle className="h-4 w-4" /> },
        { name: "Manage Blog", path: "/dashboard/manageBlog", icon: <PlusCircle className="h-4 w-4" /> },
    ];

    return (
        <aside className="flex w-72 flex-col border-r bg-white dark:bg-black text-gray-800 dark:text-gray-200 shadow-lg">
            {/* Logo */}
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full group-hover:scale-105 transition-transform duration-200">
                        <Image src={logo} alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="ml-3 text-xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        Istiak Ahamed
                    </span>
                </Link>

                {/* Dark/Light Mode Toggle */}
                <ModeToggle />
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col p-4 space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                    variant="destructive"
                    className="group relative cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2 w-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
        </aside>
    );
};