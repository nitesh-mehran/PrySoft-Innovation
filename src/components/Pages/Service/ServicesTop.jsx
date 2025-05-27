import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import PageTop from '../../Layout/PageTop';

const ServicesTop = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
      <PageTop
        title="On Demand Services"
        // subtitle="We are driven by passion and purpose."
        currentPage="Service"
      />
  );
};

export default ServicesTop;
