"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';
import { BackgroundBeams } from "../ui/BackgroundBeams/background-beams";
import { ProjectCardProps } from "@/src/type";

const ProjectDetails = ({ project }: ProjectCardProps) => {

    return (
        <motion.div
            className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="container mx-auto p-8 space-y-10 py-16"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Project Title */}
                <motion.h1
                    className="text-4xl md:text-5xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-4"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {project.title}
                </motion.h1>

                {/* Project Image */}
                <motion.div
                    className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[650px] rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                            className="rounded-xl p-2 object-cover"
                        />
                    </div>
                </motion.div>

                {/* Description */}
                <section className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                    <p>{project.description}</p>
                </section>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    {project.liveLink && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-emerald-500/30 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <span>Live Site</span>
                            <ArrowUpRight className="text-indigo-500" />
                        </Link>
                    )}
                    {project.clientLink && (
                        <Link
                            href={project.clientLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-emerald-500/30 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <span>Client Repo</span>
                            <FaGithub className="text-indigo-500" />
                        </Link>
                    )}
                    {project.serverLink && (
                        <Link
                            href={project.serverLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-emerald-500/30 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <FaGithub className="text-indigo-500" />
                            <span>Server Repo</span>
                        </Link>
                    )}
                </div>

                {/* Technologies */}
                <section>
                    <h2 className="text-3xl font-semibold mb-3 border-b-2 border-indigo-500 inline-block pb-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                        Technologies Used
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{project.technologies}</p>
                </section>

                {/* Features */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-500 inline-block pb-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                        Features
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{feature}</li>
                        ))}
                    </ul>
                </section>

                {/* Challenges */}
                {project.challenges && (
                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-600 dark:text-red-400 border-b-2 border-red-500 inline-block">Challenges</h2>
                        <p className="text-gray-600 dark:text-gray-400">{project.challenges}</p>
                    </section>
                )}

                {/* Improvements */}
                {project.improvements && (
                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600 dark:text-green-400 border-b-2 inline-block">Improvements</h2>
                        <p className="text-gray-600 dark:text-gray-400">{project.improvements}</p>
                    </section>
                )}
            </motion.div>
            <BackgroundBeams />
        </motion.div>
    );
};

export default ProjectDetails;