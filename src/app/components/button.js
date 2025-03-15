export default function Button({ text, link }) {
    return (
      <a
        href={link}
        className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        {text}
      </a>
    );
  }
  