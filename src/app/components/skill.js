
export default function SkillsSection() {
    const skillsData = {
      Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Python"],
      Backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
      Other: ["Git", "Docker", "GraphQL", "Linux", "Figma"],
    };
  
    return (
      <div className="bg-[#0D0F12] shadow-lg rounded-xl p-12 w-full max-w-5xl mt-16 text-white transition-all duration-300 hover:shadow-[0_0_20px_#00ff00] hover:border hover:border-green-400">
        <h2 className="text-4xl font-black text-green-400 text-center mb-8 uppercase tracking-wide">
          Skills & Technologies
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="p-6 bg-[#1A1D23] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00ff00]"
            >
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">
                {category}
              </h3>
              <ul className="text-gray-300 flex flex-col gap-2 items-center">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-[#262A33] rounded-full shadow-sm transition-all duration-300 hover:bg-green-400 hover:text-black"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  