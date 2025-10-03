import Footer from "@/src/components/Footer/Footer";
import Sidebar from "@/src/components/shared/Sidebar";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col min-h-dvh">
            <main className="flex flex-1">
                <Sidebar />
                <div className="flex-1">{children}</div>
            </main>
            <Footer />
        </div>
    );
}