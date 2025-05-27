import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const PageTop = ({ title, subtitle, currentPage }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 pb-28 pt-20 transition-all duration-500 ease-in-out">
      <div
        className="max-w-5xl mx-auto px-6 text-center sm:text-left sm:px-12"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-offset="100"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight transform transition-transform duration-700 hover:scale-[1.03]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl mx-auto sm:mx-0 text-indigo-200 text-lg sm:text-xl font-light">
          {subtitle}
        </p>
        <nav className="mt-8 text-indigo-300 text-sm sm:text-base flex justify-center sm:justify-start gap-2 font-medium">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span>Pages</span>
          <span>/</span>
          <span className="text-white underline font-semibold">{currentPage}</span>
        </nav>
      </div>

      {/* Decorative Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none select-none">
        <svg
          className="w-full h-36 sm:h-44"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageTop;
