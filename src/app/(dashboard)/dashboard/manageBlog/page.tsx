import { getBlogs } from "@/src/services/blogService";

const ManageBlog = async () => {
    const blogs = await getBlogs();
    // console.log(blogs);

    return (
        <div>
            {/* <ManageBlogs /> */}
        </div>
    );
};

export default ManageBlog;