import React from 'react'
import { Link } from 'react-router-dom'


const BoxAgent = ({ image, text }) => {

    

    
  return (
    <Link 
    to={`/agents/${text}`} 
    className="bg-white rounded-xl shadow-sm  border border-gray-100 p-6 flex flex-col items-center w-full sm:w-64 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
  >
    {/* Image container with elegant frame */}
    <div className="w-40 h-40 rounded-full bg-gray-50 p-1 border-2 border-gray-200 group-hover:border-[#826CB0] transition-colors duration-300 flex items-center justify-center overflow-hidden">
      <img 
        src={image} 
        alt={text} 
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  
    {/* Text content with refined typography */}
    <div className="mt-6 text-center">
      <p className="text-xl font-medium text-gray-800 group-hover:text-[#826CB0] transition-colors duration-300">
        {text}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Certified Real Estate Agent
      </p>
    </div>
  
    {/* Subtle hover indicator */}
    <div className="mt-4 flex items-center">
      <span className="text-sm text-[#826CB0] font-medium">View Profile</span>
      <svg 
        className="w-4 h-4 ml-1 text-[#826CB0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </Link>
  )
}

export default BoxAgent