import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("software");

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gradient-to-tr from-indigo-800 via-purple-700 to-pink-600 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-10 py-10 grid md:grid-cols-3 gap-10">
        {/* Get In Touch */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            Office no. 125, okay plus spaces, malviya nagar
          </p>
          <p className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            +91 77375 77863
          </p>
          <p className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            prysoft.innovation@gmail.com
          </p>
          <div className="flex space-x-4 items-center">
            <a href="https://wa.me/917737577863" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <RiWhatsappFill size={36} color="#25D366" />
            </a>
            <a href="https://www.instagram.com/prysoft.innovation/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaSquareInstagram size={36} color="#E4405F" />
            </a>
            <a href="https://www.linkedin.com/company/prysoft-innovation-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IoLogoLinkedin size={36} color="#0077B5" />
            </a>
            <a href="https://www.youtube.com/@PrySoftInnovation" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={36} color="#FF0000" />
            </a>
            <a href="https://in.pinterest.com/prysoftinnovation/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterest size={36} color="#E60023" />
            </a>
          </div>
        </div>

        {/* Popular Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Popular Link</h3>
          <ul className="space-y-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Condition" },
              { to: "/career", label: "Career" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="hover:underline hover:text-gray-200 hover:text-[1.01rem] transition duration-200"
                >
                  <span className="flex items-center">
                    <IoMdArrowDropright /> {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Let's Join Us !!</p>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-blue-600 p-3">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Social Icons */}
      <div className="fixed right-4 bottom-16 flex flex-col space-y-4 z-50">
        <a href="https://wa.me/917737577863" target="_blank" rel="noopener noreferrer">
          <RiWhatsappFill size={40} color="#25D366" />
        </a>
        <a href="https://www.instagram.com/prysoft.innovation/" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram size={40} color="#E4405F" />
        </a>
        <a href="https://www.linkedin.com/company/prysoft-innovation-pvt-ltd" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size={40} color="#0077B5" />
        </a>
        <a href="https://www.youtube.com/@PrySoftInnovation" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={36} color="#FF0000" />
        </a>
      </div>

      {/* Bottom Tab Menu */}
      <div className="flex flex-col items-start py-8 max-w-7xl mx-auto px-10">
        <div className="flex space-x-10 border-b border-white/70 pb-4 mb-4 w-full">
          <button
            className={`font-semibold px-6 py-3 rounded-t-lg transition duration-200 ${
              activeTab === "software" ? "bg-white text-gray-800" : "text-white hover:text-gray-100 hover:text-[1.05rem]"
            }`}
            onClick={() => setActiveTab("software")}
          >
            Software development
          </button>
          <button
            className={`font-semibold px-6 py-3 rounded-t-lg transition duration-200 ${
              activeTab === "digital" ? "bg-white text-gray-800" : "text-white hover:text-gray-100 hover:text-[1.05rem]"
            }`}
            onClick={() => setActiveTab("digital")}
          >
            Digital Marketing
          </button>
        </div>

        <div className="text-white text-sm max-w-4xl">
          {activeTab === "software" && (
            <>
              <h4 className="font-bold text-lg mb-2">Software development</h4>
              <p>
                Best Software Development Company In Jaipur || Software Development Company In Jaipur || Top Software Company In Jaipur || Software Development Service Provider In Jaipur || Software development is pr
              </p>
            </>
          )}
          {activeTab === "digital" && (
            <>
              <h4 className="font-bold text-lg mb-2">Digital Marketing</h4>
              <p>
                Top digital Marketing Company In Jaipur || Best Digital Marketing Company In Jaipur || Digital Marketing Company In Jaipur || Seo Service Provider In Jaipur || Smm Service Provider In Jaipur || Best Lead Generation Company In Jaipur
              </p>
            </>
          )}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="text-white text-center py-4 px-4 flex flex-col md:flex-row justify-between ml-16 mr-16 gap-4 md:gap-6 text-sm border-t border-white/20">
        <p className="text-sm">
          <span className="mr-1">©</span>
          <span className="underline underline-offset-4">Prysoft Innovation Pvt Ltd,</span>
          <span> All Right Reserved.</span>
        </p>
        <div className="flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/service", label: "Services" },
            { to: "/blog", label: "Blog" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={scrollToTop}
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
