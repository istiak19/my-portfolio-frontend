import AboutPage from "@/src/components/AboutPage/AboutPage";
import { getAboutData } from "@/src/services/aboutServices";

export const metadata = {
    title: "About – Istiak Ahamed",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Page = async () => {
    const about = await getAboutData();
    if (!about?.data) return <div>No data available</div>;

    return <AboutPage about={about?.data} />;
};

export default Page;