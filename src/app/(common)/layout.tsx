import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import { ReactNode } from "react";

export default function CommonLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Navbar />
            <main className="min-h-dvh">{children}</main>
            <Footer />
        </>
    );
}