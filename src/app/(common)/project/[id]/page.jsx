import ProjectDetails from "@/src/components/Projects/projectDetails";

export const metadata = {
    title: "Istiak Ahamed – Project Details",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Page = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <ProjectDetails id={id} />
        </div>
    );
};

export default Page;