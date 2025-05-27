import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopy } from 'react-icons/io5';
import { FaSquareFull } from 'react-icons/fa';

const services = [
  {
    title: 'APP DEVELOPMENT',
    description: "We specialize in creating high-quality, cross-platform mobile applications using modern mobile technologies.",
    img: '/app_deve.svg',
  },
  {
    title: 'DIGITAL MARKETING',
    description: "We help your business get noticed online. Using smart strategies, we ensure people see and appreciate what you do in the digital world.",
    img: '/digital_marketing.svg',
  },
  {
    title: 'WEB DEVELOPMENT',
    description: "Our web application development services focus on building robust, scalable, and interactive web apps that enhance productivity.",
    img: '/web_deve.svg',
  },
  {
    title: 'SEO Optimization',
    description: "Enhance your online presence with our SEO optimization services to increase visibility, drive traffic, and boost conversions.",
    img: '/iot_deve.svg',
  },
  {
    title: 'Data Analytics',
    description: "We provide comprehensive data analytics services that transform your raw data into actionable insights.",
    img: '/manage_service.svg',
  },
  {
    title: 'ChatBot Solutions',
    description: "We act as digital bodyguards for your computer, keeping the bad guys away and ensuring your information stays safe and secure.",
    img: '/chatbot.svg',
  },
];

const ServiceMiddle = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <section className="w-full py-16 bg-[#f4f7fe]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        <h4
          className="text-blue-700 font-semibold mb-2 inline-flex justify-center items-center gap-2 tracking-wide uppercase"
          data-aos="fade-up"
        >
          <IoCopy className="text-blue-700 text-xl" aria-hidden="true" />
          Our Services
        </h4>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          What Solutions We Provide
        </h2>

        <div
          className="flex justify-center items-center gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
          aria-hidden="true"
        >
          <div className="h-1 w-20 bg-black rounded" />
          <FaSquareFull className="text-black text-[6px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg group transition duration-300 cursor-pointer relative overflow-hidden flex flex-col items-center text-center hover:text-white hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              role="region"
              aria-labelledby={`service-title-${index}`}
            >
              {/* Card Hover Overlay */}
              <div className="absolute inset-0 bg-white group-hover:bg-gradient-to-tr from-indigo-800 via-purple-700 to-pink-600 transition-all duration-500 z-0 rounded-3xl" />

              {/* Icon with white background on hover */}
              <div className="mb-6 relative w-24 h-24 flex items-center justify-center z-10">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-full h-full transition-colors duration-300 group-hover:fill-white"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    className="transition-all duration-500"
                    d="M44.8,-66.5C56.6,-60.3,63.6,-45.8,68.2,-31.3C72.7,-16.7,74.9,-2.2,72.1,11.3C69.3,24.7,61.5,37,50.3,48.7C39.2,60.4,24.7,71.5,9.4,71.2C-5.9,70.8,-21.9,59.1,-35.2,47.3C-48.5,35.4,-59.1,23.5,-64.5,8.4C-69.8,-6.8,-70.1,-25.1,-61.6,-37.8C-53.1,-50.6,-35.7,-57.7,-19.2,-61.8C-2.7,-65.8,12.8,-66.7,27.3,-67.2C41.8,-67.7,55.3,-67.7,44.8,-66.5Z"
                    transform="translate(100 100)"
                    fill="url(#grad)"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="w-14 h-14 hover:bg-white rounded-full flex items-center justify-center shadow-md transition duration-300 group-hover:bg-white z-10">
                  <img
                    src={service.img}
                    alt={`${service.title} Icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <h3
                id={`service-title-${index}`}
                className="text-xl font-semibold mb-3 relative z-10"
              >
                {service.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white mb-8 text-sm sm:text-base leading-relaxed relative z-10">
                {service.description}
              </p>

              <button
                className="relative z-10 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full overflow-hidden group-hover:bg-transparent group-hover:text-white border-2 border-transparent group-hover:border-white transition-all duration-500 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105"
                aria-label={`Read more about ${service.title}`}
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMiddle;
