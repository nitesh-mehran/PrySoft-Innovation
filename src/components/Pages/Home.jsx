import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMiddle from "./About/AboutMiddle";
import { IoCopy } from 'react-icons/io5';
import {
  SiPhp,
  SiNodedotjs,
  SiReact,
  SiFlutter,
  SiAndroid,
  SiFigma,
} from 'react-icons/si';
import ServiceMiddle from "./Service/ServiceMiddle";

const logos = [
  { src: "/Drruchi.png", caption: "Dr Ruchi" },
  { src: "/gravitas-logo.png", caption: "Gravitas AI" },
  { src: "/shurutech.png", caption: "Shrutech" },
  { src: "/mamacare.png", caption: "mamacare" },
  { src: "/sharva_logo.png", caption: "Sharva" },
  { src: "/sanskrit.png", caption: "Sanskriti" },
  { src: "/TFSlogo.png", caption: "TFS" },
  { src: "/kefiko.jpeg", caption: "kefiko" },
];

const technologies = [
  { name: 'PHP', icon: <SiPhp size={48} className="text-blue-600" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={48} className="text-green-700" /> },
  { name: 'React.js', icon: <SiReact size={48} className="text-cyan-600" /> },
  { name: 'UI/UX Design', icon: <SiFigma size={48} className="text-pink-600" /> },
  { name: 'Flutter App', icon: <SiFlutter size={48} className="text-sky-500" /> },
  { name: 'Android', icon: <SiAndroid size={48} className="text-green-600" /> },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out", // smooth easing
    });
  }, []);

  return (
    <div>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row w-full h-[95vh]">
        <div
          className="w-full md:w-1/2 bg-green-600 flex items-center justify-center p-8"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left leading-snug">
            Welcome to PrySoft,
            <br />
            We are Delighted and
            <br />
            Thankful you’re here
          </h1>
        </div>

        <div
          className="w-full md:w-1/2 bg-white h-full"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src="/prysoft.jpg"
            alt="Welcome to PrySoft"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About and Services */}
      <AboutMiddle />
      <ServiceMiddle />

      {/* Banner Image */}
      <section
        className="w-full mt-16 px-4 md:px-20"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        aria-label="Service banner"
      >
        <img
          src="/service.jpg"
          alt="Illustrative banner showing services and design"
          className="w-full max-h-[520px] object-center rounded-xl shadow-lg"
          loading="lazy"
        />
      </section>

      {/* Technologies Section */}
      <section className="w-full text-center px-4 py-16 bg-gray-100">
        <h3
          className="text-blue-700 font-bold uppercase tracking-wider mb-2"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          Technologies
        </h3>
        <h1
          className="text-4xl font-extrabold mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          Fueling Innovation with the Latest Technologies
        </h1>
        <div
          className="flex justify-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          aria-hidden="true"
        >
          <div className="h-1 w-16 bg-black rounded" />
        </div>

        <div
          className="w-full flex flex-wrap justify-center gap-8 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="w-28 h-28 flex flex-col justify-center items-center rounded-xl bg-white shadow-md hover:shadow-xl transform hover:scale-110 transition duration-300 cursor-default"
              aria-label={tech.name}
              tabIndex={0}
              role="img"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              {tech.icon}
              <span className="mt-2 text-sm font-semibold text-gray-800">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Scrolling Section */}
      <div className="bg-[#f4f6fc] py-12 overflow-hidden">
        <div className="text-center mb-4" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
          <h2 className="text-blue-800 font-semibold text-lg flex items-center justify-center gap-2">
            <IoCopy className="text-blue-800 text-xl" aria-hidden="true" />
            Empower Your Business with PrySoft Innovation
          </h2>
          <p className="mt-4 text-lg font-semibold text-gray-900 px-4">
            Our comprehensive services offer essential insights, empowering your company's decision-makers and key stakeholders.
          </p>
        </div>

        <div className="logo-slider-wrapper mx-auto max-w-4xl">
          <div className="logo-slider">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="logo-slide" data-aos="fade-up" data-aos-delay={index * 100} data-aos-easing="ease-in-out" data-aos-duration="800">
                <img src={logo.src} alt={logo.caption} className="h-20 w-24 mx-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
