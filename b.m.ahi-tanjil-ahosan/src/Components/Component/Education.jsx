
import { motion } from "framer-motion";


const Education = () => {
    return (
        <section id="education" className=" py-20 text-white relative">
            <div className="text-center mb-16">
                <p className="text-sky-400 tracking-widest">Education</p>
                <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-cyan-500 pb-2 bg-linear-to-r from-cyan-900 to-sky-400 bg-clip-text text-transparent">
                    My Academic Journey
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
                {/* Vertical divider line */}
               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-950 via-gray-400 to-sky-500 animate-pulse"></div>
                {/* Diploma Card (Left Side) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 lg:text-right    relative"
                >
                    <div className="absolute hidden md:block -right-2 top-10 w-4 h-4"></div>
                    <h2 className="text-xl font-bold text-cyan-500">Diploma in Computer Science & Technology</h2>
                    <p className="text-gray-300 mt-2">Shariatpur Polytechnic Institute</p>
                    <p className="text-gray-400">2021 - 2025</p>
                </motion.div>

                {/* SSC Card (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 border border-gray-700 rounded-3xl p-8 lg:text-left    relative"
                >
                    <div className="absolute hidden md:block -right-2 top-10 w-4 h-4"></div>
                    <h2 className="text-xl font-bold text-cyan-500"> Secondary School Certificate </h2>
                    <p className="text-gray-300 mt-2">Ulipur Maharani Swarnamayee School And College</p>
                    <p className="text-gray-400">2021</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
