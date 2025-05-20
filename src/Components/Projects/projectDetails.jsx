"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";
import bloodProject from '../../../public/project/BloodProject.png';
import eduGenie from '../../../public/project/eduGenie.png';
import eduProject from '../../../public/project/eduProject.png';
import fundProject from '../../../public/project/fundProject.png';
import { BackgroundBeams } from "../ui/background-beams";

const ProjectDetails = ({ id }) => {
    const projects = [
        {
            id: 1,
            name: "BloodBanker",
            image: bloodProject,
            technologies: "React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Firebase",
            description: "BloodBanker is an online platform designed to connect blood donors and recipients, enabling seamless and efficient blood donation management. It allows users to register as donors, browse available donation campaigns, and get in touch with nearby blood banks or individuals in need. The platform also offers features like user profiles, donation tracking, and volunteer opportunities. By making blood donation more accessible, organized, and impactful for communities, BloodBanker not only saves lives but also fosters a spirit of community support, encourages volunteerism, and strengthens social responsibility across society.",
            challenges: "Seamlessly connecting the platform with local blood banks for real-time updates.",
            improvements: "Ensuring secure data storage and seamless integration with blood banks and donation campaigns.",
            clientLink: "https://github.com/istiak19/BloodBanker-client",
            serverLink: "https://github.com/istiak19/BloodBanker-server",
            liveLink: "https://bloodbanker-567f0.web.app/",
            features: [
                "User Roles – Manage donor, volunteer, and admin access securely.",
                "Donation Management – Schedule and track blood donations effortlessly.",
                "Localized Search – Find donors and recipients by district and upazila.",
                "Secure Authentication – Safeguard user data with JWT authentication.",
                "Admin Dashboard – Monitor real-time user and donation statistics.",
                "Blog Section – Publish updates, health tips, and inspiring stories.",
                "Donation Tracking – Keep donation statuses updated and transparent.",
                "Payment Integration – Enable Stripe-powered donations for campaigns.",
                "Responsive Design – Enjoy a smooth experience on any device.",
                "Community Impact – Organize events and promote blood donation awareness."
            ]
        },
        {
            id: 2,
            name: "EduGenie",
            image: eduGenie,
            technologies: "Next.js, NextAuth.js, Tailwind CSS, Node.js, Express.js, MongoDB",
            description: "EduGenie is a cutting-edge AI-powered educational platform designed to revolutionize modern learning experiences for both students and educators. Through a dynamic role-based dashboard, students can generate custom course content based on their chosen topic, difficulty level, and duration—empowering them to learn at their own pace with AI-generated chapters, videos, and code examples. Educators, on the other hand, are provided with tools to publish and approve educational blogs, create quizzes, and manage their profiles seamlessly. The platform focuses on interactivity and accessibility with a clean, responsive UI, built using Next.js, Tailwind CSS, and integrated with MongoDB for persistent data storage. Authenticated via NextAuth.js, EduGenie ensures secure access and smooth transitions across devices. Whether you're a curious student or a passionate teacher, EduGenie makes learning more personalized, efficient, and enjoyable by merging the power of artificial intelligence with modern education.",
            challenges: "Seamlessly connecting the platform with local blood banks for real-time updates.",
            improvements: "Ensuring secure data storage and seamless integration with blood banks and donation campaigns.",
            clientLink: "https://github.com/imtiaz-zihad/Edugenie/tree/development",
            liveLink: "https://genies-two.vercel.app/",
            features: [
                "AI-Powered Course Generation – Uses Gemini API to generate personalized educational content.",
                "Student Dashboard – Personalized dashboard with progress tracking, course access, and quiz results.",
                "Educator Dashboard – Manage courses, blogs, quizzes, and monitor student activities.",
                "Role-Based Access Control (RBAC) – Role-specific permissions for students, educators, and admins.",
                "Chapter-Wise Learning Flow – Navigate course chapters with guided progression.",
                "Quiz and Evaluation – Includes quizzes with automatic pass/fail based on scores.",
                "Blog Creation – Educators can publish blogs with interactive features like likes and comments.",
                "Chatbot Integration – AI chatbot assists students with real-time queries.",
                "Course Management – Role-specific course creation and management functionality.",
                "Security & Authentication – JWT-based secure login with protected routes.",
                "MongoDB Backend – Structured storage for users, courses, quizzes, and blogs."
            ]
        },
        {
            id: 3,
            name: "EduCircle",
            image: eduProject,
            technologies: "React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Firebase, DaisyUI",
            description: "EduCircle is an interactive platform designed for managing assignments in an online group study environment.",
            challenges: "Optimizing MongoDB queries for efficient data retrieval and updates.",
            improvements: "Ensuring secure login and role-based access control.",
            serverLink: "https://github.com/istiak19/EduCircle-server",
            clientLink: "https://github.com/istiak19/EduCircle-client",
            liveLink: "https://educircle-839d0.web.app/",
            features: [
                "User Authentication – Sign up and log in via form or Google authentication.",
                "Assignment Management – Create, modify, and delete assignments easily.",
                "Assignment Submission – Submit assignments with 'pending' or 'completed' status.",
                "Peer Grading – Users can grade others' assignments but not their own.",
                "Pending Status – Only 'pending' assignments are shown in the status list.",
                "Dark/Light Theme – Switch between dark and light mode for a better experience."
            ]
        },
        {
            id: 4,
            name: "Fundsphere",
            image: fundProject,
            technologies: "React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Firebase, DaisyUI",
            description: "FundSphere is a crowdfunding platform that enables users to raise funds for various causes.",
            challenges: "Handling donations and ensuring secure transactions.",
            improvements: "Implementing secure payment gateways.",
            serverLink: "https://github.com/istiak19/assignment-10-server",
            clientLink: "https://github.com/istiak19/assignment-10-client",
            liveLink: "https://fundsphere-website.web.app/",
            features: [
                "User Authentication – Secure login and registration via email/password or Google authentication.",
                "Campaign Management – Users can create, modify, and delete their own campaigns.",
                "Donation System – Users can donate to active campaigns to help fund causes.",
                "Dark/Light Mode – Toggle between dark and light themes for better accessibility.",
                "Protected Routes – Campaign management and donation pages are restricted to logged-in users."
            ]
        }
    ];

    const project = projects.find(p => p.id === Number(id));

    if (!project) {
        return <div className="p-6 text-red-600 text-center font-semibold">Project not found.</div>;
    }

    return (
        <motion.div
            className="bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="w-11/12 mx-auto p-8 space-y-10 py-16"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-4"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {project.name}
                </motion.h1>

                <motion.div
                    className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[650px] rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-white dark:bg-gray-900">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                            className="rounded-xl p-2 object-cover"
                        />
                    </div>
                </motion.div>

                <section className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                    <p>{project.description}</p>
                </section>

                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    {project.liveLink && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-emerald-500/30 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <span>Live Site</span>
                            <ArrowUpRight className="text-indigo-500" />
                        </Link>
                    )}
                    {project.clientLink && (
                        <Link
                            href={project.clientLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-emerald-500/30 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <span>Client Repo</span>
                            <FaGithub className="text-indigo-500" />
                        </Link>
                    )}
                    {project.serverLink && (
                        <Link
                            href={project.serverLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-emerald-500/30 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <FaGithub className="text-indigo-500" />
                            <span>Server Repo</span>
                        </Link>
                    )}
                </div>

                <section>
                    <h2 className="text-3xl font-semibold mb-3 border-b-2 border-indigo-500 inline-block pb-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                        Technologies Used
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{project.technologies}</p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-500 inline-block pb-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient">
                        Features
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="hover:text-indigo-600 transition-colors duration-300">{feature}</li>
                        ))}
                    </ul>
                </section>

                {project.challenges && (
                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-600 border-b-2 border-red-500 inline-block dark:text-red-400">Challenges</h2>
                        <p className="text-gray-600 dark:text-gray-400">{project.challenges}</p>
                    </section>
                )}

                {project.improvements && (
                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600 border-b-2 inline-block border-red-500 dark:text-green-400">Improvements</h2>
                        <p className="text-gray-600 dark:text-gray-400">{project.improvements}</p>
                    </section>
                )}
            </motion.div>
            <BackgroundBeams />
        </motion.div>
    );
};

export default ProjectDetails;