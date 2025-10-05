"use client";

import Footer from "@/src/components/Footer/Footer";
import Sidebar from "@/src/components/shared/Sidebar";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col min-h-dvh">
            <SessionProvider>
                <main className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1">{children}</div>
                </main>
                <Footer />
            </SessionProvider>
        </div>
    );
}