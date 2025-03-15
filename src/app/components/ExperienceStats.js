"use client";

import { motion } from "framer-motion";

export default function ExperienceStats() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-6 md:space-y-0 md:space-x-12 bg-[#0D0F12] text-white p-10 rounded-xl shadow-lg max-w-5xl mx-auto mt-10">
      
      {/* Project Counter */}
      <motion.div
        className="bg-[#1A1D23] px-8 py-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-[0_0_15px_#00ff00]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-5xl font-black text-green-400">5+</h2>
        <p className="text-gray-300 mt-2 text-lg">Projects Completed</p>
      </motion.div>

      {/* Experience Counter */}
      <motion.div
        className="bg-[#1A1D23] px-8 py-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-[0_0_15px_#00ff00]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-5xl font-black text-green-400">9</h2>
        <p className="text-gray-300 mt-2 text-lg">Months of Experience</p>
      </motion.div>
      
    </div>
  );
}
