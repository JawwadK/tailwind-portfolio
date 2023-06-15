"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

const Content = () => {
  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <section id="home">
        <div className="flex flex-col text-center items-center justify-center mt-12 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-50 ">
          <div className="md:w-1/2 md-mt-2">
            <Image
              className="rounded-full shadow-3xl"
              src="/Headshot Cropped.jpg"
              alt="Jawwad Headshot Image"
              width={300}
              height={300}
            />
            <div className="pt-6 md:px-4 ">
              <button
                className=" px-6 py-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() => handleButtonClick("https://github.com/JawwadK")}
              >
                <FaGithub
                  className="text-cyan-950 hover:text-cyan-500 dark:text-white"
                  size={45}
                />
              </button>
              <button
                className="px-6 py-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() =>
                  handleButtonClick("https://www.linkedin.com/in/jawwadkhan77/")
                }
              >
                <FaLinkedin
                  className="text-cyan-950 hover:text-cyan-500 dark:text-white"
                  size={45}
                />
              </button>
              <button
                className="px-6 py-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() => handleButtonClick("mailto:jawwad1809@gmail.com")}
              >
                <MdEmail
                  className="text-cyan-950 hover:text-cyan-500 dark:text-white"
                  size={45}
                />
              </button>
            </div>
          </div>

          <div className="md:mt-2 md:w-3/5">
            <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
              Hello, I&apos;m Jawwad!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I&apos;m a Software Engineer based in Toronto, ON. Dedicated to
              simplifying work with innovative solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-row text-center items-center justify-center mb-12 py-16">
          <button
            className="text-3xl text-neutral-100 font-semibold px-6 py-3 bg-cyan-950 rounded shadow hover:bg-cyan-600 dark:bg-white dark: dark:text-neutral-950 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
            onClick={() => handleButtonClick("/Jawwad_Resume.pdf")}
          >
            Resume
          </button>
        </div>
      </section>
    </>
  );
};

export default Content;
