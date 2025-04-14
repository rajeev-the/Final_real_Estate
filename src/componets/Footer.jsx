import React from "react";
import cityscape from "../assets/footer.png";
import logoimg from "../assets/logoo.jpg";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = [
    { icon: <FaTwitter />, link: "#", name: "Twitter" },
    { icon: <FaInstagram />, link: "#", name: "Instagram" },
    { icon: <FaLinkedin />, link: "#", name: "LinkedIn" },
  ];
  const footerLinks = [
    { title: "COMPANY", links: ["AboutUs", "Careers", "ContactUs",  "Terms"] },
    { title: "SOLUTIONS", links: ["landlist", "home", "agents", "ContactUs"] },
    { title: "VISION", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
 
  ];

  return (
    <div className="relative bg-[black]  text-white pt-20 pb-48 px-6 mt-19  border-t border-[#D65F00]/50    ">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 relative z-10">
        {footerLinks.map((section, index) => (
          <div key={index} className="group">
            <h2 className="font-semibold text-xl mb-5 uppercase tracking-wider text-white border-l-4 border-[#D65F00] pl-3">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i} className="hover:translate-x-2 transition-all duration-300">
                  <Link to={`${link}`} className="flex items-center text-white/80 hover:text-white">
                    <span className="mr-2 text-[#D65F00]">▸</span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#D65F00]/40 to-transparent"></div>

      {/* Company Info */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10 rounded-xl">
        <div className="mb-8">
          <img 
            src={logoimg} 
            alt="Company Logo" 
            className="h-24 w-24 mx-auto mb-6 rounded-xl border-2  p-1" 
          />
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Crafting exceptional real estate experiences through innovation and integrity."
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          {socialIcons.map((social, i) => (
            <a 
              key={i} 
              href="#" 
              className="p-3 rounded-xl bg-[#D65F00] hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl border border-[#1C2B2D]/50 hover:border-white/20 text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Cityscape Image with Gradient Overlay */}
    

      {/* Copyright Text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60 text-center z-10">
        © 2024 EstatePrime. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;