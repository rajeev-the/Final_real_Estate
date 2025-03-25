import React from 'react';


const LandCard = ({acre,address ,acre_price ,img}) => {
  return (
    <div className="w-[300px] sm:w-[250px] bg-white rounded-2xl  sm:overflow-hidden shadow-lg 
                    transform transition duration-300 ease-in-out hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[300px] rounded-2xl">
        <img 
          src={img}
          alt="Land Plot" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-gray-100 to-gray-300">
        <p className="text-black text-sm sm:text-lg font-medium">{address}</p>
        <p className="text-black font-bold text-base sm:text-xl mt-1">{acre}Acre</p>
        <p className="text-black text-xs sm:text-base flex items-center gap-1 mt-1">
          <span>💰</span> {acre_price} (Approx.)
        </p>
      </div>
    </div>
  );
};

export default LandCard;
