import ManageBlog from "@/src/components/ManageBlog/ManageBlog";
import { getBlogs } from "@/src/services/blogService";

const Manage = async () => {
    const blogs = await getBlogs();

    return (
        <div>
            <ManageBlog blogs={blogs} />
        </div>
    );
};

export default Manage;