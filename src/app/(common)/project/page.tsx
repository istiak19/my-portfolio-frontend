import Projects from "@/src/components/Projects/Projects";
import { getProjects } from "@/src/services/projectServices";

export const metadata = {
    title: "Project - Istiak Ahamed",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const page = async() => {
    const projects = await getProjects();
    
    return (
        <div>
            <Projects projects={projects}/>
        </div>
    );
};

export default page;