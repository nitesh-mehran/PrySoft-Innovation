import React from "react";

const AboutBottom = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12 bg-white max-w-screen-xl mx-auto space-y-16">
      {/* Section Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
        <h3 className="text-indigo-700 font-semibold text-lg sm:text-xl mb-2 uppercase tracking-wider">
          Our Mission
        </h3>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Empowering Your Growth with Technology & Security.
        </h2>
        <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
      </div>

      {/* Mission & What We Do */}
      <div
        className="flex flex-col lg:flex-row items-center gap-12"
        data-aos="fade-right"
      >
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-indigo-900">What We Do</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We offer a comprehensive suite of IT services, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed space-y-1">
            <li>Custom Software Development</li>
            <li>Web & Mobile App Development</li>
            <li>Cloud & DevOps Solutions</li>
            <li>UI/UX Design</li>
            <li>AI & Machine Learning Integration</li>
            <li>IT Consulting & Support</li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            Our client-centric approach ensures that every project is delivered with
            precision, agility, and a commitment to excellence.
          </p>
        </div>

        {/* Image (optional) */}
        <div className="lg:w-1/2">
          <img
            src="/about_mission1.png"
            alt="Mission Visual"
            className="w-full h-80 object-contain mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* How We Do & Who We Do It For */}
      <div
        className="flex flex-col lg:flex-row items-start gap-16"
        data-aos="fade-up"
      >
        {/* How We Do */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-indigo-800">How We Do It</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Our highly skilled IT specialists leverage their diverse expertise
            to deliver customized solutions and strategic guidance.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We embrace innovation and agility to solve complex challenges,
            ensuring your business stays ahead in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* Who We Do It For */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-indigo-800">Who We Do It For</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We serve forward-thinking businesses and organizations seeking
            reliable IT services, digital transformation, and comprehensive tech solutions.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Our focus is on empowering clients to thrive in the digital age through
            secure, scalable, and innovative technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBottom;
