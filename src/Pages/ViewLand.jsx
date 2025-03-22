import React from 'react'
import { FaWhatsapp, FaShareAlt } from "react-icons/fa";

const ViewLand = () => {
  return (
    <div  style={{ fontFamily: "Krub, sans-serif" }} className="max-w-6xl  mt-[100px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Header Section */}
      <div className="bg-[#826CB0] p-6">
        <h1 className="text-2xl font-bold text-white mb-2">Kharkhoda Sonipat , Haryana</h1>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-white">10.5 Acre</p>
            <p className="text-md text-purple-200">6 Cr/ Acre</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors shadow-md">
              <FaWhatsapp /> WhatsApp
            </a>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors shadow-md flex items-center gap-2">
              <FaShareAlt /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Exclusive Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <DetailItem label="Available For" value="Sale" />
            <DetailItem label="Land Size" value="10.5 Acre" />
            <DetailItem label="Land Category" value="Agriculture" />
            <DetailItem label="District Name" value="Sonipat" />
          </div>
          
          <div className="space-y-4">
            <DetailItem label="Road Width" value="416 feet" />
            <DetailItem label="Tehsil Name" value="Kharkhoda" />
            <DetailItem label="State" value="Haryana" />
            <DetailItem label="Price per Acre" value="6 Cr" />
          </div>
        </div>

        <div className="mt-8  pt-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Key Highlights</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Prime Agricultural Land
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Clear Title Deed
            </li>
          </ul>
        </div>
      </div>

      {/* Loctions button */}

      <div className="p-6 flex justify-center bg-gradient-to-b from-white to-gray-50/80">
  <button className="
    bg-gradient-to-r from-blue-700 to-blue-600
    hover:from-blue-800 hover:to-blue-700
    text-white px-8 py-4
    rounded-full
    shadow-lg
    hover:shadow-xl
    transition-all
    duration-300
    transform
    hover:scale-[1.02]
    font-semibold
    tracking-wide
    text-lg
    relative
    overflow-hidden
    group
    flex items-center gap-3
    border-2 border-blue-800/20
  ">
    {/* Animated background element */}
    <div className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/10
      to-transparent
      -translate-x-full
      group-hover:animate-shine
    "></div>
    
    {/* Location icon */}
    <svg 
      className="w-6 h-6 text-white/90" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
      />
    </svg>
    
    View Premium Location
    
    {/* Chevron icon */}
    <svg 
      className="w-4 h-4 text-white/90 ml-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M9 5l7 7-7 7" 
      />
    </svg>
  </button>
</div>
  
  
    </div>
  )
}

const DetailItem = ({ label, value }) => (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );

export default ViewLand