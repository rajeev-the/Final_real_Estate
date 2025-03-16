import React, { useState } from "react";
import desktopBanner from "../assets/desktop-banner.jpeg";
import ND from "../assets/ND.jpeg";
import GZ from "../assets/GZ.jpeg";
import HR from "../assets/HR.jpeg";
import LandCard from "../componets/LandCard"

const Home = () => {
  const [show, setShow] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("Harayana");


  const locations = ["Harayana", "Gurugram", "Noida", "Ghaziabad"];

  return (
    <>
      {/* Top Header Bar */}
      <div className="w-full h-16 sm:h-[102px] bg-[#826CB0] relative z-0"></div>

      {/* Main Content */}
      <div className="min-h-screen w-full relative bg-white pt-3 sm:pt-5 -top-2 sm:-top-5 rounded-t-lg z-10">
        
        {/* Banner Section */}
        <div className="h-[200px] sm:h-[600px] w-full flex justify-center items-center rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={desktopBanner}
            alt="Banner"
          />
        </div>

        {/* Tabs Section */}
        <div className="w-full mt-10 sm:mt-[150px]" style={{ fontFamily: "Krub, sans-serif" }}>
          <div className="flex flex-col items-center justify-center gap-8 md:gap-[100px] w-full max-w-7xl mx-auto">
            
            {/* Toggle Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-[80px]">
              <button
                onClick={() => setShow(true)}
                className={`text-lg md:text-2xl font-medium py-2 px-4 md:px-[30px] rounded-lg transition-all duration-300 ${
                  show ? "bg-[#826cb0] text-white shadow-md scale-105" : "bg-white text-black"
                }`}
              >
                Top Rate
              </button>
              <button
                onClick={() => setShow(false)}
                className={`text-lg md:text-2xl font-medium py-2 px-4 md:px-[30px] rounded-lg transition-all duration-300 ${
                  !show ? "bg-[#826cb0] text-white shadow-md scale-105" : "bg-white text-black"
                }`}
              >
                Recommendation
              </button>
            </div>

            {/* Tab Content */}

              {/* Image Cards - Wider desktop version */}
    <div className='flex md:flex-row flex-nowrap overflow-x-auto gap-4 md:gap-8 w-full pb-4'>
      {[ND, GZ, HR].map((img, index) => (
        <div 
          key={index}
          className='min-w-[85vw] md:min-w-0 h-[200px] md:h-[350px]  rounded-lg flex-shrink-0 md:w-[400px]    transition-all duration-300 transform hover:scale-105' 
        >
          <img 
            className='h-full w-full rounded-lg object-cover'
            src={img}
            alt={`Card ${index + 1}`}
          />
        </div>
      ))}
    </div>

   

          </div>
        </div>

        {/* Hot Selling Lands Section */}
        <div className="flex flex-col gap-4 md:gap-[30px] w-full sm:mt-[150px] mt-[50px] max-w-7xl mx-auto  sm:mb-[100px]">
          <h1 className="text-center text-xl font-bold sm:text-3xl text-black">
            Hot Selling Lands in India
          </h1>

          {/* Location Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-[100px] mb-4">
            {locations.map((name, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(name)}
                className={`text-sm md:text-lg font-medium py-2 px-4 md:px-[30px] rounded-lg transition-all duration-300 ${
                  selectedLocation === name
                    ? "bg-[#826cb0] text-white shadow-md scale-105"
                    : "bg-white text-black"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Land Cards Carousel */}
          <div className="flex  [&::-webkit-scrollbar]:hidden scrollbar-none flex-row justify-center items-center overflow-x-auto gap-4 md:gap-[50px] w-full pb-1 p-3 scroll-smooth">
            <LandCard />
            <LandCard />
            <LandCard />
            <LandCard />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
