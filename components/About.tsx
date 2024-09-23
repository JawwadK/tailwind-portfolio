import React from "react";
import SlideUp from "./SlideUp";



const About = () => {
  return (
    <section id="about">
      <div className="my-4 pb-12 md:pt-8 md:pb-12">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top  md:text-left md:p-4 md:space-y-0 md:space-x-10">
            <div className="">
              <p className="text-xl">
                I enjoy building, designing and developing websites and
                applications. I am passionate about software development,
                process automation and working with data to create meaningful
                insights to help data-driven decision making. I am a fast
                learner and hold my code to a high standard to ensure quality
                results are delivered on time.
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-center text-4xl font-bold">My Skills</h1>
            <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default About;
