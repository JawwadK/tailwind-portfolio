import React from "react";
import SlideUp from "./SlideUp";

const skills = [
  {
    skill: "HTML/CSS",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-orange-500 hover:text-slate-100",
  },
  {
    skill: "Javascript",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-yellow-300 hover:text-slate-950",
  },
  {
    skill: "Python",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-sky-400 hover:text-yellow-300",
  },
  {
    skill: "Java",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-slate-300 hover:text-orange-500",
  },
  {
    skill: "C/C++",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-yellow-300 hover:text-slate-950",
  },
  {
    skill: "Azure",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-sky-400 hover:text-slate-950 ",
  },
  {
    skill: "MySQL",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-blue-900 hover:text-amber-400",
  },
  {
    skill: "R",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-fuchsia-800 hover:text-sky-50",
  },
  {
    skill: "Git",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-amber-100 hover:text-red-500",
  },
  {
    skill: "Docker",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-blue-800 hover:text-slate-100",
  },
  {
    skill: "Unix/Bash",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-gray-950 hover:text-green-500",
  },
  {
    skill: "NextJS",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-gray-50 hover:text-zinc-950",
  },
  {
    skill: "React",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-gray-50 hover:text-cyan-500",
  },
  {
    skill: "Tailwind CSS",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-rose-400 hover:text-indigo-900",
  },
  {
    skill: "Pandas",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-indigo-950 hover:text-yellow-300",
  },
  {
    skill: "Scikit-Learn",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-orange-400 hover:text-zinc-950",
  },
  {
    skill: "Microsoft 365",
    style:
      "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded hover:bg-gray-50 hover:text-violet-600",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
            <div className="md:w-1/2">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                My Story
              </h1>

              <p>
                Hello, my name is Jawwad. I am a passionate, goal-oriented and
                dedicated Software Engineer from Toronto ON.
              </p>
              <br />
              <p>
                I graduated from Toronto Metropolitan University in 2023 with a
                BSc in Computer Science. I began my career in IT in 2020 and
                have loved working in the field ever since.
              </p>
              <br />
              <p>
                Outside of my career I have a few hobbies that I am passionate
                in. I am an avid reader, I love fishing and I enjoy playing
                video games. I also play and coach a community tennis league.
              </p>
              <br />
              <p>
                I believe in life-long learning and strive to learn, grow and
                enjoy everyday. I&apos;ve recently gotten my first cloud
                certification and am eager to see where this path leads me.
              </p>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                My Skills
              </h1>
              <div className="flex flex-wrap flex-row justify-center md:justify-start font-semibold">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className={item.style}
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default About;
