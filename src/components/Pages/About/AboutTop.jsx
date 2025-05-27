import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTop from '../../Layout/PageTop';

const AboutTop = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
      <PageTop
        title="Learn More About Us"
        currentPage="About"
      />
  );
};

export default AboutTop;
