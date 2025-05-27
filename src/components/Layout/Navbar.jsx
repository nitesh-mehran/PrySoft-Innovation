import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderNavLink = ({ name, path }) => (
    <NavLink
      key={name}
      to={path}
      className={({ isActive }) =>
        `relative group text-black transition duration-200 text-base pl-1 pr-1 ${
          isActive ? 'text-black' : ''
        }`
      }
      onClick={handleClick}
    >
      {name}
      <span className="absolute left-0 bottom-[-4px] h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] group-hover:scale-x-100 transition-transform duration-300"></span>
    </NavLink>
  );

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md transition-all duration-300 ${
        isScrolled ? 'h-[70px]' : 'h-[100px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 transition-all duration-300" data-aos="zoom-in">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo"
                className={`object-contain w-auto transition-all duration-300 md:ml-12 ${
                  isScrolled ? 'h-24 sm:h-28 md:h-32' : 'h-32 sm:h-36 md:h-40'
                } hover:scale-105`}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-3 text-base font-medium items-center pr-40">
            {navLinks.map(renderNavLink)}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col space-y-3 font-medium text-base items-center">
            {navLinks.map(renderNavLink)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
