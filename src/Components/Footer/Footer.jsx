import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
    return (
        <footer className="relative bg-black text-gray-300 overflow-hidden py-10">
            {/* Glowing Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mb-6" />
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center px-4">
                {/* Logo and Name */}
                <div className="flex flex-col items-center gap-2">
                    <Image src={logo} alt="Logo" width={60} height={60} />
                    <span className="text-3xl font-semibold text-white">Istiak Ahamed</span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://github.com/istiakahamed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/istiakahamed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:istiak@example.com"
                        className="hover:text-white transition duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-sm">
                    <h2>
                        Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
                        <span className="text-white font-medium">Istiak Ahamed</span>
                    </h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;