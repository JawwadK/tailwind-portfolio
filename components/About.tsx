import React from "react";
import SlideUp from "./SlideUp";

const About = () => {
  return (
    <section id="about" className="mt-16">
      {" "}
      {/* Add margin-top to create space between sections */}
      <div className="my-4 pb-12 md:pt-8 md:pb-12">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
            <div className="">
              <p className="text-xl">
                I enjoy building, designing, and developing websites and
                applications. I am passionate about software development,
                process automation, and working with data to create meaningful
                insights to help data-driven decision making.
              </p>
              <p className="text-xl">
                I am a fast learner and hold my code to a high standard,
                ensuring quality results are delivered on time. I thrive in
                dynamic environments and continuously seek opportunities to
                expand my skill set, whether through new technologies,
                frameworks, or best practices in software development.
              </p>
              <p className="text-xl">
                My goal is to create impactful applications that not only meet
                user needs but also contribute to the overall success of the
                projects I am involved in.
              </p>
            </div>
          </div>
          <div className="mt-10">
            {" "}
            {/* Add margin-top for separation */}
            <h1 className="text-center text-4xl font-bold">My Skills</h1>
            <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default About;
