import ProjectDetails from "@/src/components/Projects/projectDetails";
import { getProjectById } from "@/src/services/projectServices";

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const projectId = Number(id);
    const project = await getProjectById(projectId);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The project you are looking for does not exist.",
        };
    }

    return {
        title: `${project.title} – Istiak Ahamed`,
        description: project.description.slice(0, 150),
    };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const project = await getProjectById(Number(id));

    if (!project) {
        return <div className="text-center mt-20">Project not found</div>;
    }

    return (
        <div>
            <ProjectDetails project={project} />
        </div>
    );
};

export default Page;