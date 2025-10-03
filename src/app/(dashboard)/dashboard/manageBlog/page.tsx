import ManageBlog from "@/src/components/ManageBlog/ManageBlog";

export const metadata = {
    title: "Manage Blog – Istiak Ahamed",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Manage = async () => {

    return (
        <div>
            <ManageBlog />
        </div>
    );
};

export default Manage;