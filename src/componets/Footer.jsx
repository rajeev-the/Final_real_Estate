import React from "react";
import cityscape from "../assets/footer.png" // Ensure the correct path
import logoimg from "../assets/logoo.jpg" // Ensure the correct path  
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaTwitter />, link: "#", name: "Twitter" },
    { icon: <FaInstagram />, link: "#", name: "Instagram" },
    { icon: <FaLinkedin />, link: "#", name: "LinkedIn" },
  ];
  const footerLinks = [
    { title: "COMPANY", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
    { title: "SOLUTIONS", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
    { title: "VISION", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
    { title: "RESOURCES", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-gray-100 pt-20 pb-48 px-6 mt-19 rounded-t-[4rem] shadow-top-lg border-t border-slate-600/30">
    {/* Footer Content */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-40 relative z-10">
      {footerLinks.map((section, index) => (
        <div key={index} className="group">
          <h2 className="font-semibold text-xl mb-5 uppercase tracking-wider text-amber-400 border-l-4 border-amber-500/60 pl-3">
            {section.title}
          </h2>
          <ul className="space-y-3">
            {section.links.map((link, i) => (
              <li key={i} className="hover:translate-x-2 transition-all duration-300">
                <a href="#" className="flex items-center text-slate-300 hover:text-amber-200">
                  <span className="mr-2 text-amber-500 opacity-90">▸</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-800/40 to-transparent"></div>
  
    {/* Company Info */}
    <div className="max-w-7xl mx-auto text-center mb-16 relative z-10 rounded-xl">
      <div className="mb-8">
        <img 
          src={logoimg} 
          alt="Company Logo" 
          className="h-24 w-24 mx-auto mb-6 filter drop-shadow-lg rounded-xl" 
        />
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light italic">
          "Crafting exceptional real estate experiences through innovation and integrity."
        </p>
      </div>
      <div className="flex justify-center space-x-6 mb-8">
        {socialIcons.map((social, i) => (
          <a 
            key={i} 
            href="#" 
            className="p-3 rounded-xl bg-slate-700/40 hover:bg-slate-700/60 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-600/30 hover:border-amber-400/20"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  
    {/* Cityscape Image with Gradient Overlay */}
    <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#1E293B]/90 to-transparent z-10"></div>
      <img
        src={cityscape}
        alt="Cityscape"
        className="w-full h-full object-cover object-bottom mix-blend-luminosity opacity-80  "
      />
    </div>
  
    {/* Copyright Text */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-slate-400/80 text-center z-10">
      © 2024 EstatePrime. All rights reserved.
    </div>
  </div>
  );
};

export default Footer;
