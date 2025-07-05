import React, { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    timezone: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! (placeholder)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        required
        value={form.age}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="timezone"
        placeholder="Time Zone (e.g., GMT+5)"
        required
        value={form.timezone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-secondary text-white px-4 py-2 rounded hover:opacity-90"
      >
        Submit Application
      </button>
    </form>
  );
}