import React, { useEffect, useState,useRef } from "react";
import UP from "../assets/UP.jpg";
import PN from "../assets/PN.png";
import HR from "../assets/HR.jpeg";
import DL from "../assets/DL.jpg"
import LandCard from "../componets/LandCard"
import {useAppContext } from "../Context/Poperty_context"
import { Link } from "react-router-dom";
import xxxp from "../assets/xxxp.mp4";
import CityCard from "../componets/CityCard";
import Realcompo from "../componets/Realcompo"
import Blogs  from "../componets/Blogs "
import { useGSAP } from "@gsap/react"; 
import gsap from "gsap";
import  AgentHome  from "../componets/AgentHome";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons

import Reviewsection from "../componets/Reviewsection"
import SerachFilter from "../componets/SerachFilter";

const Home = ({agent}) => {
  const [show, setShow] = useState(true);
  const[data,setdata] = useState([])
 
  const { property  } = useAppContext();
  const [selectedLocation, setSelectedLocation] = useState("Haryana");
  const carouselRef = useRef(null);
  const resvideo = useRef()
  const seoref = useRef(null);
  const searchcart = useRef(null);
  const [active, setActive] = useState("top-rated");
  const navigator  = useNavigate()
  
  // Ref for the cities section
 







  
  useGSAP(() => {
    
    const t2 = gsap.timeline();
   
  t2.
    fromTo(
      resvideo.current,
    { opacity: 0, y: -50 ,  },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      delay:2.6
    }
  ).fromTo(
    seoref.current,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0
    },
    "<+=0.5" // Start 0.5s after previous animation
  ).fromTo(
    searchcart.current,
    { opacity: 0, y: -100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    
    },
    "<+=0.5" // Start 0.5s after previous animation
  ).fromTo(
    seoref.current,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    },
    "<+=0.5" // Start 0.5s after previous animation
  )

  }, []);


 

  useEffect(() => {
 
  setdata(property.filter((et)=>et.state == selectedLocation))

 
 


  }, [selectedLocation,property])

  const cities = [
     { name: "HARYANA", image:HR, bg: "bg-gradient-to-t from-orange-800 to-red-300" },
    { name: "PUNJAB", image:PN, bg: "bg-gradient-to-t from-purple-900 to-blue-300" },
    { name: "Uttar Pradesh", image: UP, bg: "bg-gradient-to-t from-yellow-600 to-amber-300" },
   
    { name: "Delhi", image:DL, bg: "bg-gradient-to-t from-green-700 to-teal-300" }
  ];
  


  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  const shuffledData = shuffleArray(data || []).slice(0, 4);





  const locations = ["Haryana", "Delhi", "Punjab", "Uttar pradesh", "Rajasthan"];
 

  return (
    <>
      {/* Top Header Bar */}
{/* 
       {
        agent ?  <div className="w-full h-16 sm:h-[102px] bg-[#826CB0] relative z-0"></div> :<></>

      } */}
     

      {/* Main Content */}
      <div className={`min-h-screen  w-full relative bg-white   ${agent  ?  " mt-[50px] sm:mt-[70px]": " "}`} >
      <div className="h-[400px] sm:h-[650px] w-full flex justify-center items-center overflow-hidden relative">




<video  loading="lazy"  ref={resvideo} className="w-full h-full object-cover"  src={xxxp}
 autoPlay 
 loop 
 muted 
 playsInline

></video>


  <SerachFilter searchcart={searchcart} />

</div>



        <div  ref={seoref} className="flex flex-col items-center px-4 py-8 bg-gradient-to-b from-white to-gray-50">
  {/* Premium Toggle Buttons (unchanged) */}
  <div className="flex flex-col items-center justify-center sm:mt-10 md:mb-14 relative">
      <div className="bg-[#36383D] dark:bg-[#36383D] p-1 mb-3 rounded-full flex items-center w-[220px] md:w-[300px] lg:w-[320px]">
        <button
          onClick={() => setActive("top-rated")}
          className={`w-1/2 py-3 text-sm md:text-xl font-medium transition-all duration-300 rounded-full ${
            active === "top-rated"
              ? "bg-[#D65F00] text-white shadow-lg"
              : "text-white"
          }`}
        >
          Top Rated
        </button>

        <button
          onClick={() => setActive("suggestions")}
          className={`w-1/2 py-3 text-sm md:text-xl font-medium transition-all duration-300 rounded-full ${
            active === "suggestions"
              ? "bg-[#D65F00] text-white shadow-lg"
              : " text-white "
          }`}
        >
          Suggestions
        </button>
      </div>

      {/* Subtle Background Divider */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>
    </div>



{ 
  active === "suggestions" ? (
    <div className="overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-2 gap-4 p-4 md:flex md:flex-nowrap md:gap-6 md:justify-start md:items-center min-w-min">
    {shuffledData.map((e, i) => (
      <Link 
        to={`/Land/${e.id}`} 
        key={e.id}
        className="md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"  
      >  
        <LandCard 
          acre={e.land_size} 
          address={e.address} 
          acre_price={e.land_price}  
          img={e.img}  
        /> 
      </Link>
    ))}
</div>
</div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 p-3">
      {cities.map((city, index) => (
        <CityCard  key={index} {...city} />
      ))}
    </div>
  )
}


</div>


        {/* Hot Selling Lands Section */}
        <div  className="flex flex-col gap-4 md:gap-[40px] w-full sm:mt-[85px] mt-[50px] max-w-7xl mx-auto  sm:mb-[100px]">
        
          
          <h2 className="sm:text-4xl text-2xl  font-bold text-center text-[#1C2B2D] mb-5"  style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}>  Hot Selling Lands in India</h2>

         {/* Location Buttons */}
<div className="flex flex-wrap justify-center gap-3 md:gap-8 lg:gap-20 mb-6">
  {locations.map((name, index) => (
    <button
   
      key={index}
      onClick={() => setSelectedLocation(name)}
      className={`  text-sm md:text-lg font-medium py-1  px-3   md:px-8 rounded-full transition-all duration-300 
        ${
          selectedLocation === name
            ? "bg-[#D65F00] text-white shadow-lg scale-105"
            : "  bg-[#36383D]    hover:text-xl text-[white]   "
        }`}
    >
      {name}
    </button>
  ))}
</div>

          {/* Land Cards Carousel */}
          <div className="overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-2 gap-4 p-4 md:flex md:flex-nowrap md:gap-6 md:justify-start md:items-center min-w-min">
    {data?.slice(0, 4).map((e, i) => (
      <Link 
        to={`/Land/${e.id}`} 
        key={e.id}
        className="md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"  
      >  
        <LandCard 
          acre={e.land_size} 
          address={e.address} 
          acre_price={e.land_price} 
          Unit_of_land ={e.unit_of_land}
          Money_unit = {e.money_unit}
          img={e.img}  
        /> 
      </Link>
    ))}
</div>






</div>
<button
  onClick={() => navigator('/landlist')}
  className="w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs mx-auto 
             bg-gradient-to-br from-[#1c2b2d] to-[#2a4a4d] text-[#f0f3f5] 
             px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg font-medium shadow-lg 
             hover:shadow-xl hover:bg-gradient-to-br hover:from-[#243739] 
             hover:to-[#2a4a4d] transition-all duration-300 group relative 
             border-2 border-[#30494b] overflow-hidden"
>
  <div className="absolute inset-0 bg-noise-pattern opacity-10 pointer-events-none"></div>
  <div className="flex items-center justify-center gap-2 relative">
    <span style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="font-playfair text-sm sm:text-base tracking-wide">
      Explore All
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
        className="stroke-gradient-to-r from-[#9ab7b9] to-[#c2d4d6]"
      />
    </svg>
  </div>
  <div className="absolute inset-0 border-t-2 border-[#5c7a7d] opacity-30 pointer-events-none"></div>
</button>





    <Realcompo/>
     <AgentHome/>
       <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="min-h-screen    rounded-sm  bg-gray-50  ">
         <div className="border-t border-b border-yellow-400 py-4 px-6 flex justify-between items-center">
      <h2 className="sm:text-3xl  text-2xl    font-bold text-[#1C2B2D] ">knowledge hub</h2>
      <Link to={"/blog"} className="flex items-center gap-2 border border-blue-900 text-blue-900 px-4 py-2 rounded-full hover:bg-blue-50 transition">
        View More
        <FiArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
    
      <Blogs />
    </div>

    <Reviewsection/>
    
        </div>
      </div>
    </>
  );
};

export default Home;
