"use client";

import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const ContactSection = () => {
    return (
        <div className="bg-white dark:bg-black transition-colors duration-300 py-14 px-4 min-h-screen relative text-gray-900 dark:text-white">
            <div className="container mx-auto px-4 md:px-6 z-10 relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="text-center mb-12">
                        <h2 className="md:text-4xl text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg animate-text-gradient">
                            Let’s Connect
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    {/* Contact Info */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 h-full"
                    >
                        <div className="bg-gray-100 dark:bg-gray-900 p-6 md:p-8 rounded-[14px] shadow-xl transition-all duration-300 h-full flex flex-col">
                            <h3 className="text-2xl font-semibold mb-5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                Contact Information
                            </h3>
                            <div className="text-gray-700 dark:text-gray-400 mb-6 flex-grow space-y-4">
                                <p>
                                    Feel free to reach out via email, phone, or in person. I am available for freelance projects,
                                    professional collaborations, and consulting opportunities.
                                </p>
                                <p>
                                    I make it a priority to respond within 24 hours and welcome discussions around new ideas,
                                    long-term partnerships, or specialized projects. Whether you need technical expertise,
                                    creative input, or reliable support to bring your vision to life, I’d be glad to help.
                                </p>
                                <p>
                                    Let’s connect and explore how we can work together to achieve your goals.
                                </p>
                            </div>

                            <div className="space-y-4 text-base text-gray-800 dark:text-gray-200">
                                <div className="flex items-center gap-4">
                                    <Mail className="text-cyan-400" />
                                    <span>istiakanik79@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-indigo-400" />
                                    <span>+8801794270067</span>
                                </div>
                                <div className="flex items-center gap-2 text-xl text-fuchsia-400">
                                    <IoLogoWhatsapp title="WhatsApp" />
                                    <span>/</span>
                                    <FaTelegramPlane title="Telegram" />
                                    <span className="text-gray-700 dark:text-gray-200 text-base ml-2">+8801794270067</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-pink-400" />
                                    <span>Dhaka, Bangladesh</span>
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
                        className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 h-full"
                    >
                        <form className="bg-gray-100 dark:bg-gray-900 p-6 md:p-11 rounded-[14px] shadow-xl space-y-5 h-full flex flex-col transition-colors duration-300">
                            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-text-gradient">
                                Send a Message
                            </h3>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                            />
                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-gray-900 dark:text-white flex-grow"
                            />
                            <button
                                type="submit"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 w-full font-semibold rounded-md cursor-pointer border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;