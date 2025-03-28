import React from 'react'
import img1 from '../../assets/hary.png'
import img2 from '../../assets/Noida.png'
import img3 from '../../assets/gurgram.png'
import img4 from '../../assets/gz.png'
import BoxAgent from '../../componets/BoxAgent'
import main from "../../assets/pppp.jpg"


const Agents = () => {
    const data = [
        { image: img1, text: "Harayana" },
        { image: img3, text: "Gurugram" },
        { image: img2, text: "Noida" },
        { image: img4, text: "Ghaziabad" },
      ];
  return (
    <div className='w-full h-[890px] mt-[100px] sm:p-5 rounded-2xl relative overflow-hidden'>
    {/* Blurred Background Image */}
    <div 
        className="absolute inset-0 -z-0"
        style={{
            backgroundImage: `url(${main})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(8px)",
            transform: "scale(1.1)" // Prevents edge artifacts from blur
        }}
    >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Content Container with z-index to appear above blurred background */}
    <div className="relative z-10 h-full">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Find Your Perfect Agent
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                    Connect with our network of trusted, professional real estate agents across India's top property markets.
                </p>
                <div className="mt-10 flex gap-4">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                        Browse Agents
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                        Agent Benefits
                    </button>
                </div>
            </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {data.map((item, index) => (
                <BoxAgent key={index} image={item.image} text={item.text} />
            ))}
        </div>
    </div>
</div>
  )
}

export default Agents