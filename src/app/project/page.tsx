// import Projects from "@/Components/Projects/Projects";

import Projects from "@/src/components/Projects/Projects";

export const metadata = {
    title: "Istiak Ahamed – Project",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const page = () => {
    return (
        <div>
            <Projects />
        </div>
    );
};

export default page;