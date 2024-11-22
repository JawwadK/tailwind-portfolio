import React from "react";
import { BiBriefcase, BiBook } from "react-icons/bi";
import SlideUp from "./SlideUp";

const timelineData = [
  {
    type: "work",
    title: "Technical IT Consultant",
    company:
      "Youth Justice Division, Ministry of Children, Community and Social Services",
    date: "06/2024 - Present",
  },
  {
    type: "work",
    title: "Software Developer",
    company: "Avasta Inc.",
    date: "01/2022 - 12/2023",
  },
  {
    type: "work",
    title: "Application Developer",
    company:
      "Cyber Security Division, Ministry of Public & Business Service Delivery",
    date: "05/2021 - 09/2021",
  },
  {
    type: "work",
    title: "Technology Analyst",
    company: "Royal Canadian Mounted Police, RCMP",
    date: "10/2020 - 05/2021",
  },
  {
    type: "work",
    title: "Data Analyst",
    company: "Avasta Inc.",
    date: "05/2020 - 09/2020",
  },
  {
    type: "education",
    title: "Bachelor of Science - Computer Science",
    company: "Toronto Metropolitan University (formerly Ryerson)",
    date: "09/2018 - 06/2023",
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
        <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-8">
          {timelineData.map((item, index) => (
            <SlideUp key={index} offset="-300px 0px -300px 0px">
              <div className="relative flex items-center">
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-cyan-900 dark:bg-cyan-800 flex items-center justify-center ring-4 ring-white dark:ring-zinc-900">
                    {item.type === "work" ? (
                      <BiBriefcase className="text-white text-sm" />
                    ) : (
                      <BiBook className="text-white text-sm" />
                    )}
                  </div>
                </div>

                <div
                  className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="text-sm text-cyan-800 dark:text-cyan-400">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.company}
                    </span>
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
