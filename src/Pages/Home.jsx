import React, { useEffect, useState } from "react";
import desktopBanner from "../assets/desktop-banner.jpeg";
import ND from "../assets/ND.jpeg";
import GZ from "../assets/GZ.jpeg";
import HR from "../assets/HR.jpeg";
import LandCard from "../componets/LandCard"
import {useAppContext } from "../Context/Poperty_context"
import { Link } from "react-router-dom";
import xxxp from "../assets/xxxp.mp4"

const Home = ({agent}) => {
  const [show, setShow] = useState(true);
  const[data,setdata] = useState([])
  const { property } = useAppContext();
  const [selectedLocation, setSelectedLocation] = useState("Noida");
  
 

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

            {/* Tab Content */}

              {/* Image Cards - Wider desktop version */}
   
     
              <div className="relative w-full">
  {/* Carousel Container */}
  <div className='flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4 md:gap-6 w-full pb-6 px-4 sm:px-6'>
    {[ND, GZ, HR].map((img, index) => (
      <div 
        key={index}
        className='snap-center min-w-[85vw] xs:min-w-[70vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[25vw] h-[180px] xs:h-[220px] sm:h-[280px] md:h-[350px] rounded-xl md:rounded-2xl flex-shrink-0 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg overflow-hidden'
      >
        <img 
          className='h-full w-full object-cover hover:scale-105 transition-transform duration-500'
          src={img}
          alt={`Featured Property ${index + 1}`}
          loading="lazy"
        />
        {/* Optional overlay with text */}
       
      </div>
    ))}
  </div>

  {/* Scroll hint for mobile */}
  <div className="md:hidden flex justify-center mt-2">
    <div className="w-8 h-1.5 bg-gray-300 rounded-full"></div>
  </div>
</div>

   

          </div>
        </div>

        {/* Hot Selling Lands Section */}
        <div className="flex flex-col gap-4 md:gap-[40px] w-full sm:mt-[110px] mt-[50px] max-w-7xl mx-auto  sm:mb-[100px]">
          <h1 className="text-center text-xl   font-medium sm:text-3xl text-black"   style={{ fontFamily: "Krub, sans-serif" }} >
            Hot Selling Lands in India
          </h1>

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

        </div>
      </div>
    </>
  );
};

export default Home;
