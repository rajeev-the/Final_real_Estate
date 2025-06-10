// ExploreTools.js
import React from 'react';
import { 
  FaSearch, 
  FaCalculator, 
  FaChartLine, 
  FaExchangeAlt, 
  FaFileSignature, 
  FaHome 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ExploreTools = () => {
  const tools = [
    {
      id: 1,
      title: "RERA Search 71",
      description: "Access detailed information about real estate projects registered under the Real Estate Regulatory Authority (RERA).",
      icon: <FaSearch className="text-xl" />,
      color: "bg-blue-500",
      link:"/rera"
    },
    
    {
      id: 3,
      title: "SIP Calculator",
      description: "Systematic Investment Plan calculator tool helps investors estimate the potential returns of their SIP investments over a specified period.",
      icon: <FaChartLine className="text-xl" />,
      color: "bg-purple-500",
      link:"/sip "

    },
    
   
    {
      id: 4,
      title: "EMI Calculator",
      description: "Stamp duty and registration charges are crucial taxes that a homebuyer must pay to city authorities to register a property under their name.",
      icon: <FaCalculator className="text-xl" />,
      color: "bg-indigo-500",
      link:"/emi"
    }
  ];

return (
    <div className=" py-2  px-4">
        <div className="max-w-7xl  mx-auto">
         
            <div className=" mb-5 bg-gradient-to-r from-white via-[#fff4ec] to-[#fff0e6] rounded-2xl shadow-lg px-6 sm:px-10 py-2 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
  {/* Title Section */}
  <div className="flex items-center gap-3 mb-4 sm:mb-0">
    <div className="w-2 h-10 bg-[#D65F00] rounded-full"></div>
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C2B2D] tracking-tight">
       Explore <span className="text-[#D65F00]">Tools</span>
    </h2>
  </div>
  </div>

            <div  style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="grid   mb-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {tools.map(tool => (
                    <Link
                        key={tool.id}
                        to={tool.link}
                        className={`p-12 rounded-lg shadow-md ${tool.color} text-white transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer`}
                    >
                        <div className="flex items-center mb-4">
                            {tool.icon}
                            <h3 className="ml-3 text-xl font-bold">{tool.title}</h3>
                        </div>
                        <p className=" text-normal">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);
};

export default ExploreTools;