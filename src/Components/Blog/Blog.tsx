"use client";

import { BlogProps } from "@/src/type";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs }: BlogProps) => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Our Blogs
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Blog Image */}
                        <div className="relative w-full h-64">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                {blog.content}
                            </p>

                            <Link href={`/blog/${blog.id}`} className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;