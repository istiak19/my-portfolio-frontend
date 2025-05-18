import Image from "next/image";
import { motion } from "framer-motion";
import EducationImage from "../../../public/diu.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const EducationJourney = () => {
    return (
        <div className="bg-black">
            <div className="w-11/12 mx-auto text-gray-200 py-12 px-6">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient mb-10"
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

                    <p className="text-sm text-gray-400 leading-relaxed">
                        <span className="block font-medium text-white/80 text-xl">
                            Daffodil International University, Dhaka, Bangladesh
                        </span>
                        <span>Session: 2020 – 2024</span><br />
                        <span>
                            CGPA:&nbsp;
                            <span className="text-white font-semibold">3.56 / 4.00</span>
                        </span>
                    </p>

                    <p className="text-base text-gray-300 leading-relaxed text-justify">
                        During my undergraduate studies in Computer Science & Engineering at Daffodil International University (2020–2024), I developed a strong foundation in programming, web development, and database management. I actively participated in the Computer Programming Club, engaging in coding competitions and collaborative projects that honed my problem-solving and technical skills.
                    </p>

                    <p className="text-base text-gray-300 leading-relaxed">
                        Beyond the classroom, I pursued hands-on experiences through diverse projects involving modern web technologies, algorithm design, and software engineering best practices. My continuous drive for learning led me to strengthen my abilities in full-stack development, API integration, and system architecture. These academic and practical experiences have equipped me with the skills and mindset needed to thrive in the tech industry.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default EducationJourney;