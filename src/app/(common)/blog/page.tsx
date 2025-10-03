import Blog from "@/src/components/Blog/Blog";
import { getBlogs } from "@/src/services/blogService";
import { IBlog } from "@/src/type";

export const metadata = {
    title: "Blog – Istiak Ahamed",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Blogs = async () => {
    const blogs = await getBlogs();
    const publishedBlogs = blogs?.filter((blog: IBlog) => blog.published) || [];
    if (publishedBlogs.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    No Blogs Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Sorry, there are no published blogs available at the moment. Please check back later.
                </p>
            </div>
        );
    };

    return (
        <div>
            <Blog blogs={publishedBlogs} />
        </div>
    );
};

export default Blogs;