"use client";  

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    title: "Nexza Project",
    category: "Web",
    description:
      "The idea for Nexza was inspired by friends and social media posts about frequent scams...",
    image: "/nexzad.png",
  },
  {
    title: "Govixmax",
    category: "Web",
    description:
      "Before starting Nexza, I developed GovixMax, a platform designed to search all types of documents...",
    image: "/govxx.png",
  },
  {
    title: "CS100 Project: BU Mobile Enhancement",
    category: "UI/UX",
    description:
      "For my CS100 Project, I redesigned the UX/UI of the BU Mobile app and introduced a new feature...",
    image: "/bumobile.png",
  },
  {
    title: "Team Match",
    category: "UI/UX",
    description:
      "Teammatch was a project that my friend and I designed together as a side project...",
    image: "/teammatchhh.png",
  },
  {
    title: "BU Creative Project",
    category: "Apps",
    description:
      "BU CREATIVE PROJECT is an app I developed by integrating Bangkok University's old campus map...",
    image: "/zbucreative.png",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div className="bg-[#0D0F12] text-white p-10 rounded-xl shadow-lg w-full max-w-6xl mx-auto mt-10">
      {/* Title */}
      <motion.h2 
        className="text-4xl font-black text-center text-green-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-3 mb-8">
        {["All", "UI/UX", "Web", "Apps"].map((category) => (
          <motion.button
            key={category}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
              filter === category
                ? "bg-green-500 text-black shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-green-500 hover:text-black"
            }`}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1D23] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_#00ff00]"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={project.image}
              alt={`Project ${project.title}`}
              width={500}
              height={250}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
              <p className="text-gray-300 mt-3">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
