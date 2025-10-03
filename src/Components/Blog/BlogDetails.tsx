"use client";

import { BlogCardProps } from "@/src/type";
import Image from "next/image";
import { format } from "date-fns";

const BlogDetails = ({ blog }: BlogCardProps) => {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Blog Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {blog.title}
            </h1>

            {/* Blog Image */}
            {blog.image && (
                <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Published Status */}
            <div className="mb-4">
                <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${blog.published
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                        }`}
                >
                    {blog.published ? "Published" : "Unpublished"}
                </span>
            </div>

            {/* Content */}
            <div className="prose dark:prose-invert max-w-none mb-6">
                <p>{blog.content}</p>
            </div>

            {/* Metadata */}
            <div className="text-gray-500 dark:text-gray-400 text-sm space-x-4">
                <span>
                    <strong>Created At:</strong>{" "}
                    {blog.createdAt ? format(new Date(blog.createdAt), "PPP p") : "N/A"}
                </span>
                <span>
                    <strong>Last Updated:</strong>{" "}
                    {blog.updatedAt ? format(new Date(blog.updatedAt), "PPP p") : "N/A"}
                </span>
            </div>
        </div>
    );
};

export default BlogDetails;