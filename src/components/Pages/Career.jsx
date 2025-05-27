import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import PageTop from "../Layout/PageTop";

const Career = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    jobProfile: "",
    experience: "",
    noticePeriod: "",
  });

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
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Form submitted successfully! 🙌");
          setFormData({
            name: "",
            email: "",
            contact: "",
            jobProfile: "",
            experience: "",
            noticePeriod: "",
          });
        },
        () => {
          toast.error("Oops! Please fill all required fields.");
        }
      );
  };


  return (
    <>
  <PageTop
        title="Be a Part of Our Innovation"
        currentPage="Career"
      />
      <div className="bg-gray-50 min-h-screen py-14 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Section - Form */}
          <div data-aos="fade-right" className="bg-white rounded-3xl shadow-lg p-10 sm:p-14">
            <h2 className="text-indigo-700 font-semibold text-lg mb-1 flex items-center gap-2">
              🔷 Job Opportunities
            </h2>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Apply Now
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-700 to-pink-500 rounded-full mb-8"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="text"
                  name="jobProfile"
                  placeholder="Job Profile"
                  value={formData.jobProfile}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="text"
                  name="experience"
                  placeholder="Job Experience (years)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="text"
                  name="noticePeriod"
                  placeholder="Notice Period"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 hover:from-pink-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div
            data-aos="fade-left"
            className="flex justify-center items-center rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400"
          >
            <img
              src="/career.jpeg"
              alt="Career Growth"
              className="object-cover w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
