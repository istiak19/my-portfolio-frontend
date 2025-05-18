"use client";

import Image from "next/image";
import { Cover } from "../ui/cover";
import anikPic from "../../../public/Anik.jpg";
import { Button } from "../ui/moving-border";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FloatingDock } from "../ui/floating-dock";
import { Meteors } from "../ui/meteors";

const Banner = () => {
    const resumeViewLink =
        "https://drive.google.com/file/d/18PsJC-Kitq9x_GP-0aBVT7qQTWHiYKn5/view?usp=sharing";
    const resumeDownloadLink =
        "https://drive.google.com/uc?export=download&id=18PsJC-Kitq9x_GP-0aBVT7qQTWHiYKn5";

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
            title: "Mail",
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
        }
    ];


    return (
        <div className="w-full relative bg-black text-white overflow-hidden">

            {/* Background Dots  */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/8 left-20 w-full h-3/4 bg-dot-pattern opacity-30 mask-left-to-right-fade"></div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-11/12 mx-auto px-6 py-16 md:py-24 relative z-10">
                {/* Left Section */}
                <div className="lg:w-1/2 space-y-4 md:space-y-6 relative z-20">
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-300 mb-2 tracking-wide">
                        Hello, I&apos;m <span className="text-white font-bold">Istiak Ahamed</span>
                    </h1>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        <Cover>
                            <span className="inline-block bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                                FrontEnd Developer
                            </span>
                        </Cover>
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-300 text-justify">
                        I am a dedicated and results-driven web developer with a strong passion for learning and growth. I thrive in dynamic environments, efficiently manage multiple tasks, and consistently deliver high-quality outcomes. My ability to adapt quickly to new technologies allows me to stay ahead in the ever-evolving tech landscape.
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
                        <Button
                            onClick={handleResumeDownload}
                            borderRadius="2rem"
                            className="flex items-center gap-2 px-5 py-2 text-sm bg-gray-700 hover:text-blue-400 cursor-pointer transition text-white font-semibold shadow-xl"
                        >
                            Download Resume <IoCloudDownloadOutline className="text-lg" />
                        </Button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 relative flex justify-center items-center">
                    {/* Add Meteors Component */}
                    <Meteors number={4} />
                    {/* Stylish Profile Image */}
                    <figure className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-[40%_60%_70%_30%/30%_40%_60%_70%] border-4 border-fuchsia-500 shadow-2xl animate-float-slow">
                        <Image
                            src={anikPic}
                            alt="User Image"
                            fill
                            className="object-cover"
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
                        <span className="w-40 h-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;