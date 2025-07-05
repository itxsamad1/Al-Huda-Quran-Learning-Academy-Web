import ContactForm from "@/components/forms/ContactForm";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>
      <ContactForm />
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-primary hover:text-secondary"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-primary hover:text-secondary"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
      <div className="mt-6 text-center">
        <p>Phone: +123 456 7890 | +987 654 3210</p>
      </div>
    </div>
  );
}