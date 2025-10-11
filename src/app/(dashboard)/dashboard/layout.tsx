"use client";

import { AppSidebar } from "@/src/components/app-sidebar";
import Footer from "@/src/components/Footer/Footer";
import { Separator } from "@/src/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Page({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <SessionProvider>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white dark:bg-black">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 bg-white dark:bg-black">{children}</div>
                    <Footer />
                </SidebarInset>
            </SidebarProvider>
        </SessionProvider>
    );
}