import SocialLinks from "./social";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex bg-[#0D0F12] text-white shadow-lg rounded-xl w-full max-w-4xl p-8 transform transition-all duration-300 hover:shadow-[0_0_20px_#00ff00] hover:border hover:border-green-400">
      {/* ซ้าย: ข้อมูลโปรไฟล์ */}
      <div className="flex flex-col items-center w-1/2 p-6">
        <Image src="/profile.jpg" alt="Profile" width={200} height={200} />
        <h2 className="text-2xl font-bold text-green-400 mt-4">
          Supanut Veerakul
        </h2>
        <p className="text-gray-400 text-center mt-2 text-lg">
          Full Stack Developer | Web & Entrepreneur
        </p>
        {/* ช่องทางติดตาม */}
        <SocialLinks />
      </div>

      {/* ขวา: คำอธิบาย */}
      <div className="w-1/2 p-6 flex items-center">
        <p className="text-gray-300 text-lg text-justify leading-relaxed">
          Hi, I&apos;m <span className="font-semibold text-green-400">Supanut Veerakul</span>, 
          a first-year Computer Science student at 
          <span className="font-semibold text-green-400"> Bangkok University.</span> 
          I am passionate about innovation and creativity, constantly exploring new ideas and developing projects that 
          have never been thought of before. 
          <br />
          <br />
          <span className="font-semibold text-green-400">Let&apos;s build the future together! 🚀</span>
        </p>
      </div>
    </div>
  );
}
