import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Al-Huda Quran Learning Academy</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-secondary"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-secondary"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}