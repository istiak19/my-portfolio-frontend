"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "../../../public/Anik.jpg";
import { FaPlane, FaUtensils, FaBookOpen, FaCamera } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision/background-beams-with-collision";

const AboutPage = () => {
    return (
        <div className="bg-white dark:bg-black transition-colors duration-300">
            <BackgroundBeamsWithCollision>
                <div className="container mx-auto px-6 py-16">
                    <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-8">
                        About Me
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-800 dark:text-gray-300">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-[250px] flex-1 h-[340px] md:w-[350px] md:h-[350px] bg-gradient-to-tr from-pink-500 to-purple-500 p-1 rounded-[30%]"
                        >
                            <div className="w-full h-full rounded-[30%] overflow-hidden bg-white dark:bg-gray-800">
                                <Image src={profileImg} alt="Istiak" className="w-full h-full" />
                            </div>
                            <h1 className="absolute origin-right mt-5 text-xs md:text-sm font-semibold flex items-center gap-2">
                                <span className="w-18 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                                <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                                    Build Solutions. Drive Impact.
                                </span>
                            </h1>
                        </motion.div>

                        {/* About Text */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1/2"
                        >
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                                I’m Istiak Ahamed, a passionate and detail-oriented{" "}
                                <span className="text-purple-500 dark:text-purple-400 font-semibold">Front-End Developer </span>
                                who loves building modern, responsive, and user-friendly web applications. I’m always eager to learn new technologies, take on challenges, and deliver impactful digital experiences.
                            </p>

                            <div className="mt-6">
                                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux, Tailwind CSS, ShadCN, Material UI, Bootstrap, Axios, TanStack Query</li>
                                    <li><strong>Backend:</strong> Node.js, Express.js, Mongoose, RESTful APIs, JWT, NextAuth.js, Firebase</li>
                                    <li><strong>Database:</strong> MongoDB</li>
                                    <li><strong>Tools & Platforms:</strong> Git, GitHub, Chrome DevTools, Postman, Vercel, Netlify, Figma, VS Code, CodeBlocks</li>
                                    <li><strong>Soft Skills:</strong> Quick Learning, Teamwork & Collaboration, Time Management, Effective Communication</li>
                                </ul>
                            </div>

                            <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
                                <h3 className="text-lg font-semibold flex items-center mb-3">
                                    My Journey
                                    <span className="ml-2 w-20 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-justify">
                                    My journey into programming began during my Computer Science & Engineering studies...
                                    {/* Keep your full journey text here */}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
                                <h3 className="text-lg font-semibold flex items-center mb-3">
                                    My Hobbies & Interests
                                    <span className="ml-2 w-20 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                                </h3>
                                <ul className="pl-1 space-y-3">
                                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                        <FaPlane className="text-pink-500 dark:text-pink-400 mt-1" />
                                        <span><strong>Traveling:</strong> Exploring new places, meeting diverse people, and embracing cultures.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                        <FaUtensils className="text-yellow-500 dark:text-yellow-400 mt-1" />
                                        <span><strong>Food Lover:</strong> Trying local cuisine and street food from different regions.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                        <FaBookOpen className="text-blue-500 dark:text-blue-400 mt-1" />
                                        <span><strong>Learning:</strong> Constantly upskilling myself with the latest tech trends and frameworks.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                        <FaCamera className="text-purple-500 dark:text-purple-400 mt-1" />
                                        <span><strong>Photography:</strong> Capturing moments during my travels and everyday life.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
};

export default AboutPage;