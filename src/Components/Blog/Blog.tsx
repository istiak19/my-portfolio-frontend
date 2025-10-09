"use client";

import { BlogProps } from "@/src/type";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "../ui/Sparkles/sparkles";

const Blog = ({ blogs }: BlogProps) => {
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-4">
                        Blog Highlights
                    </h2>
                    <p className="mb-5 text-gray-600 dark:text-gray-300 max-w-2xl text-center">
                        Explore insightful articles on web development, design trends, and programming best practices — curated to inspire your next big idea.
                    </p>

                    {/* Sparkle effect */}
                    <div className="w-full md:w-[40rem] h-[10rem] relative mb-5">
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                        <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
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
        </div>
    );
};

export default Blog;