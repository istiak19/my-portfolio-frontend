// import AboutPage from "@/Components/AboutPage/AboutPage";

import AboutPage from "@/src/components/AboutPage/AboutPage";

export const metadata = {
    title: "Istiak Ahamed – About",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const page = () => {
    return (
        <div>
            <AboutPage />
        </div>
    );
};

export default page;