import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-100 mb-4">
              🌙 Al-Huda Quran Academy
            </h3>
            <p className="text-emerald-100 mb-4">
              Dedicated to providing quality Quran education with traditional values and modern teaching methods.
            </p>
            <div className="flex items-center space-x-2 text-emerald-200">
              <FaMapMarkerAlt />
              <span>Online Learning Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="/about" className="hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-amber-200 transition-colors">Our Services</a></li>
              <li><a href="/packages" className="hover:text-amber-200 transition-colors">Packages</a></li>
              <li><a href="/student-form" className="hover:text-amber-200 transition-colors">Apply Now</a></li>
              <li><a href="/contact" className="hover:text-amber-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Contact Info</h4>
            <div className="space-y-3 text-emerald-100">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-amber-200" />
                <div>
                  <p>+92 300 1234567</p>
                  <p>+92 321 7654321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-200" />
                <span>info@alhudaquranacademy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-emerald-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-emerald-200">
            <span>© {new Date().getFullYear()} Al-Huda Quran Learning Academy</span>
            <span>Made with</span>
            <FaHeart className="text-red-400" />
            <span>for Islamic Education</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com/alhudaquranacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://wa.me/+923001234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 