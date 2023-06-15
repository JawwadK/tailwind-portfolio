"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "FitIn",
    description:
      "FitIn is a fitness focused social media app where you can share your workout progress with friends, track workout routines or post progress pics. ",
    image: "/FitInLogin.png",
    github: "",
    link: "https://fitin.web.app/",
  },
  {
    name: "PhotoDisplayer",
    description:
      "Proof of concept large scale image hosting website with filtering capabilities  ",
    image: "/PhotoRenderer.png",
    github: "https://github.com/JawwadK/photo-repo",
    link: "https://coolphotodisplayer.netlify.app/",
  },
  {
    name: "PokedexProto",
    description:
      "A pokedex app that lets you see all the pokemon in order, showing their name, elemental types, height and weight",
    image: "/PokedexProto.png",
    github: "https://github.com/JawwadK/pokedexProto",
    link: "https://jawwadk.github.io/pokedexProto/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubicBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt="project image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <FaGithub
                          className="text-cyan-950 hover:text-cyan-500 dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                          size={30}
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsBoxArrowUpRight
                          className="text-cyan-950 hover:text-cyan-500 dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                          size={30}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
