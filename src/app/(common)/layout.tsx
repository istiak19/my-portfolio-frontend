import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export default async function CommonLayout({ children }: Readonly<{ children: ReactNode }>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const isLoggedIn = !!token;

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <main className="min-h-dvh">{children}</main>
            <Footer />
        </>
    );
}