"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FloatingDock } from "../ui/floating-dock";
import { BackgroundBeams } from "../ui/background-beams";

const Contact = () => {
    const links = [
        {
            title: "GitHub",
            icon: <FaGithub />,
            href: "https://github.com/istiak19",
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/istiak-ahamed-0619at/",
        },
        {
            title: "Mail",
            icon: <MdMail />,
            href: "mailto:istiakanik79@gmail.com",
        },
        {
            title: "Twitter",
            icon: <FaTwitter />,
            href: "https://x.com/ISTIAKA13842838",
        },
        {
            title: "Facebook",
            icon: <FaFacebook />,
            href: "https://www.facebook.com/istiak.ahamed.19/",
        },
        {
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            href: "https://wa.me/8801794270067",
        },
    ];

    return (
        <div>
            <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-14 px-4 min-h-screen relative">
                <div className="w-11/12 mx-auto px-6 z-10 relative">
                    <div>
                        <h2 className="text-5xl font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg animate-text-gradient">
                            Let’s Connect
                        </h2>
                        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                            Whether it’s a collaboration, a freelance project, or just a hello — I’m only a message away!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Contact Info */}
                        <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500">
                            <div className="bg-gray-900 p-6 rounded-[14px] shadow-xl hover:shadow-primary/30 transition-all duration-300">
                                <h3 className="text-2xl font-semibold mb-5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                    Contact Information
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    You can reach me directly via email, phone, or visit my location. I’m available
                                    for freelance projects, collaborations, or even a quick chat over coffee.
                                </p>
                                <div className="space-y-4 text-base">
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-primary" />
                                        <span>istiakanik79@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-primary" />
                                        <span>+8801794270067</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <IoLogoWhatsapp className="text-primary text-xl" />
                                        <span>+8801794270067</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="text-primary" />
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg uppercase mb-3 font-medium bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                                        Social Profiles
                                    </h4>
                                    <FloatingDock
                                        mobileClassName="translate-y-34"
                                        items={links.map(link => ({
                                            ...link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        }))}
                                    />
                                    <div className="md:hidden">
                                        <ul className="flex gap-2">
                                            {links.map(link => (
                                                <li key={link.title} className="banner-list border-2 border-fuchsia-500 p-2 rounded-full">
                                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                                        {link.icon}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500">
                            <form className="bg-gray-900 p-6 rounded-[14px] shadow-xl hover:shadow-primary/30 transition-all duration-300 space-y-5 md:p-8">
                                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                    Send a Message
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 cursor-pointer text-white rounded-lg font-medium hover:bg-pColor transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
};

export default Contact;