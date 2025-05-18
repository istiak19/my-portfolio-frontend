"use client";

import Image from "next/image";
import profilePic from "../../../public/Anik.jpg";
import { Button } from "../ui/moving-border";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="bg-black">
            <section className="w-11/12 mx-auto text-gray-300 py-10 px-6 md:px-0.5 flex flex-col lg:flex-row items-center justify-center gap-10">
                {/* Profile Image */}
                <div className="relative w-[350px] h-[350px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 rounded-full clip-hexagon z-0" />
                    {/* Inner Background (for border thickness effect) */}
                    {/* <div className="absolute inset-[8px] rounded-full bg-[#0f172a] clip-hexagon z-5" /> */}
                    <div className="absolute inset-[6px] clip-hexagon z-10">
                        <Image
                            src={profilePic}
                            alt="Istiak Ahamed"
                            width={280}
                            height={280}
                            className="w-full h-full p-3"
                        />
                    </div>
                </div>

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
                            <button className="px-4 py-2 cursor-pointer backdrop-blur-sm border bg-transparent border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
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