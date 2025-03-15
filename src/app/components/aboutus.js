
export default function AboutMe() {
    return (
      <div className="flex flex-col items-center text-center p-12 bg-[#0D0F12] text-white rounded-xl shadow-lg max-w-3xl mx-auto mt-16 transition-all duration-300 hover:shadow-[0_0_20px_#00ff00] hover:border hover:border-green-400">
        {/* หัวข้อใหญ่ */}
        <h1 className="text-5xl font-black text-green-400 mb-6 uppercase tracking-wide">
            About Me
        </h1>
  
        {/* คำอธิบาย */}
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
          I am a passionate innovator and creator who is dedicated to pushing the boundaries of technology.
          My mission is to develop groundbreaking projects that make a real impact on the world.
          <br /><br />
          Whether it s <span className="text-green-400 font-semibold">web development, AI solutions</span>, 
          or entrepreneurial ventures, I believe in the power of ideas and execution to shape the future. 🚀
        </p>
  
        {/* เส้นคั่น */}
        <div className="w-20 h-1 bg-green-400 mt-6"></div>
      </div>
    );
}
