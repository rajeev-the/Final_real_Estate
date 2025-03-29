import React, { useEffect, useState,useRef } from "react";
import desktopBanner from "../assets/desktop-banner.jpeg";
import ND from "../assets/ND.jpeg";
import GZ from "../assets/GZ.jpeg";
import HR from "../assets/HR.jpeg";
import LandCard from "../componets/LandCard"
import {useAppContext } from "../Context/Poperty_context"
import { Link } from "react-router-dom";
import xxxp from "../assets/xxxp.mp4"

import Realcompo from "../componets/Realcompo"

const Home = ({agent}) => {
  const [show, setShow] = useState(true);
  const[data,setdata] = useState([])
 
  const { property  } = useAppContext();
  const [selectedLocation, setSelectedLocation] = useState("Noida");
  const carouselRef = useRef(null);

  
  
 

  useEffect(() => {
 
  setdata(property.filter((et)=>et.state == selectedLocation))

 
 


  }, [selectedLocation,property])
  




  const locations = ["Haryana", "Delhi", "Noida", "Ghaziabad"];
 

  return (
    <>
      {/* Top Header Bar */}

       {
        agent ?  <div className="w-full h-16 sm:h-[102px] bg-[#826CB0] relative z-0"></div> :<></>

      }
     

      {/* Main Content */}
      <div className="min-h-screen w-full relative bg-white pt-3 sm:pt-5 -top-2 sm:-top-5 rounded-t-lg z-10">
        
        {/* Banner Section */}
        <div className="h-[200px] sm:h-[600px] sm:p-5 p-3 w-full flex justify-center items-center  rounded-lg overflow-hidden">
          {/* <img
            className="h-full w-full  rounded-xl object-cover"
            src={desktopBanner}
            alt="Banner"
          /> */}

          <video 
           autoPlay 
           loop 
           muted
            src={xxxp}  className="h-full w-full  rounded-xl object-cover"></video>
        </div>

        {/* Tabs Section */}
        <div className="w-full mt-10 sm:mt-[150px]" style={{ fontFamily: "Krub, sans-serif" }}>
          <div className="flex flex-col items-center justify-center gap-8 md:gap-[100px] w-full max-w-7xl mx-auto">
            
            {/* Toggle Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-[100px]">
            <button
            
  onClick={() => setShow(true)}
  className={`text-lg md:text-2xl   font-normal py-2 px-4 md:px-[30px] rounded-lg transition-all duration-300 border-3 text-black ${
    show ? "border-[#826cb0] shadow-md scale-105" : "border-transparent"
  }`}
>
  Top Rate
</button>

              <button
  onClick={() => setShow(false)}
  className={`text-lg md:text-2xl font-normal py-2 px-4 md:px-[30px] rounded-lg transition-all duration-300 text-black border-3 ${
    !show ? "border-[#826cb0] shadow-md scale-105 " : "border-transparent"
  }`}
>
  Recommendation
</button>

            </div>


            <div className="w-full relative">
      {/* Carousel Container - Scrollbar Completely Hidden */}
      <div
        ref={carouselRef}
        className="
          flex snap-x snap-mandatory 
          overflow-x-auto w-full pb-4
          no-scrollbar scrollbar-hide
        "
      >
        {/* Left Spacer for Centering */}
        <div className="flex-shrink-0 w-[5vw] sm:w-[7vw] md:w-[8vw] lg:w-[10vw]"></div>

        {/* Carousel Items */}
        {[ND, GZ, HR].map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center mx-2 w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw]  "
          >
            <img
              className="w-full h-auto aspect-[4/3] rounded-lg object-cover"
              src={img}
              alt={`Image ${index}`}
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}

        {/* Right Spacer for Centering */}
        <div className="flex-shrink-0 w-[5vw] sm:w-[7vw] md:w-[8vw] lg:w-[10vw]"></div>
      </div>
    </div>

          </div>
        </div>

        {/* Hot Selling Lands Section */}
        <div className="flex flex-col gap-4 md:gap-[40px] w-full sm:mt-[110px] mt-[50px] max-w-7xl mx-auto  sm:mb-[100px]">
          
          <h2 className="text-3xl font-normal text-center text-black mb-5"  style={{ fontFamily: "Krub, sans-serif" }}>  Hot Selling Lands in India</h2>

          {/* Location Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-[100px] mb-4">
            {locations.map((name, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(name)}
                className={`text-sm  text-black md:text-lg font-medium py-2 px-4 md:px-[30px] rounded-lg transition-all duration-300 ${
                  selectedLocation === name
                    ? "  border-2 border-[#826cb0] shadow-md scale-105"
                    : "border-transparent "
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Land Cards Carousel */}
          <div className="overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden">
  <div className="flex flex-nowrap justify-start items-center gap-4 md:gap-6 p-4 min-w-min">
    {data?.slice(0, 4).map((e, i) => (
      <Link 
        to={`/Land/${e.id}`} 
        key={e.id}
        className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start"  
      >  
        <LandCard 
          acre={e.acre} 
          address={e.address} 
          acre_price={e.acre_price}  
          img={"https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"}  
        /> 
      </Link>
    ))}
  </div>
</div>


    <Realcompo/>

        </div>
      </div>
    </>
  );
};

export default Home;
