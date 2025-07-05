"use client";

import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaClock, FaEnvelope, FaPhone, FaGraduationCap, FaBookOpen } from "react-icons/fa";

export default function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    timezone: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    preferredTime: "",
    gender: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("بارک اللہ فیک! Your application has been submitted successfully. We will contact you within 24 hours.");
    setForm({ 
      name: "", 
      age: "", 
      timezone: "", 
      email: "", 
      phone: "", 
      course: "", 
      experience: "", 
      preferredTime: "", 
      gender: "" 
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-emerald-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-emerald-800 mb-2">Student Registration Form</h2>
          <p className="text-gray-600">Join our online Quran learning journey</p>
          <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-4 rounded-lg mt-4">
            <p className="text-emerald-800 font-semibold">🎁 Free 3-Day Trial Available!</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                min="5"
                max="80"
                value={form.age}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
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
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <FaClock className="absolute left-3 top-3 text-emerald-600" />
              <input
                type="text"
                name="timezone"
                placeholder="Time Zone (e.g., GMT+5, EST)"
                required
                value={form.timezone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative">
              <select
                name="gender"
                required
                value={form.gender}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <FaBookOpen className="absolute left-3 top-3 text-emerald-600" />
              <select
                name="course"
                required
                value={form.course}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Course</option>
                <option value="noorani-qaida">Noorani Qaida</option>
                <option value="quran-reading">Quran Reading</option>
                <option value="quran-memorization">Quran Memorization</option>
                <option value="tajweed">Tajweed</option>
                <option value="islamic-studies">Islamic Studies</option>
              </select>
            </div>
            <div className="relative">
              <FaGraduationCap className="absolute left-3 top-3 text-emerald-600" />
              <select
                name="experience"
                required
                value={form.experience}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Previous Experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <FaClock className="absolute left-3 top-3 text-emerald-600" />
            <input
              type="text"
              name="preferredTime"
              placeholder="Preferred Class Time (e.g., 7:00 PM - 8:00 PM)"
              required
              value={form.preferredTime}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-semibold text-emerald-800 mb-2">Benefits of Learning with Al-Huda:</h3>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>• One-on-one personalized lessons</li>
              <li>• Qualified teachers with Ijazah</li>
              <li>• Flexible scheduling</li>
              <li>• Free trial classes</li>
              <li>• Progress tracking</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold shadow-md text-lg"
          >
            Submit Application 📝
          </button>
        </form>
      </div>
    </div>
  );
} 