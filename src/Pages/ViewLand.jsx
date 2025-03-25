import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaShareAlt } from "react-icons/fa";
import {  useParams } from "react-router-dom";
import { useAppContext } from "../Context/Poperty_context";
import { useNavigate } from "react-router-dom";

const ViewLand = () => {
  const { id } = useParams();
  const { property } = useAppContext();
  const [data, setData] = useState(null);


  useEffect(() => {
    if (property) {
      const selectedLand = property.find((et) => et.id.toString() === id);
      setData(selectedLand || null);
    }
  }, [id, property]);




  if (!data) {
    return <div className="text-center  text-gray-600 mt-10">Loading...</div>;
  }

  return (
    <div
      style={{ fontFamily: "Krub, sans-serif" }}
      className="max-w-6xl mt-[100px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Header Section */}
      <div className="bg-[#826CB0] p-6">
        <h1 className="text-2xl font-bold text-white mb-2">{data.address}</h1>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-white">{data.acre} Acre</p>
            <p className="text-md text-purple-200">{data.acre_price} Cr/ Acre</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors shadow-md"
            >
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
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Exclusive Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <DetailItem label="Available For" value="Sale" />
            <DetailItem label="Land Size" value={`${data.acre} Acre`} />
            <DetailItem label="Land Category" value={data.land_category || "N/A"} />
            <DetailItem label="District Name" value={data.district_name || "N/A"} />
          </div>

          <div className="space-y-4">
            <DetailItem label="Road Width" value={data.road_width || "N/A"} />
            <DetailItem label="Tehsil Name" value={data.tehsil_name || "N/A"} />
            <DetailItem label="State" value={data.state || "N/A"} />
            <DetailItem label="Price per Acre" value={`${data.acre_price} Cr`} />
          </div>
        </div>
      </div>
      <div className="p-6 flex justify-center bg-gradient-to-b from-white to-gray-50/80">
  <button   onClick={() => window.open(data.locations_link, "_blank")} className="
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
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

export default ViewLand;
