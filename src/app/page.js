import Link from "next/link";
import Navbar from "./components/navbar";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/footer";
import AboutUs from "./components/aboutus";
import SkillsSection from "./components/skill";
import ProjectsSection from "./components/project";
import ExperienceStats from "./components/ExperienceStats";


export const metadata = {
  title: "My Website - Supanut Veerakul",
  description: "This is a sample Next.js website with SEO optimization.",
  keywords: "Next.js, SEO, Tailwind, JavaScript",
  openGraph: {
    title: "My Website",
    description: "This is a Next.js website with great SEO support.",
    url: "https://mywebsite.com",
    siteName: "MyWebsite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Website Image",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0D0F12] text-white">
      <Navbar />

      {/* คอนเทนต์หลัก */}
      <div className="flex-grow flex flex-col items-center mt-16 mb-16 p-10">
        <div id="profile" className="w-full flex justify-center">
          <ProfileCard />
        </div>

        <div id="about" className="w-full flex justify-center mt-16">
          <AboutUs />
        </div>

        <div id="skills" className="w-full flex justify-center mt-16">
          <SkillsSection />
        </div>

        <div className="w-full flex justify-center mt-16">
          <ExperienceStats />
        </div>

        <div id="projects" className="w-full flex justify-center mt-16">
          <ProjectsSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
