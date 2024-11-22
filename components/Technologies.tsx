import React from 'react';
import SlideUp from './SlideUp';

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
      <h1 className="text-center font-bold text-4xl mb-8">Projects </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-4 transition-transform duration-300 transform hover:scale-150"
          >
            <i className={`${tech.icon} text-6xl`}></i>
            <span className="mt-2 text-lg font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </SlideUp>
  );
};

export default Technologies;