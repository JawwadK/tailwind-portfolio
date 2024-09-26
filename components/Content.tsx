"use client";
import React from "react";
import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import SlideInAnimation from "./SlideInAnimation";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Content = () => {
  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center overflow-auto"
      >
        {/* Headshot Section */}
        {/* Text Section */}
        <div className="flex flex-col text-center items-center justify-center mt-12 md:pb-16 sm:py-32 md:text-left md:w-5/5">
          <TypingAnimation />
          <SlideInAnimation direction="left">
            <p className="text-lg mt-4 mb-6 md:text-2xl text-center md:text-left">
              Transforming Data into Actionable Insights and Innovative
              Solutions
            </p>

            <p className="text-lg mt-4 mb-6 md:text-2xl text-center md:text-left">
              Let&apos;s talk about Data, AI, and Cloud Architecture
            </p>
          </SlideInAnimation>
          <SlideInAnimation direction="left">
            <div className="w-full h-auto flex justify-center items-center">
              <Image
                className="rounded-full shadow-3xl transition-all duration-300 grayscale hover:grayscale-0"
                src="/Headshot Cropped.jpg"
                alt="Jawwad Headshot Image"
                width={200}
                height={200}
              />
            </div>
          </SlideInAnimation>
          {/* Social Buttons Section */}
          <SlideInAnimation direction="right">
            <div className="pt-6 md:px-4 flex space-x-6 justify-center md:justify-start">
              <button
                className="px-4 py-2 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() => handleButtonClick("https://github.com/JawwadK")}
              >
                <FaGithub
                  className="text-cyan-950 hover:text-cyan-500 dark:text-white"
                  size={70}
                />
              </button>
              <button
                className="px-4 py-2 rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() =>
                  handleButtonClick("https://www.linkedin.com/in/jawwad77/")
                }
              >
                <FaLinkedin
                  className="text-cyan-950 hover:text-cyan-500 dark:text-white"
                  size={70}
                />
              </button>
            </div>
          </SlideInAnimation>

          {/* Resume Button */}
          <SlideInAnimation direction="right">
            <div className="mt-8 flex justify-center">
              <button
                className="flex items-center justify-center text-2xl sm:text-3xl font-semibold px-6 py-3 bg-cyan-950 text-neutral-100 rounded shadow hover:bg-cyan-600 dark:bg-white dark:text-neutral-950 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100"
                onClick={() => handleButtonClick("/Jawwad_Resume.pdf")}
              >
                <FaFilePdf size={35} className="mr-3" />
                <span>Resumé</span>
              </button>
            </div>
          </SlideInAnimation>
        </div>
      </section>
    </>
  );
};

export default Content;
