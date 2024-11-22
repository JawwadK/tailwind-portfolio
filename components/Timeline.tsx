import React from "react";
import { BiBriefcase, BiBook } from "react-icons/bi";
import SlideUp from "./SlideUp";

const timelineData = [
  {
    type: "work",
    title: "Software Engineer",
    company: "Sample Company",
    date: "2023 - Present",
    description: [
      "Led development of cloud-based solutions using Azure services",
      "Implemented ML models for predictive analytics",
      "Reduced processing time by 40% through optimization",
    ],
    technologies: ["Python", "Azure", "React", "TypeScript"],
  },
  {
    type: "education",
    title: "Computer Science",
    company: "Sample University",
    date: "2019 - 2023",
    description: [
      "Bachelor of Science in Computer Science",
      "GPA: 3.8/4.0",
      "Relevant coursework: AI, Machine Learning, Cloud Computing",
    ],
    technologies: [],
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="text-center font-bold text-4xl">
        Experience & Education
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
      </h1>

      <div className="relative mx-auto">
        {/* Central line - made thinner and more subtle */}
        <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-12">
          {timelineData.map((item, index) => (
            <SlideUp key={index} offset="-300px 0px -300px 0px">
              <div className="relative flex items-center">
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-cyan-900 dark:bg-cyan-800 flex items-center justify-center ring-4 ring-white dark:ring-zinc-900">
                    {item.type === "work" ? (
                      <BiBriefcase className="text-white text-sm" />
                    ) : (
                      <BiBook className="text-white text-sm" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="text-sm text-cyan-800 dark:text-cyan-400">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                    <span className="text-lg text-gray-600 dark:text-gray-400">
                      {item.company}
                    </span>

                    <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                      {item.description.map((desc, i) => (
                        <li key={i} className="mb-1">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
