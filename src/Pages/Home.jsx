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
        <div className="flex flex-col items-center px-4 sm:mt-[50px] py-8 bg-gradient-to-b from-white to-gray-50">
  {/* Premium Toggle Buttons */}
  <div className="flex flex-row items-center justify-center gap-2 md:gap-8 mb-8 relative">
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      <div className="h-[2px] w-full max-w-md bg-gray-200 rounded-full"></div>
    </div>
    
    <button
      onClick={() => setShow(true)}
      className={`
        relative z-10 text-lg md:text-xl font-medium py-3 px-6 md:px-8 
        rounded-full transition-all duration-300 text-[#826cb0]
        ${show ? 
          "bg-white shadow-lg border-2 border-[#826cb0] transform scale-105" : 
          "bg-transparent hover:bg-white/50"
        }
      `}
    >
      Top Rated
      {show && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#826cb0] rotate-45"></div>
      )}
    </button>

    <button
      onClick={() => setShow(false)}
      className={`
        relative z-10 text-lg md:text-xl font-medium py-3 px-6 md:px-8 
        rounded-full transition-all duration-300 text-[#826cb0]
        ${!show ? 
          "bg-white shadow-lg border-2 border-[#826cb0] transform scale-105" : 
          "bg-transparent hover:bg-white/50"
        }
      `}
    >
      Recommendations
      {!show && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#826cb0] rotate-45"></div>
      )}
    </button>
  </div>

  {/* Premium Carousel Section */}
  <div className="w-full max-w-7xl  sm:mt-[50px] relative">
    <div 
      ref={carouselRef}
      className="flex snap-x snap-mandatory overflow-x-auto w-full pb-8 scrollbar-hide"
    >
      {/* Left Spacer */}
      <div className="flex-shrink-0 w-[5vw] sm:w-[7vw] md:w-[8vw] lg:w-[10vw]"></div>

      {/* Carousel Items */}
      {[ND, GZ, HR].map((img, index) => (
        <div
          key={index}
          className="flex-shrink-0 snap-center mx-3 w-[85vw] sm:w-[55vw] md:w-[35vw] lg:w-[22vw] transition-transform duration-300 hover:scale-105"
        >
          <div className="relative group overflow-hidden rounded-xl shadow-xl">
            <img
              className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              src={img}
              alt={`Image ${index}`}
              loading="lazy"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-2">
                  {index === 0 ? "Noida" : index === 1 ? "Ghaziabad" : "Haryana"}
                </h3>
                <p className="text-amber-200 font-medium">Explore Properties</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Right Spacer */}
      <div className="flex-shrink-0 w-[5vw] sm:w-[7vw] md:w-[8vw] lg:w-[10vw]"></div>
    </div>

    {/* Navigation Dots (Optional) */}
    <div className="flex justify-center mt-6 space-x-2">
      {[ND, GZ, HR].map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-[#826cb0] w-6' : 'bg-gray-300'}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
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
