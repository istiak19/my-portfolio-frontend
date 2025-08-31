import Image from "next/image";
import { motion } from "framer-motion";
import EducationImage from "../../../public/diu.jpg";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const EducationJourney = () => {
    const certificates = [
        {
            title: "Complete Web Development Course",
            date: "July 2024 – Jan 2025",
            link: "https://drive.google.com/file/d/1WYpYr_aLjaLxKVIX6A2W6H0wsS1TxpRa/view?usp=sharing",
            description: "Completed the Full-Stack Web Development Course with hands-on experience in HTML, CSS, JavaScript, React, Node.js, MongoDB, and modern web development practices."
        }
    ];

    return (
        <div className="bg-black">
            <div className="container mx-auto text-gray-200 py-10 px-6">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:text-4xl text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-10"
                >
                    Education Journey
                </motion.h2>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={EducationImage}
                        alt="Daffodil International University"
                        className="w-full h-[500px] object-cover"
                        priority
                    />
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8 space-y-4 text-left"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor of Science in Computer Science & Engineering
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed space-y-1">
                        <span className="block font-medium text-white/80 text-xl">
                            Daffodil International University, Dhaka, Bangladesh
                        </span>
                        <span className="block">
                            CGPA: <span className="text-white/80 font-semibold">3.56 out of 4.00</span>
                        </span>
                        <span className="block">Session: <span className="text-white/80 font-semibold">2019 – 2020</span>
                        </span>
                    </p>

                    <p className="text-base text-gray-300 leading-relaxed text-justify">
                        During my undergraduate studies in Computer Science & Engineering at Daffodil International University (2020–2024), I developed a strong foundation in programming, web development, and database management. I actively participated in the Computer Programming Club, engaging in coding competitions and collaborative projects that honed my problem-solving and technical skills.
                    </p>

                    <p className="text-base text-gray-300 leading-relaxed">
                        Beyond the classroom, I pursued hands-on experiences through diverse projects involving modern web technologies, algorithm design, and software engineering best practices. My continuous drive for learning led me to strengthen my abilities in full-stack development, API integration, and system architecture. These academic and practical experiences have equipped me with the skills and mindset needed to thrive in the tech industry.
                    </p>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:text-3xl text-xl font-semibold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mt-12"
                >
                    Courses & Certificates
                </motion.h2>

                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                        <p className="text-gray-400 mb-4">
                            <span className="font-semibold text-white">Programming Hero</span> &mdash; {cert.date}
                        </p>
                        <p className="text-gray-300 text-justify">{cert.description}</p>
                        <div className="mt-6">
                            <Link
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient border border-emerald-500/30 bg-transparent backdrop-blur-md hover:text-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer">
                                    <span>View Certificate →</span>
                                    <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EducationJourney;