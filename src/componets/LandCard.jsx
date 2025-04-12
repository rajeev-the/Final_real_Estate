import React from 'react';

const LandCard = ({ acre, address, acre_price, img }) => {
  return (
    <div className="w-full md:w-[320px] bg-white rounded-xl overflow-hidden shadow-lg 
                    transform transition duration-500 ease-in-out hover:shadow-xl 
                    border border-[#1C2B2D]/10 group relative">
      {/* Image Section */}
      <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden">
        <img 
          src={img}
          alt="Land Plot" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2B2D]/10 to-[#1C2B2D]/30" />
      </div>

      {/* Details Section */}
      <div className="p-4 md:p-5 space-y-3 md:space-y-4">
        <div>
        {/* Full address on medium screens and above */}
<h3 className="hidden md:block text-black text-lg md:text-xl font-medium font-serif leading-tight">
  {address}
</h3>

{/* Truncated address on small screens */}
<h3 className="block md:hidden text-black text-lg md:text-xl font-medium font-serif leading-tight">
  {address.length > 10 ? `${address.slice(0, 10)}...` : address}
</h3>
        </div>

        <div className="flex justify-between items-center border-t border-b border-[#1C2B2D]/10 py-2 md:py-3">
          <div className="text-center">
            <p className="text-xs text-[#1C2B2D]/80 mb-1">Total Area</p>
            <div className="flex items-center justify-center gap-1">
              <svg className="w-4 h-4 text-[#1C2B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h4m12 12h4m-4 0V5a2 2 0 00-2-2h-4m-4 12h4M3 11h18"/>
              </svg>
              <span className="text-black text-base md:text-lg font-medium">{acre}Acre</span>
            </div>
          </div>

          <div className="h-6 w-px bg-[#1C2B2D]/10" />

          <div className="text-center">
            <p className="text-xs text-[#1C2B2D]/80 mb-1">Price/Acre</p>
            <div className="flex items-center justify-center gap-1">
              <svg className="w-4 h-4 text-[#1C2B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-black text-base md:text-lg font-medium">₹{acre_price}</span>
            </div>
          </div>
        </div>

        <button className="w-full py-2 md:py-2.5 text-sm font-medium text-white 
                          border border-[#1C2B2D] rounded-lg bg-[#1C2B2D]
                          hover:bg-white hover:text-[#1C2B2D] transition-colors duration-300
                          flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Explore
        </button>
      </div>

      {/* Premium Indicator */}
     
    </div>
  );
};

export default LandCard;