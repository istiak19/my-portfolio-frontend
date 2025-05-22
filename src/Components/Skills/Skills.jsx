"use client";

import {
    FaHtml5, FaJs, FaReact, FaNode, FaGithub, FaCss3
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoFirebase } from "react-icons/bi";
import {
    SiMongodb, SiNextdotjs, SiTypescript, SiPostgresql
} from "react-icons/si";
import { BackgroundLines } from "../ui/background-lines";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 className="w-full h-full p-5 text-[#E34F26]" />, label: "HTML5", color: "#E34F26" },
        { icon: <FaCss3 className="w-full h-full p-5 text-[#1572B6]" />, label: "CSS3", color: "#1572B6" },
        { icon: <RiTailwindCssFill className="w-full h-full p-5 text-[#38BDF8]" />, label: "Tailwind", color: "#38BDF8" },
        { icon: <FaJs className="w-full h-full p-5 text-[#F7DF1E]" />, label: "JavaScript", color: "#F7DF1E" },
        { icon: <FaReact className="w-full h-full p-5 text-[#61DAFB]" />, label: "React.js", color: "#61DAFB" },
        { icon: <SiNextdotjs className="w-full h-full p-5 text-white" />, label: "Next.js", color: "" },
        { icon: <SiTypescript className="w-full h-full p-5 text-[#3178C6]" />, label: "TypeScript", color: "#3178C6" },
        { icon: <BiLogoFirebase className="w-full h-full p-5 text-[#FFA000]" />, label: "Firebase", color: "#FFA000" },
        { icon: <FaNode className="w-full h-full p-5 text-[#339933]" />, label: "Node.js", color: "#339933" },
        { icon: <SiMongodb className="w-full h-full p-5 text-[#47A248]" />, label: "MongoDB", color: "#47A248" },
        { icon: <SiPostgresql className="w-full h-full p-5 text-[#336791]" />, label: "PostgreSQL", color: "#336791" },
        { icon: <FaGithub className="w-full h-full p-5 text-white" />, label: "GitHub", color: "#F05033" },
    ];

    return (
        <section className="pb-10 px-4 py-10 md:px-0 bg-black">
            <div className="max-w-4xl mx-auto">
                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:pb-8 relative z-20 font-semibold tracking-tight"
                    >
                        Explore My Journey Through <br /> Technical Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"
                    >
                        Each section represents a milestone in my continuous learning path.
                    </motion.p>
                </BackgroundLines>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-items-center mt-8">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div
                                className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500
                                bg-[length:200%_200%] animate-borderSpin transform hover:scale-110 transition-all duration-300 
                                hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] shiny"
                            >
                                <div className="w-full h-full bg-white dark:bg-black rounded-2xl flex items-center justify-center text-3xl md:text-4xl">
                                    {skill.icon}
                                </div>
                            </div>
                            <h2
                                className={`text-sm font-semibold pt-2 text-center ${skill.label === "Next.js" ? "text-black dark:text-white" : ""}`}
                                style={{ color: skill.label !== "Next.js" ? skill.color : undefined }}
                            >
                                {skill.label}
                            </h2>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;