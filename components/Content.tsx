"use client";
import React from "react";
import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import SlideInAnimation from "./SlideInAnimation";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

const Content = () => {
  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center"
      >
        {/* Headshot Section */}
        <div className="flex-shrink-0 md:w-1/5 flex justify-center md:justify-start md:mr-8">
          <Image
            className="rounded-full shadow-3xl"
            src="/Headshot Cropped.jpg"
            alt="Jawwad Headshot Image"
            width={200}
            height={200}
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col text-center items-center justify-center mt-12 pt-16 pb-32 sm:py-32 md:text-left md:w-5/5">
          <TypingAnimation />
          <SlideInAnimation direction="left">
            <p className="text-lg mt-4 mb-6 md:text-2xl text-center md:text-left">
              Transforming Data into Actionable Insights and Innovative
              Solutions
            </p>

            <p className="text-lg mt-4 mb-6 md:text-2xl text-center md:text-left">
              Lets talk about Data, AI and Cloud Architecture
            </p>
          </SlideInAnimation>
          <SlideInAnimation direction="right">
            <div className="pt-6 md:px-4 text-center md:text-left">
              <button
                className="px-6 py-3 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() => handleButtonClick("https://github.com/JawwadK")}
              >
                <FaGithub
                  className="text-cyan-950 hover:text-cyan-500 dark:text-white"
                  size={90}
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
                  size={90}
                />
              </button>
            </div>
          </SlideInAnimation>
        </div>

        <div className="flex flex-row text-center items-center justify-center mb-12 py-8">
          <SlideInAnimation direction="right">
            <button
              className="flex items-center justify-center text-3xl text-neutral-100 font-semibold px-6 py-3 bg-cyan-950 rounded shadow hover:bg-cyan-600 dark:bg-white dark: dark:text-neutral-950 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
              onClick={() => handleButtonClick("/Jawwad_Resume.pdf")}
            >
              <FaFilePdf size={45} className="mr-2" />
              <span>Resumé</span>
            </button>
          </SlideInAnimation>
        </div>
      </section>
    </>
  );
};

export default Content;
