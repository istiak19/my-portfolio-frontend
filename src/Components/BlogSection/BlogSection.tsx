"use client";

import { getBlogs } from "@/src/services/blogService";
import { IBlog } from "@/src/type";
import BlogGrid from "./BlogGrid";
import { useEffect, useState } from "react";

const BlogSection = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        getBlogs().then((data) => setBlogs(data));
    }, []);
    const publishedBlogs = (blogs?.filter((blog: IBlog) => blog.published) || []).slice(0, 3);

    return (
        <div>
            <BlogGrid blogs={publishedBlogs} />
        </div>
    );
};

export default BlogSection;