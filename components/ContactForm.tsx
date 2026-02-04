"use client";
import React, { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      //  to your inbox (ashishnegi196@gmail.com)
      const result = await emailjs.send(
        "service_80dw4rd", // EmailJS service ID
        "template_bmd14yo", // EmailJS template ID
        {
          to_email: "ashishnegi1496@gmail.com", // 👈 Force recipient
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "TVbsIe33M5e7nj2Ft" // ⚡ Your EmailJS public key
      );

      console.log("✅ EmailJS result:", result.text);

      // ✅ Also send WhatsApp message to your number
      const whatsappNumber = "918628038851"; // 👈 Your WhatsApp number in international format
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=📩 New%20Contact%20Form%20Message%0A%0A👤%20Name:%20${encodeURIComponent(
        formData.name
      )}%0A📧%20Email:%20${encodeURIComponent(
        formData.email
      )}%0A📱%20Phone:%20${encodeURIComponent(
        formData.phone
      )}%0A📌%20Subject:%20${encodeURIComponent(
        formData.subject
      )}%0A💬%20Message:%20${encodeURIComponent(formData.message)}`;

      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error("❌ Error sending message:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Contact Me
      </h2>
      <p className="text-gray-500 text-center text-sm">
        Fill out the form below and I’ll get back to you soon.
      </p>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+91 9876543210"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          required
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
    </form>
  );
}
