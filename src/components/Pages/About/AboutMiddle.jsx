import React, { useEffect } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AboutMiddle = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-white py-14 px-6 lg:px-24">
      <div
        className="max-w-7xl mx-auto flex flex-col items-start gap-6"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h4 className="flex items-center gap-3 text-blue-700 font-semibold mb-3 text-sm sm:text-base">
          <IoCopy className="text-blue-700 text-xl" />
          <span className="block">About Us</span>
        </h4>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-800">
          Welcome to <span className="block">Prysoft Innovation</span>
        </h1>

        {/* Content */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            At Prysoft Innovation, we are passionate about transforming ideas into powerful digital solutions. As a forward-thinking IT company, we specialize in delivering cutting-edge technology services that drive innovation, efficiency, and growth for businesses across industries.
          </p>
          <p>
            Founded with a vision to empower organizations through smart technology, Prysoft Innovation has grown into a trusted partner for startups, SMEs, and enterprises. Our team of experienced professionals is dedicated to crafting custom software, web, and mobile solutions that align with your business goals and deliver real impact.
          </p>
          <p>
            Our client-centric approach ensures that every project is delivered with precision, agility, and a commitment to excellence.
          </p>

         

          <h2 className="text-2xl font-bold text-gray-900">Why Choose Prysoft Innovation?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Innovation-Driven:</strong> We thrive on creative problem-solving and next-gen technologies.</li>
            <li><strong>Client-Focused:</strong> Your success is our priority—every solution is tailored to your needs.</li>
            <li><strong>Experienced Team:</strong> Skilled professionals who bring deep technical expertise to every project.</li>
            <li><strong>Agile Methodology:</strong> Flexible, transparent, and collaborative development process.</li>
            <li><strong>Quality & Reliability:</strong> We deliver scalable, secure, and high-performing solutions.</li>
          </ul>

          <p>
            Join us on a journey of digital transformation and experience the difference with Prysoft Innovation—where technology meets vision.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default AboutMiddle;
