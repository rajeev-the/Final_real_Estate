// src/components/ProjectableCard.js
import React from 'react';
import logoo from '../assets/logoo -11.jpg'; // Adjust the path as necessary
import { FiCalendar } from 'react-icons/fi'; // from react-icons

const ProjectableCard = ({ title, subtitle, content, date ,img  }) => {

   function formatISODate(isoDateStr) {
  const date = new Date(isoDateStr);

  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
   
  };

  return date.toLocaleString('en-US', options);
}
  
  return (
     <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className=" relative sm:w-[400px] w-[350px] h-[450px]  mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image */}
      <div className="w-full h-52 sm:h-64 md:h-60 overflow-hidden">
        <img
          src={img}
          alt="Blog visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Tag */}
<span className="inline-block bg-[#FFE9DC] text-[#D65F00] text-sm px-3 py-1 rounded-full font-medium shadow-sm">
  Real Estate
</span>


        {/* Title */}
       <h3 className="text-lg font-semibold text-gray-900">
  {title?.slice(0, 68) || ""}
</h3>


        {/* Excerpt */}
       

        {/* Footer */}
        <div className="absolute bottom-5 flex items-center gap-3 pt-2">
          <img
            src={logoo}
            alt="Author"
            className="w-8 h-8   object-contaicdccd  rounded-full"
          />
          <div className=' '>
            <p className="text-sm font-medium text-gray-900">LandSathi</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <FiCalendar className="w-4 h-4" />
              <span>{formatISODate(date)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectableCard;