"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "../ui/moving-border";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => pathname === path;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Education", path: "/edu" },
        { name: "Projects", path: "/project" },
        { name: "Contact", path: "/contact" },
    ];

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

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-opacity-80 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex items-center justify-between px-6 py-3 w-11/12 mx-auto">
                {/* Left side */}
                <Link href="/" className="flex items-center group">
                    <div className="relative w-12 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-200">
                        <Image src={logo} alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        Istiak Ahamed
                    </span>
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`transition-colors duration-200 ${isActive(link.path)
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-700 hover:text-blue-500 dark:text-gray-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button (Desktop only) */}
                    <Button
                        onClick={handleResumeDownload}
                        borderRadius="2rem"
                        className="hidden md:flex items-center gap-2 px-5 py-2 text-sm btn bg-gray-800 shadow-2xl hover:scale-105 hover:text-blue-400 text-black font-semibold dark:text-white border-neutral-200 dark:border-slate-800 transition-colors duration-200"
                    >
                        Download Resume <IoCloudDownloadOutline className="text-lg" />
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-start gap-3 px-6 py-4 bg-[#292637] text-white shadow-lg">
                    {navLinks.map((link) => (
                        <li key={link.path} className="w-full">
                            <Link
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block w-full py-1 ${isActive(link.path)
                                    ? "text-blue-500 font-semibold"
                                    : "hover:text-blue-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="w-full pt-2">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                handleResumeDownload();
                            }}
                            className="flex items-center gap-2 px-6 rounded-full py-2 text-sm text-white border border-blue-400 hover:text-blue-400"
                        >
                            Download Resume <IoCloudDownloadOutline className="text-lg" />
                        </button>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;