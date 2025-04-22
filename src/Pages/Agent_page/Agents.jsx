import React from 'react'
import img1 from '../../assets/hary.png'
import img2 from '../../assets/Noida.png'
import img3 from '../../assets/gurgram.png'
import img4 from '../../assets/gz.png'
import img5 from '../../assets/RJ.png'
import BoxAgent from '../../componets/BoxAgent'
import main from "../../assets/pppp.jpg"


const Agents = () => {
    const data = [
        { image: img1, text: "Haryana" },
        { image: img3, text: "Uttar Pradesh" },
        { image: img2, text: "Punjab" },
        { image: img4, text: "Delhi" },
        {image: img5,text:"Rajasthan"}
      ];
  return (
    <div className='w-full min-h-screen md:h-[1200px] mt-16 md:mt-[60px] p-4 sm:p-5 rounded-xl md:rounded-2xl relative '>
    {/* Blurred Background Image */}
    <div 
        className="absolute inset-0 -z-0"
        style={{
            backgroundImage: `url(${main})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(4px)",
            transform: "scale(1.1)"
        }}
    >
        <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Content Container */}
    <div className="relative z-10 h-full">
        {/* Hero Section - Adjusted for mobile */}
        <div className="max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight">
  Find Your Perfect <br />
  Real Estate Strategist
</h1>

                <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300">
                    Connect with our network of trusted, professional real estate agents across India's top property markets.
                </p>
                <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition-colors duration-300">
                        Browse  Partners
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition-colors duration-300">
                      Partners Benefits
                    </button>
                </div>
            </div>
        </div>

        {/* Agents Grid - Responsive adjustments */}
        <div className="flex justify-center items-center  px-2 sm:px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10  ">
    {data.map((item, index) => (
      <BoxAgent 
        key={index} 
        image={item.image} 
        text={item.text} 
        className="scale-90 sm:scale-100"
      />
    ))}
  </div>
</div>

    </div>
</div>
  )
}

export default Agents