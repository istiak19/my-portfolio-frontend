"use client";

import { motion } from "framer-motion";
import { MdMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Mail, Phone, MapPin } from "lucide-react";
import { FloatingDock } from "../ui/FloatingDock/floating-dock";
import { BackgroundBeams } from "../ui/BackgroundBeams/background-beams";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";

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
        { title: "GitHub", icon: <FaGithub />, href: "https://github.com/istiak19" },
        { title: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/istiak-ahamed-0619at/" },
        { title: "Email", icon: <MdMail />, href: "mailto:istiakanik79@gmail.com" },
        { title: "Twitter", icon: <FaTwitter />, href: "https://x.com/ISTIAKA13842838" },
        { title: "Facebook", icon: <FaFacebook />, href: "https://www.facebook.com/istiak.ahamed.19/" },
        { title: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/8801794270067" },
        { title: "Telegram", icon: <FaTelegramPlane />, href: "https://t.me/+8801794270067" },
    ];

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white py-14 px-4 min-h-screen relative transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 z-10 relative">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg animate-text-gradient">
                            Let’s Connect
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-3">
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
                        <div className="bg-gray-100 dark:bg-gray-900 p-6 md:p-8 rounded-[14px] shadow-xl transition-colors duration-300">
                            <h3 className="text-2xl font-semibold mb-5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                Contact Information
                            </h3>
                            <div className="text-gray-700 dark:text-gray-300 mb-6 flex-grow space-y-4">
                                <p>
                                    Feel free to reach out via email, phone, or in person. I am available for freelance projects,
                                    professional collaborations, and consulting opportunities.
                                </p>
                                <p>
                                    Let’s connect and explore how we can work together to achieve your goals.
                                </p>
                            </div>

                            <div className="space-y-3 text-base">
                                <div className="flex items-center gap-4">
                                    <Mail className="text-cyan-400" />
                                    <span>istiakanik79@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-indigo-400" />
                                    <span>+8801794270067</span>
                                </div>
                                <div className="flex items-center gap-2 text-fuchsia-400 text-xl">
                                    <IoLogoWhatsapp title="WhatsApp" />
                                    <span>/</span>
                                    <FaTelegramPlane title="Telegram" />
                                    <span className="text-gray-900 dark:text-gray-200 text-base ml-2">+8801794270067</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-pink-400" />
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-4">
                                <h4 className="text-lg uppercase mb-2 font-medium bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                                    Social Profiles
                                </h4>
                                <FloatingDock
                                    mobileClassName="translate-y-34"
                                    items={links.map(link => ({ ...link, target: "_blank", rel: "noopener noreferrer" }))}
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
                                            className="border-2 border-fuchsia-500 p-2 rounded-full text-xl hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
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
                        <form className="bg-gray-100 dark:bg-gray-900 p-6 md:p-12 rounded-[14px] shadow-xl space-y-5 transition-colors duration-300">
                            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                Send a Message
                            </h3>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black dark:text-white"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black dark:text-white"
                            />
                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-black dark:text-white"
                            />
                            <button
                                type="submit"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 w-full font-semibold cursor-pointer border rounded-md border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
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