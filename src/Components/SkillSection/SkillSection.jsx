"use client";

import {
    FaHtml5, FaJs, FaReact, FaNode, FaGithub, FaCss3
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoFirebase } from "react-icons/bi";
import {
    SiMongodb, SiNextdotjs, SiTypescript, SiPostgresql
} from "react-icons/si";

const SkillSection = () => {
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
        { icon: <FaGithub className="w-full h-full p-5 text-[#F05033]" />, label: "GitHub", color: "#F05033" },
    ];

    return (
        <section className="pb-10 px-4 md:px-0 bg-black">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center w-full flex-col px-4 py-8">
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:py-8 relative z-20 font-bold tracking-tight">
                        Explore My Journey Through <br /> Technical Expertise
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center mt-5">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div
                                className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500
                                bg-[length:200%_200%] animate-borderSpin transform hover:scale-110 transition-all duration-300 
                                hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] shiny"
                            >
                                <div className="w-full h-full bg-white dark:bg-black rounded-2xl flex items-center justify-center">
                                    {skill.icon}
                                </div>
                            </div>
                            <h2
                                className={`text-sm font-semibold pt-2 text-center ${skill.label === "Next.js" ? "text-black dark:text-white" : ""}`}
                                style={{ color: skill.label !== "Next.js" ? skill.color : undefined }}
                            >
                                {skill.label}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;