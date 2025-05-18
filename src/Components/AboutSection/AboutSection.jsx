"use client";

import Image from "next/image";
import profilePic from "../../../public/Anik.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="bg-black">
            <section className="w-11/12 mx-auto text-gray-300 py-16 px-6 md:px-0.5 flex flex-col lg:flex-row items-center justify-center gap-10">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-[200px] h-[200px] bg-gradient-to-tr from-pink-500 to-purple-500 p-1 rounded-[30%]"
                >
                    <div className="w-full h-full rounded-[30%] overflow-hidden">
                        <Image src={profilePic} alt="Istiak" className="w-full h-full" />
                    </div>
                    <h1 className="absolute origin-right mt-5 text-xs md:text-sm font-semibold flex items-center gap-2">
                        {/* <span className="w-10 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span> */}
                        {/* <span className="text-pink-500 px-0">●</span> */}
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                            Build Solutions. Drive Impact.
                        </span>
                    </h1>
                </motion.div>

                {/* About Me Content */}
                <div>
                    <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-8">
                        About Me
                    </h2>
                    <p className="text-lg mb-4 text-center lg:text-left">
                        I’m Istiak Ahamed, a dedicated full-stack web developer with a strong focus on both frontend and backend technologies.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Next.js, TypeScript
                        </li>
                        <li>
                            <strong>Backend:</strong> Node.js, Express.js, Firebase
                        </li>
                        <li>
                            <strong>Database:</strong> MongoDB
                        </li>
                    </ul>
                    <p className="mt-4 text-center lg:text-left">
                        I specialize in crafting seamless user interfaces and building robust, scalable web applications that deliver high performance and great user experiences.
                    </p>
                    <div className="mt-6 flex justify-center lg:justify-start">
                        <Link href='/about'>
                            <button className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient border border-emerald-500/30 bg-transparent backdrop-blur-md hover:text-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer">
                                <span>See More →</span>
                                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default AboutSection;