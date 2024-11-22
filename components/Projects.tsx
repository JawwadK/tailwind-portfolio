"use client";
import React, { useState } from "react";
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
    technologies: ["React", "Firebase", "Node.js", "Express"],
    category: "Full Stack",
  },
  {
    name: "Covid-19 Death Data Analysis",
    description:
      "An analysis done on Covid-19 deaths over time, comparing unvaccinated, vaccinated and booster shot patients in the age range of 40-50.",
    image: "/Covid-19-Death-Analysis.png",
    github: "https://github.com/JawwadK/pokedexProto",
    link: "https://jawwadk.github.io/pokedexProto/",
    technologies: ["React", "Firebase", "Node.js", "Express"],
    category: "Full Stack",
  },
  {
    name: "Movie-Finder",
    description:
      "A movie viewing application that uses content-based & collaborative filtering to deliver personalized movie recommendations to users.",
    image: "/Movie-Finder.png",
    github: "https://github.com/JawwadK/movie-finder",
    link: "https://cps842-movie-ratings.web.app/",
    technologies: ["React", "Firebase", "Node.js", "Express"],
    category: "Full Stack",
  },
  {
    name: "Inventory Tracker",
    description:
      "An Inventory Tracking and Management tool that allows you do view products and where they are located, admins are able to create new items and list/update their quantity",
    image: "/Inventory-Tracker.png",
    github: "https://github.com/JawwadK/inventory-tracker",
    link: "https://inventory-track.web.app/login",
    technologies: ["React", "Firebase", "Node.js", "Express"],
    category: "Full Stack",
  },
  {
    name: "PhotoDisplayer",
    description:
      "Proof of concept large scale image hosting website with filtering capabilities  ",
    image: "/PhotoRenderer.png",
    github: "https://github.com/JawwadK/photo-repo",
    link: "https://coolphotodisplayer.netlify.app/",
    technologies: ["React", "Firebase", "Node.js", "Express"],
    category: "Full Stack",
  },
  {
    name: "PokedexProto",
    description:
      "A pokedex app that lets you see all the pokemon in order, showing their name, elemental types, height and weight",
    image: "/PokedexProto.png",
    github: "https://github.com/JawwadK/pokedexProto",
    link: "https://jawwadk.github.io/pokedexProto/",
    technologies: ["React", "Firebase", "Node.js", "Express"],
    category: "Full Stack",
  },
];
const categories = ["All", "Full Stack", "Data Science", "Frontend", "Backend"];
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-cyan-900 text-white dark:bg-cyan-700"
                  : "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <div
              className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300" />

                {/* Hover Overlay */}
                {hoveredProject === project.name && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-6 z-10">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="transform -translate-y-2 hover:-translate-y-4 transition-all duration-300"
                    >
                      <FaGithub className="text-white text-4xl hover:text-cyan-400" />
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="transform -translate-y-2 hover:-translate-y-4 transition-all duration-300"
                    >
                      <BsBoxArrowUpRight className="text-white text-4xl hover:text-cyan-400" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default Projects;