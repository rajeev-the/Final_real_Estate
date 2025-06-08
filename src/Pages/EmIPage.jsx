import React from 'react'
import HomeEmiCalculator from '../componets/HomeEmiCalculator '
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons

const EmIPage = () => {
  return (
 <>
  <div
    style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}
    className="min-h-screen mt-[100px] rounded-sm bg-white"
  >
    {/* Main Content Container */}
    <div className="px-4 sm:px-20 md:px-[120px] sm:mt-10 mt-5">
    
      
       <div  className="border-t   border-b border-yellow-400 py-4 px-0 flex  justify-start items-start sm:items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
        <h2   className="text-xl sm:text-2xl  font-bold text-[#1C2B2D]">
          EMI Calculator
        </h2>
    

      </div>
     

      {/* SIP Calculator Section - Centered and Bounded */}
      <div className="max-w-4xl mt-[20px] mx-auto">
        <HomeEmiCalculator/>
      </div>
    </div>
  </div>
</>
  )
}

export default EmIPage