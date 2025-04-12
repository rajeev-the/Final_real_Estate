import React, { useState } from "react";

const ToggleCard = () => {
  const [active, setActive] = useState("top-rated");

  return (
    <div className="flex flex-col items-center justify-center sm:mt-10 md:mb-14 relative">
      <div className="bg-[#000000] dark:bg-[#000000] p-1 mb-3 rounded-full flex items-center w-[220px] md:w-[300px] lg:w-[320px]">
        <button
          onClick={() => setActive("top-rated")}
          className={`w-1/2 py-3 text-sm md:text-xl font-medium transition-all duration-300 rounded-full ${
            active === "top-rated"
              ? "bg-[#4B2E83] text-white shadow-lg"
              : "text-white"
          }`}
        >
          Top Rated
        </button>

        <button
          onClick={() => setActive("suggestions")}
          className={`w-1/2 py-3 text-sm md:text-xl font-medium transition-all duration-300 rounded-full ${
            active === "suggestions"
              ? "bg-[#4B2E83] text-white shadow-lg"
              : " text-white "
          }`}
        >
          Suggestions
        </button>
      </div>

      {/* Subtle Background Divider */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>
    </div>
  );
};

export default ToggleCard;
