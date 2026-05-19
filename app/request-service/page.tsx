"use client";

import { useState } from "react";

export default function RequestServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "Service 1",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert(
        `Lead created successfully!\nAssigned Providers:\n${data.providers.join(
          ", "
        )}`
      );

      setFormData({
        name: "",
        phone: "",
        city: "",
        service: "Service 1",
        description: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);

    alert("Something went wrong");
  }
};



  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-black">
          Request Service
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option>Service 1</option>
          <option>Service 2</option>
          <option>Service 3</option>
        </select>

        <textarea
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 p-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold p-3 rounded-lg transition"
        >
          Submit Request
        </button>
      </form>
    </main>
  );
}