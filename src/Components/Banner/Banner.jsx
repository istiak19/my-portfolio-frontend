"use client";

import Image from "next/image";
import { MdMail } from "react-icons/md";
import { Cover } from "../ui/Cover/cover";
import anikPic from "../../../public/Anik.jpg";
import { Meteors } from "../ui/Meteors/meteors";
import { Typewriter } from 'react-simple-typewriter';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FloatingDock } from "../ui/FloatingDock/floating-dock";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
    const resumeViewLink = "https://drive.google.com/file/d/18PsJC-Kitq9x_GP-0aBVT7qQTWHiYKn5/view?usp=sharing";
    const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=18PsJC-Kitq9x_GP-0aBVT7qQTWHiYKn5";
    const handleResumeDownload = () => {
        window.open(resumeViewLink, "_blank");
        const link = document.createElement("a");
        link.href = resumeDownloadLink;
        link.setAttribute("download", "Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const links = [
        {
            title: "GitHub",
            icon: <FaGithub />,
            href: "https://github.com/istiak19",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/istiak-ahamed-0619at/",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            title: "Email",
            icon: <MdMail />,
            href: "mailto:istiakanik79@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            title: "Twitter",
            icon: <FaTwitter />,
            href: "https://x.com/ISTIAKA13842838",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            title: "Facebook",
            icon: <FaFacebook />,
            href: "https://www.facebook.com/istiak.ahamed.19/",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            href: "https://wa.me/8801794270067",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            title: "Telegram",
            icon: <FaTelegramPlane />,
            href: "https://t.me/+8801794270067",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];


    return (
        <div className="w-full relative bg-black text-white overflow-hidden">

            {/* Background Dots  */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/8 left-20 w-full h-3/4 bg-dot-pattern opacity-20 mask-left-to-right-fade"></div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-6 py-16 relative z-10">
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-4 md:space-y-6 relative z-20">
                    <h1 className="text-2xl md:text-3xl text-gray-300 mb-3 tracking-wide leading-snug">
                        Hi there!, I&apos;m <span className="text-white font-semibold">Istiak Ahamed</span>
                    </h1>
                    <h2 className="text-2xl md:text-5xl font-semibold md:font-bold  leading-tight">
                        <Cover>
                            <span className="inline-block bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient pt-5 md:pt-1">
                                <Typewriter
                                    words={[
                                        'Front-End Developer',
                                        'MERN Stack Developer',
                                        'Junior Web Developer',
                                        'Full Stack Developer'
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </Cover>
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-300 text-justify">
                        I’m a passionate web developer focused on creating clean, responsive, and user-friendly websites. I enjoy learning new technologies, adapting quickly, and always aim to deliver high-quality work on time. I thrive in dynamic environments and love solving problems through code.
                    </p>
                    <div>
                        <FloatingDock mobileClassName="translate-y-22" items={links} />
                        <div className="md:hidden">
                            <ul className="flex gap-2 py-1 md:py-5">
                                <li className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                    <a href="https://github.com/istiak19" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="banner-list-a" />
                                    </a>
                                </li>

                                <li className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                    <a href="https://www.linkedin.com/in/istiak-ahamed-0619at/" target="_blank">
                                        <FaLinkedin className="banner-list-a" />
                                    </a>
                                </li>

                                <li className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                    <a href="mailto:istiakanik79@gmail.com" target="_blank">
                                        <MdMail className="banner-list-a" />
                                    </a>
                                </li>

                                <li className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                    <a href="https://x.com/ISTIAKA13842838" target="_blank">
                                        <FaTwitter className="banner-list-a" />
                                    </a>
                                </li>

                                <li className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                    <a href="https://www.facebook.com/istiak.ahamed.19/" target="_blank">
                                        <FaFacebook className="banner-list-a" />
                                    </a>
                                </li>

                                <li className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                    <a href="https://wa.me/8801794270067" target="_blank">
                                        <FaWhatsapp className="banner-list-a" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleResumeDownload}
                            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient border border-emerald-500/30 bg-transparent backdrop-blur-md hover:text-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                        >
                            <IoCloudDownloadOutline className="text-xl transition-transform duration-300 group-hover:rotate-[-15deg] text-white hover:text-indigo-500" />
                            <span className="font-medium">Download Resume</span>
                            <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-3/4 mx-auto" />
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 relative flex justify-center items-center">
                    {/* Add Meteors Component */}
                    <Meteors number={4} />
                    {/* Stylish Profile Image */}
                    <figure className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-[2px] border-fuchsia-600/50 shadow-3xl backdrop-blur-md bg-fuchsia-500 overflow-hidden ring-1 ring-fuchsia-500/10 hover:scale-105 transition-transform duration-500 ease-in-out animate-float-slow">
                        <Image
                            src={anikPic}
                            alt="Istiak Ahamed's profile"
                            fill
                            className="grayscale-0 hover:grayscale transition-all duration-500 ease-in-out"
                        />
                    </figure>

                    <style jsx>{`
                        @keyframes moveInOut {
                            0% {
                                transform: scale(1) translateY(0);
                            }
                            50% {
                                transform: scale(1.05) translateY(-10px); /* Move up and slightly enlarge */
                            }
                            100% {
                                transform: scale(1) translateY(0); /* Reset back to original position */
                            }
                        }

                        .animate-float-slow {
                            animation: moveInOut 2s ease-in-out infinite; /* Apply the animation */
                        }
                    `}</style>

                    {/* Gradient Text */}
                    <h1 className="absolute bottom-6 right-4 rotate-90 origin-right text-xs md:text-sm font-semibold flex items-center gap-2">
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                            Build Solutions. Drive Impact.
                        </span>
                        <span className="w-36 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;