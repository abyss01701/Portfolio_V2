import React, { useEffect, useRef } from 'react';
import SwipeCarousel from '../Components/SwipeCarousel';
import EncryptedText from '../Components/EncryptedText';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import TypedComponent from '../Components/TypedComponent';

const Home = () => {
  const navigate = useNavigate();

  // Smooth scroll function
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="Home" className="relative h-screen w-full overflow-hidden lg:-mb-40">
      {/* Text Overlay */}
      <div className="absolute top-1/4 w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start text-left px-4 lg:px-35 z-10">
        <div className="space-y-6">
          {/* Desktop Text with Typed.js Effect */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold hidden sm:block">
                <TypedComponent 
                strings={["Dynamic Software Engineer"]} 
                typeSpeed={60} 
                loop={false} 
              />
          </h2>

          {/* Mobile Text */}
          <h2 className="text-3xl font-bold sm:hidden text-left">
                <TypedComponent 
                  strings={["Dynamic Software Engineer"]} 
                  typeSpeed={60} 
                  loop={false} 
                />  
          </h2>

          {/* Shared Paragraph Text */}
          <p
            className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-semibold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Welcome to my Portfolio Page
          </p>

          {/* Buttons to Contact & Projects */}
          <div className="flex gap-2 mt-4" data-aos="fade-right" data-aos-duration="1500">
            <button onClick={(e) => scrollToSection(e, "#Portfolio")}>
              <EncryptedText>View Projects</EncryptedText>
            </button>
            <button onClick={(e) => scrollToSection(e, "#Contact")}>
              <EncryptedText>Contact Me</EncryptedText>
            </button>
          </div>
          <div className="flex gap-2" data-aos="fade-right" data-aos-duration="2000">
            <a href="https://www.linkedin.com/in/akshat-newal-700021268/">
              <img
                src="https://github.com/abyss01701/portfolio/blob/main/icons/linkedin.png?raw=true"
                alt="LinkedIn"
                className="h-8 transform transition-transform duration-300 hover:translate-y-[-4px]"
              />
            </a>
            <a href="https://github.com/abyss01701">
              <img
                src="https://github.com/abyss01701/portfolio/blob/main/icons/github.png?raw=true"
                alt="Github"
                className="h-8 transform transition-transform duration-300 hover:translate-y-[-4px]"
              />
            </a>
            <a href="mailto:akshataniketnewal@gmail.com">
              <img
                src="https://github.com/abyss01701/portfolio/blob/main/icons/gmail.png?raw=true"
                alt="Gmail"
                className="h-8 transform transition-transform duration-300 hover:translate-y-[-4px]"
              />
            </a>
            <a href="tel:+6799507275">
              <img
                src="https://github.com/abyss01701/portfolio/blob/main/icons/mobile.png?raw=true"
                alt="Phone"
                className="h-8 transform transition-transform duration-300 hover:translate-y-[-4px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Swipe Carousel */}
      <SwipeCarousel />
    </div>
  );
};

export default Home;
