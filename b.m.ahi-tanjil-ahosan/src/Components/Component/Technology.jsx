import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
// Import multiple icon groups
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiMui,
  SiDaisyui,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

AOS.init();

const Technology = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 
  const languages = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-4xl" /> },
  ];

  const frontend = [
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-400 text-4xl" /> },
    { name: "Material UI", icon: <SiMui className="text-blue-400 text-4xl" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-purple-400 text-4xl" /> },
  ];

  const tools = [
    { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400 text-4xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
    { name: "Surge", icon: <FaCloud className="text-green-300 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20 text-white relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sky-400 tracking-widest">Skills I Have</p>
        <h2 className="text-3xl md:text-4xl font-mon font-bold inline-block text-cyan-500">
          My Tech 
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="relative w-full mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
        {/* Divider line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-950 via-gray-400 to-sky-500 animate-pulse"></div>

        {/* Languages */}
         <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                   
                >
                    <Card title="Languages" color="rose" data={languages} aos="fade-right" />

                </motion.div>
        {/* Frontend */}
         <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    
                >
                    <Card title="Frontend" color="sky" data={frontend} aos="fade-left" />
                </motion.div>

        {/* Tools */}
        <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    
                >
                    <Card title="Tools" color="rose" data={tools} aos="fade-up-right" />
                </motion.div>
      </div>
    </section>
  );
};

// ✅ Reusable Card Component
const Card = ({ title, color, data, aos }) => (
  <div
    data-aos={aos}
    className={`bg-gray-900 border border-gray-700 rounded-3xl p-8 text-center  transition-all duration-500 ease-in-out relative`}
  >
    <h2 className={`text-xl font-bold text-${color}-400 mb-6`}>{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
      {data.map((item) => (
        <div
          key={item.name}
          className="px-4 py-4 rounded-2xl flex flex-col items-center hover:scale-110 transition-transform duration-500"
        >
          {item.icon}
          <span className="font-semibold mt-2 text-center">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Technology;
