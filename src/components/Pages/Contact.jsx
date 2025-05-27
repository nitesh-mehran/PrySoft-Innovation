import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import PageTop from "../Layout/PageTop";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_CONTACT_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_CONTACT_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_CONTACT_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  

  return (
    <>
      {/* Header Section */}
       <PageTop
        title="Connect With Prysoft Innovation"
        currentPage="Contact"
      />

      {/* Contact Form Section */}
      <section
        className="max-w-4xl mx-auto p-10 bg-white rounded-3xl shadow-xl mt-24 mb-24"
        data-aos="zoom-in-up"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <textarea
            name="message"
            rows={6}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-gray-300 rounded-2xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-4 rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
