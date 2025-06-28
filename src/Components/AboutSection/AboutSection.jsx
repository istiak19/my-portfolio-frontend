'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../../public/Anik.jpg";

// Animation variants
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

const AboutSection = () => {
    return (
        <section className="bg-black">
            <section className="w-11/12 mx-auto text-gray-300 py-10 px-6 md:px-0.5 flex flex-col lg:flex-row items-center justify-center gap-10">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-[200px] h-[200px] bg-gradient-to-tr from-pink-500 to-purple-500 p-1 rounded-[30%]"
                >
                    <div className="w-full h-full rounded-[30%] overflow-hidden">
                        <Image src={profilePic} alt="Istiak" className="w-full h-full" />
                    </div>
                    <h1 className="absolute origin-right mt-5 text-xs md:text-sm font-semibold flex items-center gap-2">
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                            Build Solutions. Drive Impact.
                        </span>
                    </h1>
                </motion.div>

                {/* About Me Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={textVariant}
                        custom={0}
                        className="text-4xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-8"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        variants={textVariant}
                        custom={1}
                        className="text-lg mb-4 text-center lg:text-left"
                    >
                        I’m Istiak Ahamed, a dedicated full-stack web developer with a strong focus on both frontend and backend technologies.
                    </motion.p>

                    <motion.ul
                        variants={textVariant}
                        custom={2}
                        className="list-disc pl-5 space-y-1"
                    >
                        <li>
                            <strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Next.js, TypeScript
                        </li>
                        <li>
                            <strong>Backend:</strong> Node.js, Express.js, Firebase
                        </li>
                        <li>
                            <strong>Database:</strong> MongoDB
                        </li>
                    </motion.ul>

                    <motion.p
                        variants={textVariant}
                        custom={3}
                        className="mt-4 text-center lg:text-left"
                    >
                        I specialize in crafting seamless user interfaces and building robust, scalable web applications that deliver high performance and great user experiences.
                    </motion.p>

                    <motion.div
                        variants={textVariant}
                        custom={4}
                        className="mt-6 flex justify-center lg:justify-start"
                    >
                        <Link href='/about'>
                            <button className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient border border-emerald-500/30 bg-transparent backdrop-blur-md hover:text-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer">
                                <span>See More →</span>
                                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </section>
    );
};

export default AboutSection;