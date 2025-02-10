import { useState } from "react";
import AOS from 'aos'
const socialLink= [
  { name: 'Instagram', url: 'https://www.instagram.com/lucid_abyss_/', icon: 'https://github.com/abyss01701/portfolio/blob/main/icons/instagram.png?raw=true' },
  { name: 'X', url: 'https://x.com/incarcerated_ab', icon: 'https://github.com/abyss01701/portfolio/blob/main/icons/twitter.png?raw=true' },
  { name: 'Facebook', url: 'https://www.facebook.com/XxAni10NxX/', icon: 'https://github.com/abyss01701/portfolio/blob/main/icons/facebook.png?raw=true' },
  { name: 'Email', url: 'mailto:akshataniketnewal@gmail.com', icon: 'https://github.com/abyss01701/portfolio/blob/main/icons/gmail.png?raw=true' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshat-newal-700021268/', icon: 'https://github.com/abyss01701/portfolio/blob/main/icons/linkedin.png?raw=true' },
  { name: 'GitHub', url: 'https://github.com/abyss01701', icon: 'https://github.com/abyss01701/portfolio/blob/main/icons/github.png?raw=true' },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-start space-x-4"
        data-aos="fade-up"
        data-aos-duration="1500"
    >
      {socialLink.map(({ name, url, icon }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 transform transition-transform duration-300 hover:translate-y-[-4px]"
        >
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
