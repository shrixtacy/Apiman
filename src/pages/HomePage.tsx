import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Programs from '../components/Programs';
import Apprenticeship from '../components/Apprenticeship';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <TechStack />
      </div>
      <div id="about">
        <About />
      </div>
      <WhyChooseUs />
      <div id="programs">
        <Programs />
      </div>
      <Apprenticeship />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;