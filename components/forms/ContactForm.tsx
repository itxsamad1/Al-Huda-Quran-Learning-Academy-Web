import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (placeholder)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={form.name}
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
      <textarea
        name="message"
        placeholder="Message"
        required
        value={form.message}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-secondary text-white px-4 py-2 rounded hover:opacity-90"
      >
        Send
      </button>
    </form>
  );
}