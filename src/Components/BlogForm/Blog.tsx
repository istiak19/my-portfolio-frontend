"use client";

import { useSession } from "next-auth/react";
import BlogForm from "./BlogForm";

const Blog = () => {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;
    if (!session?.user?.accessToken) return <p>Please log in first.</p>;

    return (
        <div>
            <BlogForm decoded={session.user.accessToken} />
        </div>
    );
};

export default Blog;