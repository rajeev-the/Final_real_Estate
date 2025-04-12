import React from 'react'
import { FaLandmark, FaHandshake, FaSearchLocation, FaMapMarkedAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br mt-[80px] from-[#f8f8ff] to-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image section */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/businesspeople-office-meeting_23-2148908967.jpg?t=st=1743928942~exp=1743932542~hmac=bc7cd3dde7d44743d573da3990453b4a8491bc74540257d6340ed58addb55dbb&w=1380"
            alt="Land representation"
            className="rounded-3xl shadow-xl object-cover h-full w-full"
          />
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4B2E83] leading-tight">
            About <span className="text-[#3A1F6B]">Landsathi</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg">
            At <strong>Landsathi</strong>, we believe that land is not just a piece of property—it’s the foundation of opportunity. Born out of a vision to simplify and streamline land transactions, Landsathi is your trusted partner in discovering, evaluating, and acquiring land parcels across Haryana and beyond.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaSearchLocation className="text-[#4B2E83] text-xl mt-1" />
              <span className="text-gray-800">
                Verified listings backed by real market insights and location expertise.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MdVerified className="text-[#4B2E83] text-xl mt-1" />
              <span className="text-gray-800">
                Trusted platform with a seamless process—from inquiry to acquisition.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkedAlt className="text-[#4B2E83] text-xl mt-1" />
              <span className="text-gray-800">
                Access to CLU, free zone, agricultural, industrial, and warehouse lands.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHandshake className="text-[#4B2E83] text-xl mt-1" />
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