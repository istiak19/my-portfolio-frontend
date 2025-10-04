import UpdateBlog from "@/src/components/UpdateBlog/UpdateBlog";
import { getBlogById } from "@/src/services/blogService";

const Blogs = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = await getBlogById(Number(id));

    return (
        <div>
            <UpdateBlog blog={blog} />
        </div>
    );
};

export default Blogs;