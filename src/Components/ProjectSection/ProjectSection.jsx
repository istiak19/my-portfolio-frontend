"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import eduGenie from '../../../public/project/eduGenie.png';
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
        id: 4,
        title: 'Fundsphere',
        image: fundProject,
        viewLink: 'https://fundsphere-website.web.app/',
        githubLink: 'https://github.com/istiak19/assignment-10-client',
    },
];

const ProjectSection = () => {
    return (
        <div className="bg-black">
            <div className="w-11/12 mx-auto text-white py-10 px-6 text-center">
                <h2 className="md:text-4xl text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-5">
                    Creative & Technical Highlights
                </h2>
                <p className="mb-16 text-gray-400 max-w-2xl mx-auto">
                    Explore a curated selection of my projects that combine creative design, clean code, and practical functionality — delivering seamless user experiences and innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col justify-between"
                            >
                                <h3 className="text-xl text-left font-bold mb-4 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                                    {project.title}
                                </h3>

                                <div className="relative mb-6 rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 group">
                                    <div className="relative h-64 w-full overflow-hidden rounded-[10px] bg-black">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="rounded-xl p-2 object-cover transition-transform duration-500 group-hover:scale-110"
                                            style={{ zIndex: 0 }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                        <a
                                            href={project.viewLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border border-emerald-500/30
                                        bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out text-center shadow-md hover:shadow-lg cursor-pointer"
                                        >
                                            Live Demo
                                            <ArrowUpRight className="text-indigo-500" />
                                            <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                        </a>
                                        <Link
                                            href={`/project/${project.id}`}
                                            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient font-medium bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out text-center shadow-md hover:shadow-lg cursor-pointer"
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
                                            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient font-medium border border-emerald-500/30 bg-transparent backdrop-blur-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                                        >
                                            GitHub Code
                                            <FaGithub className="text-lg text-indigo-500" />
                                            <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;