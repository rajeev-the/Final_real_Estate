import React from "react";
import cityscape from "../assets/footer.png" // Ensure the correct path

const Footer = () => {
  const footerLinks = [
    { title: "COMPANY", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
    { title: "SOLUTIONS", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
    { title: "VISION", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
    { title: "RESOURCES", links: ["About Us", "Careers", "Contact Us", "Blog", "Terms"] },
  ];

  return (
    <div className="relative bg-[#A5B8D3] text-black pt-10 pb-24 px-6 mt-12 rounded-t-3xl">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left   mb-[100px]">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg">{section.title}</h2>
            <ul className="mt-2 space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Cityscape Image (Fixed for Desktop & Mobile) */}
      <div className="  absolute bottom-0 left-0 w-full">
        <img
          src={cityscape}
          alt="Cityscape"
          className="w-full object-cover max-h-[120px] md:max-h-[200px]"
        />
      </div>
    </div>
  );
};

export default Footer;
