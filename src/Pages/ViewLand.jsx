import React, { useState, useEffect } from "react";

import {  useParams } from "react-router-dom";
import { useAppContext } from "../Context/Poperty_context";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaShareAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewLand = () => {
  const { id } = useParams();
  const { property } = useAppContext();
  const url = "https://finalbackend111.pythonanywhere.com/api/";
  const idData = JSON.parse(localStorage.getItem("Agent")) ? true :false
  const isUser = JSON.parse(localStorage.getItem("User")) 
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState(null);
  const [agent, setAgent] = useState(null);
 
  
  useEffect(() => {
    if (property) {
      const selectedLand = property.find((et) => et.id.toString() === id);
      setData(selectedLand || null);
    }
  }, [id, property]);
  
  useEffect(() => {
    const getAgent = async () => {
      if (!data?.agent) return;
  
      try {
        const res = await axios.get(`${url}/agent/${data.agent}`);
        setAgent(res.data);
      } catch (error) {
        console.error("Error fetching agent:", error);
      }
    };
  
    getAgent();
  }, [data]); // Runs only when data is set


  console.log(data)

  const handleShareClick = async () => { const shareUrl = window.location.href ; const shareText =` ${data?.address} - ${data?.acre} ${data?.unit_of_land}, ₹${data?.acre_price} ${data?.money_unit} / ${data?.unit_of_land}`;

if (navigator.share) { try { await navigator.share({ title: document.title, text: shareText, url: shareUrl, }); } catch (err) { console.error("Sharing failed:", err); } } else { try { await navigator.clipboard.writeText(shareUrl); toast.success("Link copied to clipboard!", { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "colored", }); } catch (err) { toast.error("Failed to copy link."); } } };

 const showErrorToast = (message) => {
       toast.error(message, {
         position: "top-right",
         autoClose: 3000, // Closes after 3 seconds
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
       });
     };

  const handleWhatsappClick = async() => {
    
    if (!isUser) {
      
      showErrorToast("Please login to continue.");
      
      return;
    }


    const phoneNumber = agent?.phone_number || data?.phone_number;

    const message = `I am interested to know more about lands available! \n\nHere is the link to the page: ${window.location.href}`;
    
    const encodedMessage = encodeURIComponent(message);
    const jsondata = {
      "phone_User": isUser?.user?.phone || "N/A",
      "User_name": isUser?.user?.name || "N/A",
      "Agent_name": agent?.name || "N/A",
      "phone_Agent": agent?.phone_number || "N/A",
  }

  try{

     await axios.post(`${url}add-to-sheet/`,jsondata)
  

  }
  catch(err){
    console.log(err)
  }

  
    // Remove the '+' and country code if needed or keep full number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
  }
  

  if (!data) {
    return <div className="text-center  text-gray-600 mt-10">Loading...</div>;
  }

  return (
  
    <div
      style={{ fontFamily: "Krub, sans-serif" }}
      className="max-w-6xl mt-[100px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      
    <div className="bg-[#1C2B2D] p-6">
  <h1 className="text-2xl font-bold text-white mb-2">{data.address}</h1>

  <div className="flex items-center justify-between">
    <div>
      <p className="text-xl font-semibold text-white">{data.land_size} {data.unit_of_land}</p>
      <p className="text-md text-purple-200">
        ₹{data.land_price} {data.money_unit} / {data.unit_of_land}
      </p>
    </div>

    <div className="flex flex-col items-end gap-2">
  

    <p className="uppercase text-sm font-semibold text-white px-5 py-1.5 rounded-full inline-block mb-1 bg-white/10 backdrop-blur-md border border-orange-400 shadow-inner shadow-orange-500/20 tracking-widest hover:scale-105 transition-transform duration-300">
 {agent?.name}
</p>



      <div className="flex gap-3 flex-wrap">
  <button
    onClick={handleWhatsappClick}
    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full flex items-center gap-1.5 transition-colors shadow-md"
  >
    <FaWhatsapp className="text-sm sm:text-base" /> WhatsApp
  </button>

  <button
    onClick={handleShareClick}
    className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full flex items-center gap-1.5 transition-colors shadow-md"
  >
    <FaShareAlt className="text-sm sm:text-base" /> Share
  </button>
</div>

    </div>
  </div>
</div>

      <div
  className={`grid gap-4 p-6 bg-gray-50 ${
    idData ? 'grid-cols-1 md:grid-cols-2' : 'place-items-center'
  }`}
>
  {/* Main Property Image */}
  <div  onClick={() => setIsModalOpen(true)}  className="relative h-120 w-full max-w-xl rounded-lg overflow-hidden shadow-md group cursor-pointer">
    <img 
      src={data?.img} 
      alt="Property" 
      className="w-full h-full     object-cover   transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
    
    </div>
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white text-md font-semibold">Click to full view</span>
    </div>
  </div>
  {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative max-w-6xl w-full p-4">
            <img
              src={data?.img}
              alt="Full View"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}

  {/* Property Layout Image */}
  {idData && (
    <div  onClick={()=> window.open(data?.img, "_blank")} className="relative h-120 w-full max-w-xl rounded-lg overflow-hidden shadow-md group cursor-pointer">
      <img 
        src={data?.layout} 
        alt="Property Layout" 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <span className="text-white font-medium">Property Layout</span>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-md font-semibold">Click to full view</span>
      </div>
    </div>
  )}
</div>

      {/* Details Section */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Exclusive Details</h2>
            <p className="text-purple-600 font-medium">•{data.land_price}{data.money_unit}/{data.unit_of_land}  </p>
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {data.available ? 'Available' : 'Sold'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            
          <DetailItem label="Date Added" value={data.created_at ? new Date(data.created_at).toLocaleDateString() : "N/A"} />
            <DetailItem label="Transaction Type" value={data.sale_or_lease === 'sale' ? 'For Sale' : 'For Lease'} />
            <DetailItem label="Land Category" value={data.land_category} />
            <DetailItem label="Road Width" value={`${data.road_width} ft`} />
            <DetailItem label="Total Price" value={`${(data.land_price * data.land_size).toFixed(2)} ${data.money_unit}(Approx.)`} />
      
          </div>

          <div className="space-y-4">
          <DetailItem label="Land Size" value={`${data.land_size} ${data.unit_of_land} `} />
            <DetailItem label="District" value={data.district_name} />
            <DetailItem label="Tehsil" value={data.tehsil_name} />
            <DetailItem label="State" value={data.state} />
            <DetailItem label="Zone" value={data.zone || "N/A"} />
         
        
            
          </div>

          <div className="space-y-4">
          <DetailItem label="Distance from Delhi" value={`${data.distance_between_delhi} km`} />
          <DetailItem label="CLU Eligible" value={data.eligible_for_clu ? 'Yes' : 'No'} />
          <DetailItem label="Distance from MSIL" value={`${data.Distance_from_MSIL ?`${ data.Distance_from_MSIL}Km` : " "  } `} />
          <DetailItem label="Frontage" value={`${data.Frontage ?`${ data.Frontage} ${data.unit_of_frontage}` : " "  } `} />
          </div>
        </div>

        {/* Additional Information Section */}
      <div className="mt-8 space-y-4">
  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Additional Information</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <h4 className="text-md font-medium text-gray-700 mb-2">Land Facing</h4>
      <p className="text-gray-600">{data.land_facing || "N/A"}</p>
      <div className="mt-4">
    <h4 className="text-md font-medium text-gray-700 mb-2">Other Details</h4>
    <p className="text-gray-600">{data.details || "No additional details provided"}</p>
  </div>
    </div>
    <div>
      <h4 className="text-md font-medium text-gray-700 mb-2">Nearest Highways</h4>
      <p className="text-gray-600">{data.nearest_highways || "N/A"}</p>
    
    </div>
  </div>
</div>


      </div>



<div className="w-full flex flex-col items-center gap-4 py-4">
  {/* Label */}
  <label className="text-lg font-semibold text-gray-800">
    📍 Proximity location
  </label>

  {/* Responsive Map */}
  <div className="w-full max-w-4xl h-[450px]">
    <iframe
      src={data.map_link}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="India Map"
    ></iframe>
  </div>
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









