import React from 'react'
import SlideUp from "./SlideUp";

const skills = [
  { skill: "HTML/CSS" },
  { skill: "Javascript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "C/C++" },
  { skill: "Azure" },
  { skill: "MySQL" },
  { skill: "R" },
  { skill: "Git" },
  { skill: "Docker" },
  { skill: "Unix/Bash" },
  { skill: "NextJS" },
  { skill: "React" },
  { skill: "Tailwind CSS" },
  { skill: "Pandas" },
  { skill: "Scikit-Learn" },
  { skill: "Microsoft 365" },
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
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 ">
              <div className="md:w-1/2">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                  Who is this guy?
                </h1>

                <p>
                  Hello, my name is Jawwad. I am a Software Engineer from
                  Toronto ON. I am dedicated and hardworking and focused.
                </p>
                <br />
                <p>
                  I graduated from Toronto Metropolitan University in 2023 with
                  a BSc in Computer Science. I've worked at various internships
                  during my time as a student both in the public and private
                  sector and have the skills to.
                </p>
                <br />
                <p>
                  I have quite a few hobbies, I am an avid reader, I enjoy video
                  games, I play a variety of sports recreationally.
                </p>
                <br />
                <p>
                  I'm a advocate for lifelong-learning and strive to learn and
                  grow everyday. I&apos;m currently learning as much as I can
                  about Cloud Computing.
                </p>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                  My Skills
                </h1>
                <div className="flex flex-wrap flex-row justify-center md:justify-start">
                  {skills.map((item, idx) => {
                    return (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
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
}

export default About