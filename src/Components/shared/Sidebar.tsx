"use client";

import Link from "next/link";
import { Home, PlusCircle, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                router.push("/");
            } else {
                console.error("Logout failed");
            }
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };

    return (
        <aside className="flex h-screen w-64 flex-col border-r bg-black text-white">
            <div className="p-5">
                <Link href="/" className="flex items-center group">
                    <div className="relative w-12 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-200">
                        <Image src={logo} alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        Istiak Ahamed
                    </span>
                </Link>
            </div>

            <nav className="flex-1 space-y-2 p-4">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
                >
                    <Home className="h-4 w-4" />
                    Home
                </Link>

                <Link
                    href="/dashboard/create-blog"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
                >
                    <PlusCircle className="h-4 w-4" />
                    Create Blog
                </Link>
            </nav>

            <div className="p-4 border-t border-gray-500">
                <Button
                    variant="destructive"
                    className="w-full justify-start gap-2 cursor-pointer"
                    onClick={handleLogout}
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </div>
        </aside>
    );
}