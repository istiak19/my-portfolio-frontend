"use client";

import { BlogProps } from "@/src/type";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
};

const BlogGrid = ({ blogs }: BlogProps) => {
    return (
        <div className="container mx-auto px-6 py-12 bg-white dark:bg-black">
            <h1 className="md:text-4xl text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg animate-text-gradient text-center mb-6">
                Insights & Stories
            </h1>

            <p className="mb-16 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore insightful articles on web development, design trends, and programming best practices — curated to inspire your next big idea.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex flex-col justify-between"
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
                    </motion.div>
                ))}
            </div>

            {/* See More Button */}
            <motion.div
                variants={textVariant}
                custom={4}
                className="mt-16 flex justify-center"
            >
                <Link href="/blog">
                    <button className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient border border-emerald-500/30 bg-transparent backdrop-blur-md hover:text-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                    >
                        <span>See More →</span>
                        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default BlogGrid;