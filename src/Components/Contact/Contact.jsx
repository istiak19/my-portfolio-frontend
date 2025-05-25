"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FloatingDock } from "../ui/FloatingDock/floating-dock";
import { BackgroundBeams } from "../ui/BackgroundBeams/background-beams";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

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
            title: "Email",
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
        <div className="bg-black text-white py-14 px-4 min-h-screen relative">
            <div className="w-11/12 mx-auto px-4 md:px-6 z-10 relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg animate-text-gradient">
                            Let’s Connect
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-3">
                            Whether it’s a collaboration, freelance project, or just a hello —
                            I’m only a message away!
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Contact Info */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
                    >
                        <div className="bg-gray-900 p-6 md:p-8 rounded-[14px] shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold mb-5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                Contact Information
                            </h3>
                            <p className="text-gray-400 mb-6">
                                You can reach me directly via email, phone, or visit my location. I’m available
                                for freelance projects, collaborations, or even a quick chat over coffee.
                            </p>
                            <div className="space-y-4 text-base">
                                <div className="flex items-center gap-4">
                                    <Mail className="text-cyan-400" />
                                    <span>istiakanik79@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-indigo-400" />
                                    <span>+8801794270067</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <IoLogoWhatsapp className="text-fuchsia-400 text-xl" />
                                    <span>+8801794270067</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-pink-400" />
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
                                <div className="md:hidden mt-4 flex gap-2 flex-wrap">
                                    {links.map((link, i) => (
                                        <motion.a
                                            key={link.title}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.title}
                                            variants={fadeUp}
                                            custom={i + 2}
                                            className="border-2 border-fuchsia-500 p-2 rounded-full text-xl hover:text-indigo-400 transition-colors"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                        className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
                    >
                        <form className="bg-gray-900 p-6 md:p-10 rounded-[14px] shadow-xl space-y-5">
                            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                Send a Message
                            </h3>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                            />
                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-white"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 cursor-pointer bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-white rounded-lg font-medium hover:opacity-90 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
};

export default Contact;