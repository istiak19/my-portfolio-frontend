import BlogDetails from "@/src/components/Blog/BlogDetails";
import { getBlogById } from "@/src/services/blogService";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = await getBlogById(Number(id));
    return (
        <div>
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogPage;