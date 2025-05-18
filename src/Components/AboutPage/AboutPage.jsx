"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlane, FaUtensils, FaBookOpen, FaCamera } from "react-icons/fa";
import profileImg from "../../../public/Anik.jpg";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const AboutPage = () => {
    return (
        <div className="bg-black">
            <BackgroundBeamsWithCollision>
                <div className="w-11/12 mx-auto text-white flex flex-col md:flex-row justify-center px-6 py-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-[250px] h-[340px] md:w-[300px] md:h-[350px] bg-gradient-to-tr from-pink-500 to-purple-500 p-1 rounded-[30%]"
                    >
                        <div className="w-full h-full rounded-[30%] overflow-hidden">
                            <Image src={profileImg} alt="Istiak" className="w-full h-full" />
                        </div>
                        <h1 className="absolute origin-right mt-5 text-xs md:text-sm font-semibold flex items-center gap-2">
                            <span className="w-18 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                            {/* <span className="text-pink-500 px-0">●</span> */}
                            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                                Build Solutions. Drive Impact.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                        <h2 className="text-4xl font-semibold text-center md:text-left bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-8">About Me</h2>
                        <p className="text-gray-300 text-justify text-lg leading-relaxed">
                            I’m Istiak Ahamed, a passionate and detail-oriented{" "}
                            <span className="text-purple-400 font-semibold">Frontend Developer</span> who loves building modern, responsive, and user-friendly web applications. I’m always eager to learn new technologies, take on challenges, and deliver impactful digital experiences.
                        </p>

                        <div className="mt-6">
                            {/* <h3 className="text-xl font-semibold mb-2">🧰 My Tech Toolbox:</h3> */}
                            <ul className="list-disc pl-5 space-y-1 text-gray-300">
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
                        </div>

                        <div className="mt-8 border-t border-gray-700 pt-4">
                            <h3 className="text-lg font-semibold flex items-center mb-3">
                                <span className="mr-2"></span>My Journey
                                <span className="ml-2 w-20 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                            </h3>
                            <p className="text-gray-300 text-justify">
                                My journey into programming began during my Computer Science & Engineering studies, when I became curious about how websites work. This curiosity quickly turned into a deep fascination with coding and problem-solving, leading me to explore various web technologies.Over time, I have gained expertise in JavaScript, React, Next.js, and the MERN stack, allowing me to build full-stack applications that are both functional and user-friendly..
                                <br />
                                <br />
                                My journey into programming started during my Computer Science & Engineering studies, when I became curious about how websites work. This curiosity soon turned into a deep fascination with coding.
                                <br />
                                <br />
                                I enjoy working on projects that solve real-world problems and improve people's lives through technology. Whether it's developing web applications, interactive user interfaces, or full-stack solutions, I find joy in creating seamless, responsive, and user-friendly experiences.
                                <br />
                                <br />
                                In my free time, I enjoy traveling and exploring new foods, which adds to my creativity and appreciation for diverse cultures.
                                <br />
                                <br />
                                I’m on a mission to make an impact in the tech world by building innovative digital solutions. If you’re looking for a passionate developer who loves to learn, collaborate, and create, let’s connect!
                            </p>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-4">
                            <h3 className="text-lg font-semibold flex items-center mb-3">
                                <span className="mr-2"></span> My Hobbies & Interests
                                <span className="ml-2 w-20 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                            </h3>
                            <ul className="pl-1 text-gray-300 space-y-3">
                                <li className="flex items-start gap-2">
                                    <FaPlane className="text-pink-400 mt-1" />
                                    <span>
                                        <strong>Traveling:</strong> Exploring new places, meeting diverse people, and embracing cultures.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaUtensils className="text-yellow-400 mt-1" />
                                    <span>
                                        <strong>Food Lover:</strong> I enjoy trying local cuisine and street food from different regions.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaBookOpen className="text-blue-400 mt-1" />
                                    <span>
                                        <strong>Learning:</strong> Constantly upskilling myself with the latest tech trends and frameworks.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCamera className="text-purple-400 mt-1" />
                                    <span>
                                        <strong>Photography:</strong> Capturing moments during my travels and everyday life.
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </motion.div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
};

export default AboutPage;