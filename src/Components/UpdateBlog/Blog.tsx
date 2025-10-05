"use client";

import { useSession } from 'next-auth/react';
import UpdateBlog from './UpdateBlog';
import { IBlog } from '@/src/type';

const Blog = ({ blog }: { blog: IBlog }) => {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;
    if (!session?.user?.accessToken) return <p>Please log in first.</p>;
    return (
        <div>
            <UpdateBlog blog={blog} decoded={session.user.accessToken} />
        </div>
    );
};

export default Blog;