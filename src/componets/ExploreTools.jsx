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

const ExploreTools = () => {
  const tools = [
    {
      id: 1,
      title: "RERA Search 71",
      description: "Access detailed information about real estate projects registered under the Real Estate Regulatory Authority (RERA).",
      icon: <FaSearch className="text-xl" />,
      color: "bg-blue-500"
    },
    
    {
      id: 3,
      title: "SIP Calculator",
      description: "Systematic Investment Plan calculator tool helps investors estimate the potential returns of their SIP investments over a specified period.",
      icon: <FaChartLine className="text-xl" />,
      color: "bg-purple-500"
    },
    
   
    {
      id: 4,
      title: "Home Loan EMI",
      description: "Stamp duty and registration charges are crucial taxes that a homebuyer must pay to city authorities to register a property under their name.",
      icon: <FaHome className="text-xl" />,
      color: "bg-indigo-500"
    }
  ];

return (
    <div className="bg-gray-50 py-2  px-4">
        <div className="max-w-6xl  mx-auto">
           <h2 className="sm:text-4xl text-2xl p-6  mb-6 font-bold text-center text-[#1C2B2D] "  style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}>
           Explore Tools
        </h2>
            <div  style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="grid   mb-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {tools.map(tool => (
                    <div
                        key={tool.id}
                        className={`p-12 rounded-lg shadow-md ${tool.color} text-white transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer`}
                    >
                        <div className="flex items-center mb-4">
                            {tool.icon}
                            <h3 className="ml-3 text-xl font-bold">{tool.title}</h3>
                        </div>
                        <p className=" text-normal">{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default ExploreTools;