import Blog from "@/src/components/UpdateBlog/Blog";
import { getBlogById } from "@/src/services/blogService";

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blogId = Number(id);
    const blog = await getBlogById(blogId);

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "The blog you are looking for does not exist.",
        };
    }

    return {
        title: `${blog.title} – Istiak Ahamed`,
        description: blog.content.slice(0, 150),
    };
};

const Blogs = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = await getBlogById(Number(id));

    return (
        <div>
            <Blog blog={blog} />
        </div>
    );
};

export default Blogs;