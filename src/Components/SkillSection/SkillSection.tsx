"use client";

import { motion, Variants } from "framer-motion";
import { BiLogoFirebase } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaJs, FaReact, FaNode, FaGithub, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript, SiPostgresql, SiRadixui, SiMongoose, SiRedux, SiAxios, SiReactquery, SiPrisma } from "react-icons/si";
import React from "react";
import { Skill } from "@/src/type";

const frontendSkills: Skill[] = [
    { icon: <FaHtml5 className="w-full h-full p-5 text-[#E34F26]" />, label: "HTML5", color: "#E34F26" },
    { icon: <FaCss3 className="w-full h-full p-5 text-[#1572B6]" />, label: "CSS3", color: "#1572B6" },
    { icon: <RiTailwindCssFill className="w-full h-full p-5 text-[#38BDF8]" />, label: "TailwindCSS", color: "#38BDF8" },
    { icon: <FaJs className="w-full h-full p-5 text-[#F7DF1E]" />, label: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact className="w-full h-full p-5 text-[#61DAFB]" />, label: "React.js", color: "#61DAFB" },
    { icon: <SiNextdotjs className="w-full h-full p-5 text-black dark:text-white" />, label: "Next.js", color: "" },
    { icon: <SiTypescript className="w-full h-full p-5 text-[#3178C6]" />, label: "TypeScript", color: "#3178C6" },
    { icon: <SiRadixui className="w-full h-full p-5 text-[#61DAFB]" />, label: "shadcn/ui", color: "#61DAFB" },
    { icon: <SiRedux className="w-full h-full p-5 text-[#764ABC]" />, label: "Redux", color: "#764ABC" },
    { icon: <FaGithub className="w-full h-full p-5 text-gray-900 dark:text-white" />, label: "GitHub", color: "" },
    { icon: <SiAxios className="w-full h-full p-5 text-[#5A29E4]" />, label: "Axios", color: "#5A29E4" },
    { icon: <SiReactquery className="w-full h-full p-5 text-[#FF4154]" />, label: "TanStack Query", color: "#FF4154" },
];

const backendSkills: Skill[] = [
    { icon: <BiLogoFirebase className="w-full h-full p-5 text-[#FFCA28] dark:text-[#FFA000]" />, label: "Firebase", color: "#FFCA28" },
    { icon: <FaNode className="w-full h-full p-5 text-[#339933] dark:text-[#66BB6A]" />, label: "Node.js", color: "#339933" },
    { icon: <SiMongodb className="w-full h-full p-5 text-[#4DB33D] dark:text-[#81C784]" />, label: "MongoDB", color: "#4DB33D" },
    { icon: <SiMongoose className="w-full h-full p-5 text-[#800000] dark:text-[#E57373]" />, label: "Mongoose", color: "#339933" },
    { icon: <SiPostgresql className="w-full h-full p-5 text-[#336791] dark:text-[#5C9AC7]" />, label: "PostgreSQL", color: "#336791" },
    { icon: <SiPrisma className="w-full h-full p-5 text-black dark:text-white" />, label: "Prisma ORM", color: "" },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillSection: React.FC = () => {
    const renderSkills = (skills: Skill[]) =>
        skills.map((skill, idx) => (
            <motion.div key={idx} variants={item} className="flex flex-col items-center cursor-pointer">
                <div
                    className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500
                    bg-[length:200%_200%] animate-borderSpin transform hover:scale-110 transition-all duration-300 
                    hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                    <div className="w-full h-full bg-white dark:bg-black rounded-2xl flex items-center justify-center">
                        {skill.icon}
                    </div>
                </div>
                <h2
                    className={`text-sm font-semibold pt-2 text-center ${skill.label === "Next.js" || skill.label === "GitHub" ? "text-gray-900 dark:text-white" : ""
                        }`}
                    style={{ color: skill.color }}
                >
                    {skill.label}
                </h2>
            </motion.div>
        ));

    return (
        <section className="pb-10 px-4 md:px-0 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center w-full flex-col px-4 py-8"
                >
                    <h2 className="md:text-4xl text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-8">
                        Explore My Journey Through <br /> Technical Expertise
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-gray-700 dark:text-gray-400 text-center">
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-6 text-center">
                    Front-End Development Skills
                </h3>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center"
                >
                    {renderSkills(frontendSkills)}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-6 text-center">
                    Back-End Development Skills
                </h3>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center"
                >
                    {renderSkills(backendSkills)}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillSection;