import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold">
          Al-Huda
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <FaBars size={24} />
        </button>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden bg-primary px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-1 hover:text-secondary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}