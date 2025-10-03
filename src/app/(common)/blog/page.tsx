import Blog from "@/src/components/Blog/Blog";
import { getBlogs } from "@/src/services/blogService";
import { IBlog } from "@/src/type";

const Blogs = async () => {
    const blogs = await getBlogs();
    const publishedBlogs = blogs?.filter((blog: IBlog) => blog.published) || [];

    return (
        <div>
            <Blog blogs={publishedBlogs} />
        </div>
    );
};

export default Blogs;