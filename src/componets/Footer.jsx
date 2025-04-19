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
    { title: "COMPANY", links: ["AboutUs" , "Careers",  "Terms"]  ,values:["AboutUs", "Careers", "terms"]},

    { title: "SOLUTIONS", links: ["landlist", "Home", "Agents", "ContactUs"]  , values:["landlist", "home", "agents", "ContactUs"]} ,
   
  ];

  return (
    <div className="relative bg-[#36383d] text-gray-300 pt-20 pb-12 px-6 border-t border-[#D65F00]/30">
    {/* Decorative Top Border */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D65F00] to-transparent" />

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logoimg} 
              alt="EstatePrime" 
              className="h-30 w-40 rounded-lg    p-3 "
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Revolutionizing real estate through innovative solutions and trusted partnerships.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((social, i) => (
              <Link
                key={i}
                href={social.link}
                className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#D65F00] transition-all duration-300 group"
              >
                {React.cloneElement(social.icon, { 
                  className: "w-5 h-5 text-gray-400 group-hover:text-black" 
                })}
              </Link>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-5">
            <h3 className="text-[#D65F00] font-semibold uppercase tracking-wider text-sm">
              {section.title}
            </h3>
            <ul className="space-y-3">
            {section.links.map((link, i) => (
  <li key={i}>
    <Link
      to={section.values ? section.values[i] : "#"}
      className="text-gray-400 hover:text-[#D65F00] text-sm transition-all duration-300 flex items-center group"
    >
      <span className="w-2 h-px bg-[#D65F00] mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      {link}
    </Link>
  </li>
))}
            </ul>
          </div>
        ))}

        {/* Newsletter Column */}
        <div className="space-y-5">
          <h3 className="text-[#D65F00] font-semibold uppercase tracking-wider text-sm">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400">
            Get exclusive market insights and updates
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1a1a1a] border border-[#333333] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D65F00]"
            />
            <button
              type="submit"
              className="bg-[#D65F00] hover:bg-[#B85400] text-black font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#D65F00]/20 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="text-gray-500">
            © 2024 EstatePrime. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#D65F00] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D65F00] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D65F00] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;