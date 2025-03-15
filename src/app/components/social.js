import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/TamodojiZ/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 text-2xl transition"
      >
        <FaFacebook />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/thxnsung/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 text-2xl transition"
      >
        <FaInstagram />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Bandit2040"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black text-2xl transition"
      >
        <FaGithub />
      </a>

      {/* Email */}
      <a
        href="mailto:your.email@example.com"
        className="text-gray-600 hover:text-red-500 text-2xl transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}