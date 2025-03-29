import React, { useState, useEffect } from "react";

import {  useParams } from "react-router-dom";
import { useAppContext } from "../Context/Poperty_context";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaShareAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

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



  console.log(data)

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
            <p className="text-md text-purple-200">₹{data.acre_price} Cr/ Acre</p>
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

      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src={data?.img} 
            alt="Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="text-white font-medium">Main Property Image</span>
          </div>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src={data?.layout} 
            alt="Property Layout" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="text-white font-medium">Property Layout</span>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Exclusive Details</h2>
            <p className="text-purple-600 font-medium">{data.size_range} • {data.price_range}</p>
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {data.available ? 'Available' : 'Sold'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <DetailItem label="Transaction Type" value={data.sale_or_lease === 'sale' ? 'For Sale' : 'For Lease'} />
            <DetailItem label="Land Category" value={data.land_category} />
            <DetailItem label="Price Range" value={data.price_range} />
            <DetailItem label="Road Width" value={`${data.road_width} ft (${data.road_width_filter})`} />
          </div>

          <div className="space-y-4">
            <DetailItem label="Land Size" value={`${data.acre} Acre (${data.size_range})`} />
            <DetailItem label="District" value={data.district_name} />
            <DetailItem label="Tehsil" value={data.tehsil_name} />
            <DetailItem label="Village" value={data.village_name || "N/A"} />
          </div>

          <div className="space-y-4">
            <DetailItem label="State" value={data.state} />
            <DetailItem label="Zone" value={data.zone || "N/A"} />
            <DetailItem label="Distance from Delhi" value={`${data.distance_between_delhi} km`} />
            <DetailItem label="CLU Eligible" value={data.eligible_for_clu ? 'Yes' : 'No'} />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-2">Land Facing</h4>
              <p className="text-gray-600">{data.land_facing || "N/A"}</p>
            </div>
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-2">Nearest Highways</h4>
              <p className="text-gray-600">{data.nearest_highways || "N/A"}</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">Property Details</h4>
            <p className="text-gray-600">{data.details || "No additional details provided"}</p>
          </div>
        </div>
      </div>

      {/* Location Button Section */}
      <div className="p-6 flex justify-center bg-gradient-to-b from-white to-gray-50/80">
        <button 
          onClick={() => window.open(data.locations_link, "_blank")} 
          className="
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
          "
        >
          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white/10
            to-transparent
            -translate-x-full
            group-hover:animate-shine
          "></div>
          
          <FaMapMarkerAlt className="w-5 h-5 text-white/90" />
          View Premium Location
          <FaChevronRight className="w-4 h-4 text-white/90 ml-1" />
        </button>
      </div>
    </div>
 
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-gray-800 text-right">{value}</span>
  </div>
);

export default ViewLand;









