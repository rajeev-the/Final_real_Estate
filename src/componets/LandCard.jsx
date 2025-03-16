import React from 'react';
import landbox from '../assets/landbox.jpg';

const LandCard = () => {
  return (
    <div className="w-full sm:w-[250px] max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg 
                    transform transition duration-300 ease-in-out hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[300px]">
        <img 
          src={landbox}
          alt="Land Plot" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-gray-100 to-gray-300">
        <p className="text-black text-sm sm:text-lg font-medium">Gurugram, Haryana</p>
        <p className="text-black font-bold text-base sm:text-xl mt-1">5 Acre</p>
        <p className="text-black text-xs sm:text-base flex items-center gap-1 mt-1">
          <span>💰</span> 222 Cr/ Acre (Approx.)
        </p>
      </div>
    </div>
  );
};

export default LandCard;
