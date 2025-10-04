import BlogDetails from "@/src/components/Blog/BlogDetails";
import { getBlogById } from "@/src/services/blogService";

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
    const { data: blogs } = await res.json();
    return blogs.slice(0, 2).map((blog: any) => ({ id: String(blog.id) }));
};

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