import ProjectDetails from "@/Components/Projects/projectDetails";

const Page = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <ProjectDetails id={id} />
        </div>
    );
};

export default Page;