import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-white dark:bg-black text-gray-800 dark:text-gray-300 overflow-hidden py-10 transition-colors duration-300">
            {/* Glowing Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mb-6" />
            <div className="container mx-auto flex flex-col items-center gap-4 text-center px-4">
                {/* Logo and Name */}
                <div className="flex flex-col items-center gap-2">
                    <Image src={logo} alt="Logo" width={60} height={60} />
                    <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                        Istiak Ahamed
                    </span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://github.com/istiak19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/istiak-ahamed-0619at"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:istiakanik79@gmail.com"
                        className="hover:text-black dark:hover:text-white transition duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-sm mt-4">
                    <h2>
                        Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
                        <span className="text-black dark:text-white font-medium">
                            Istiak Ahamed · Junior Web Developer
                        </span>
                    </h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;