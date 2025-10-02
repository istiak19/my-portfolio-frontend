"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { IProject, ProjectsProps } from "@/src/type";

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

const ProjectGrid = ({ projects }: ProjectsProps) => {
    return (
        <div className="bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto text-gray-900 dark:text-white pt-10 px-6 text-center">
                {/* Section Title */}
                <h2 className="md:text-4xl text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-5"
                >
                    Creative & Technical Highlights
                </h2>

                {/* Subtitle */}
                <p className="mb-16 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore a curated selection of my projects that combine creative
                    design, clean code, and practical functionality — delivering seamless
                    user experiences and innovative solutions.
                </p>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: IProject, index: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col justify-between"
                        >
                            {/* Project Title */}
                            <h3 className="text-xl text-left font-bold mb-4 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient"
                            >
                                {project.title}
                            </h3>

                            {/* Project Image */}
                            <div className="relative mb-6 rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 group">
                                <div className="relative h-64 w-full overflow-hidden rounded-[10px] bg-gray-100 dark:bg-black">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="rounded-xl p-2 transition-transform duration-500 group-hover:scale-110"
                                        style={{ zIndex: 0 }}
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500  text-transparent bg-clip-text drop-shadow-md animate-text-gradient bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out text-center shadow-md hover:shadow-lg cursor-pointer"
                                    >
                                        Live Demo
                                        <ArrowUpRight className="text-indigo-500" />
                                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                    </a>

                                    <Link
                                        href={`/project/${project.id}`}
                                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out text-center shadow-md hover:shadow-lg cursor-pointer"
                                    >
                                        View Details <ArrowRight className="text-indigo-500" />
                                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                    </Link>
                                </div>

                                <div className="flex justify-center">
                                    <a
                                        href={project.clientLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient  bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                                    >
                                        GitHub Code
                                        <FaGithub className="text-lg text-indigo-500" />
                                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                    </a>
                                </div>
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
                    <Link href="/project">
                        <button className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient border border-emerald-500/30 bg-transparent backdrop-blur-md hover:text-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                        >
                            <span>See More →</span>
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectGrid;