import React from 'react'
import { FaLandmark, FaHandshake, FaSearchLocation, FaMapMarkedAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import employees from "../assets/emplyo.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br mt-[80px] from-[#f8f8ff] to-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image section */}
        <div className="relative">
          <img
            src={employees}
            alt="Land representation"
            className="rounded-3xl shadow-xl object-cover h-full w-full"
          />
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D65F00] leading-tight">
            About landsathi.com 
          </h2>

          <p className="text-gray-700 text-base sm:text-lg">
           <strong>Landsathi</strong> is your trusted partner in navigating India’s diverse and dynamic land landscape. From industrial zones to logistics hubs, agri-based holdings to infrastructure-ready parcels, we specialize in connecting you with the right land—strategically, transparently, and efficiently.

India’s land market is vast and often complex. At Landsathi, we simplify the process. With a deep understanding of regional regulations, market trends, and local dynamics, we help businesses, investors, and developers identify and acquire land that aligns with their goals. Whether you're seeking expansion, setting up a manufacturing unit, developing a township, or exploring long-term investments, Landsathi ensures you're never alone in your land journey.

Our network spans across key growth corridors, upcoming development zones, and emerging hotspots across the country. Backed by verified listings, professional due diligence, and personalized support, we aim to bring credibility and confidence to every transaction.

At Landsathi, it’s more than just a deal—it’s a partnership built on trust, insight, and long-term value. Join hands with us and let’s build the future, one parcel at a time.

Landsathi – Har Zameen Ka Saathi.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaSearchLocation className="text-[#D65F00] text-xl mt-1" />
              <span className="text-gray-800">
                Verified listings backed by real market insights and location expertise.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MdVerified className="text-[#D65F00] text-xl mt-1" />
              <span className="text-gray-800">
                Trusted platform with a seamless process—from inquiry to acquisition.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkedAlt className="text-[#D65F00] text-xl mt-1" />
              <span className="text-gray-800">
                Access to CLU, free zone, agricultural, industrial, and warehouse lands.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHandshake className="text-[#D65F00] text-xl mt-1" />
              <span className="text-gray-800">
                Built on transparency, trust, and decades of real estate experience.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutUs