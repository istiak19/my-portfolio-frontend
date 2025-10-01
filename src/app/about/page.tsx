import AboutPage from "@/src/components/AboutPage/AboutPage";
import { getAboutData } from "@/src/services/aboutServices";

export const metadata = {
    title: "Istiak Ahamed – About",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Page = async () => {
    const about = await getAboutData();
    return <AboutPage about={about?.data ?? null} />;
};

export default Page;