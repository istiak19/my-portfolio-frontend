"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "../../../public/Anik.jpg";
import { FaPlane, FaUtensils, FaBookOpen, FaCamera, FaHeart } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision/background-beams-with-collision";
import React from "react";
import { AboutData } from "@/src/type";

const AboutPage = ({ about }: { about: AboutData | null }) => {
    const hobbyIcons: Record<string, React.ReactNode> = {
        Traveling: <FaPlane className="text-pink-500 dark:text-pink-400 mt-1" />,
        "Food Lover": <FaUtensils className="text-yellow-500 dark:text-yellow-400 mt-1" />,
        Learning: <FaBookOpen className="text-blue-500 dark:text-blue-400 mt-1" />,
        Photography: <FaCamera className="text-purple-500 dark:text-purple-400 mt-1" />,
    };

    if (!about) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-600 dark:text-gray-400">
                    Failed to load About data. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-black transition-colors duration-300 px-5">
            <BackgroundBeamsWithCollision>
                <div className="container mx-auto">
                    <h2 className="text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:pb-8 relative font-semibold tracking-tight">
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
                                {about?.introduction || "No introduction available."}
                            </p>

                            {/* Skills */}
                            <div className="mt-6">
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    {about?.skills &&
                                        Object.entries(about.skills).map(([category, items]) => (
                                            <li key={category}>
                                                <strong className="capitalize">
                                                    {category
                                                        .replace(/([A-Z])/g, " $1")
                                                        .replace(/^./, (s) => s.toUpperCase())}
                                                    :
                                                </strong>{" "}
                                                {items?.length ? items.join(", ") : "N/A"}
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Journey */}
                            <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
                                <h3 className="text-lg font-semibold flex items-center mb-3">
                                    My Journey
                                    <span className="ml-2 w-20 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-justify">
                                    {about?.journey || "Journey details not available."}
                                </p>
                            </div>

                            {/* Hobbies */}
                            <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
                                <h3 className="text-lg font-semibold flex items-center mb-3">
                                    My Hobbies & Interests
                                    <span className="ml-2 w-20 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                                </h3>
                                <ul className="pl-1 space-y-3">
                                    {about?.hobbies?.length ? (
                                        about.hobbies.map((hobby) => (
                                            <li
                                                key={hobby.title}
                                                className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                                            >
                                                {hobbyIcons[hobby.title] || <FaHeart className="mt-1" />}
                                                <span>
                                                    <strong>{hobby.title}:</strong> {hobby.description}
                                                </span>
                                            </li>
                                        ))
                                    ) : (
                                        <p>No hobbies available.</p>
                                    )}
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