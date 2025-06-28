"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SparklesCore } from '../ui/Sparkles/sparkles';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import eduGenie from '../../../public/project/eduGenie.png';
import eduProject from '../../../public/project/eduProject.png';
import fundProject from '../../../public/project/fundProject.png';
import bloodProject from '../../../public/project/BloodProject.png';

const projects = [
    {
        id: 1,
        title: 'BloodBanker',
        image: bloodProject,
        viewLink: 'https://bloodbanker-567f0.web.app/',
        githubLink: 'https://github.com/istiak19/BloodBanker-client',
    },
    {
        id: 2,
        title: 'EduGenie',
        image: eduGenie,
        viewLink: 'https://genies-two.vercel.app/',
        githubLink: 'https://github.com/imtiaz-zihad/Edugenie/tree/development',
    },
    {
        id: 3,
        title: 'EduCircle',
        image: eduProject,
        viewLink: 'https://educircle-839d0.web.app/',
        githubLink: 'https://github.com/istiak19/EduCircle-client',
    },
    {
        id: 4,
        title: 'Fundsphere',
        image: fundProject,
        viewLink: 'https://fundsphere-website.web.app/',
        githubLink: 'https://github.com/istiak19/assignment-10-client',
    },
];

const Projects = () => {
    return (
        <div className="bg-black text-white">
            <div className="w-11/12 mx-auto py-16 px-4 md:px-6 text-center">
                {/* Header */}
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-4">
                        Creative & Technical Highlights
                    </h2>
                    <p className="mb-5 text-gray-400 max-w-2xl">
                        Explore a curated selection of my projects that combine creative design, clean code, and practical functionality — delivering seamless user experiences and innovative solutions.
                    </p>

                    {/* Sparkle effect */}
                    <div className="w-full md:w-[40rem] h-[10rem] relative mb-5">
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col justify-between"
                        >
                            <h3 className="text-xl font-bold mb-4 text-left bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                                {project.title}
                            </h3>

                            <div className="relative mb-6 rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 group">
                                <div className="relative h-64 w-full overflow-hidden rounded-[10px] bg-black">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        fill
                                        className="rounded-xl p-2 object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                <a
                                    href={project.viewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
                                >
                                    Live Demo
                                    <ArrowUpRight className="text-indigo-500" />
                                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                </a>

                                <Link
                                    href={`/project/${project.id}`}
                                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
                                >
                                    View Details <ArrowRight className="text-indigo-500" />
                                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                </Link>
                            </div>

                            <div className="flex justify-center">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
                                >
                                    GitHub Code
                                    <FaGithub className="text-lg text-indigo-500" />
                                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;