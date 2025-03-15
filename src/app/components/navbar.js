"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ไอคอนจาก lucide-react
import { Link } from "react-scroll";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-8 md:px-16 flex items-center justify-between z-50 shadow-md transition-all duration-300">
      
      {/* ซ้าย: โลโก้ */}
      <div>
        <h1 className="text-2xl font-bold tracking-wide text-green-400">
          My Website - sung
        </h1>
      </div>

      {/* เมนูสำหรับ Desktop */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        {[
          { name: "Me", id: "profile" },
          { name: "About Me", id: "about" },
          { name: "Skill & Tech", id: "skills" },
          { name: "Projects", id: "projects" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.id} // ใช้ ID ที่กำหนด
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-green-400 transition duration-300 tracking-wide"
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Hamburger Menu สำหรับ Mobile */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* เมนูสำหรับ Mobile */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 shadow-lg p-6 flex flex-col items-center gap-6 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {[
          { name: "Me", id: "profile" },
          { name: "About Me", id: "about" },
          { name: "Skill & Tech", id: "skills" },
          { name: "Projects", id: "projects" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.id} // ใช้ ID ที่ถูกต้อง
            smooth={true}
            duration={500}
            className="text-white hover:text-green-400 transition duration-300 text-lg"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
