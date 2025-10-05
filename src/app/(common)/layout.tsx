import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import { authOptions } from "@/src/helpers/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

export default async function CommonLayout({ children }: Readonly<{ children: ReactNode }>) {
    const session = await getServerSession(authOptions);
    const isLoggedIn = !!session?.user?.accessToken;

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <main className="min-h-dvh">{children}</main>
            <Footer />
        </>
    );
}