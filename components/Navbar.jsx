"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
  { href: "/student-form", label: "Apply Now" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-amber-100 hover:text-amber-200 transition-colors">
          🌙 Al-Huda Quran Academy
        </Link>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-emerald-600 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-amber-200 transition-colors px-3 py-2 rounded-md hover:bg-emerald-600 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="md:hidden bg-emerald-800 px-4 pb-4 space-y-2 border-t border-emerald-600">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-3 px-3 hover:text-amber-200 hover:bg-emerald-600 rounded-md transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
} 