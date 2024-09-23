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
    github: "https://github.com/JawwadK/cps714-fitin",
    link: "https://fitin.web.app/",
  },
  {
    name: "Covid-19 Death Data Analysis",
    description:
      "An analysis done on Covid-19 deaths over time, comparing unvaccinated, vaccinated and booster shot patients in the age range of 40-50.",
    image: "/Covid-19-Death-Analysis.png",
    github: "https://github.com/JawwadK/pokedexProto",
    link: "https://jawwadk.github.io/pokedexProto/",
  },
  {
    name: "Movie-Finder",
    description:
      "A movie viewing application that uses content-based & collaborative filtering to deliver personalized movie recommendations to users.",
    image: "/Movie-Finder.png",
    github: "https://github.com/JawwadK/movie-finder",
    link: "https://cps842-movie-ratings.web.app/",
  },
  {
    name: "Inventory Tracker",
    description:
      "An Inventory Tracking and Management tool that allows you do view products and where they are located, admins are able to create new items and list/update their quantity",
    image: "/Inventory-Tracker.png",
    github: "https://github.com/JawwadK/inventory-tracker",
    link: "https://inventory-track.web.app/login",
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
      <h1 className="text-center font-bold text-4xl pt-20">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubicBezier animation-delay-2 hover:scale-110">
                  <div className="mb-4">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 "
                      />
                    </Link>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                    <p className="text-lg leading-6 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex space-x-4">
                      <Link href={project.github} target="_blank">
                        <FaGithub
                          className="text-cyan-950 hover:text-cyan-500 dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-100 cursor-pointer"
                          size={30}
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsBoxArrowUpRight
                          className="text-cyan-950 hover:text-cyan-500 dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-100 cursor-pointer"
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
