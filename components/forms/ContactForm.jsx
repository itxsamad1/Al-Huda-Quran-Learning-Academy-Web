"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaUser, FaComment, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("جزاک اللہ خیر! Your message has been sent successfully. We will contact you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-emerald-200">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-emerald-600" />
                <div>
                  <p className="font-medium">Phone Numbers:</p>
                  <p className="text-gray-600">+92 300 1234567</p>
                  <p className="text-gray-600">+92 321 7654321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-emerald-600" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">info@alhudaquranacademy.com</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-colors">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                  <FaFacebook />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative">
              <FaComment className="absolute left-3 top-3 text-emerald-600" />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold shadow-md"
            >
              Send Message 📧
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 