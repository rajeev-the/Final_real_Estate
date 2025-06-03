import React from 'react'
import backgoundImage from '../assets/xlblogbanner.jpg'; // Adjust the path as necessary
import SipCalculator from '../componets/SipCalculator';

const SIPPage = () => {
  return (
<>
  <div
    style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}
    className="min-h-screen mt-[100px] rounded-sm bg-white"
  >
    {/* Main Content Container */}
    <div className="px-4 sm:px-12 md:px-[120px] sm:mt-10 mt-5">
      {/* Header Centered Responsively */}
      <div className="flex justify-center items-center gap-3 text-center mb-2">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM16 7H8m0 4h8m-4 4h4m-8 0h.01"
          />
        </svg>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C2B2D] tracking-tight">
          SIP Calculator
        </h2>
      </div>

      {/* SIP Calculator Section - Centered and Bounded */}
      <div className="max-w-4xl mx-auto">
        <SipCalculator />
      </div>
    </div>
  </div>
</>

  )
}

export default SIPPage