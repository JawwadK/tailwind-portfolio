import React from "react";
import { motion } from "framer-motion";
import SlideUp from "./SlideUp";

const technologies = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
  { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "Azure", icon: "devicon-azure-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
  { name: "Bash", icon: "devicon-bash-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
];

const Technologies: React.FC = () => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Technologies
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
              className="relative group flex flex-col items-center p-6 rounded-xl backdrop-blur-sm border border-transparent hover:border-cyan-900/10 hover:bg-white/5 dark:hover:bg-zinc-800/30"
            >
              <div className="relative">
                <i
                  className={`${tech.icon} text-5xl transition-transform duration-300 group-hover:scale-110`}
                ></i>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>

              <motion.span
                className="mt-4 text-base font-medium text-center opacity-90 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideUp>
  );
};

export default Technologies;
