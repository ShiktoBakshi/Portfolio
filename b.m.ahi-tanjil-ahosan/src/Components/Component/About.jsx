import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import codingAnimation from "./Animation/Coding.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="about" className="min-h-screen flex flex-col mx-auto justify-center items-center py-5">

            {/* Container */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-20 w-11/12 md:w-3/4">

                {/* Left Side (Fade Right) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    
                >
                     <div
                    data-aos="fade-right"
                    className="lg:p-8 rounded-2xl shadow-lg md:w-1/2 lg:w-full "
                >
                    <Lottie animationData={codingAnimation} loop={true} />
                </div>
                </motion.div>

                {/* Right Side (Fade Left) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    
                >
                     <div
                    data-aos="fade-left"
                    className=" p-8 rounded-2xl shadow-lg md:w-1/2 lg:w-full "
                >

                    <h2 className="font-bold text-4xl mb-6 text-cyan-500">
                        About Me
                    </h2>
                    
                   <p className="font-bold text-xl font-mon ">
                     I’m B.M. Ahi Tanjil Ahosan, a passionate Frontend Developer from Bangladesh. <br /> 
                    I craft modern, responsive, and visually stunning web experiences.
                    Currently pursuing a Diploma in Computer Science at Shariatpur Polytechnic Institute. <br />
                    I love building with React.js, JavaScript, and Node.js.
                    Design and logic inspire my creative coding journey.
                   </p>
                </div>
                </motion.div>

            </div>
        </div>
    );
}

export default About;
