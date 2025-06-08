import React from 'react'
import RERAProjectFinder from '../componets/RERAProjectFinder'

const RERA = () => {
  return (
  <>
  <div
    style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}
    className="min-h-screen mt-[100px] bg-white"
  >
    {/* Main Content Container */}
    <div className="px-4 sm:px-8 md:px-[120px] mt-5">

        <div  className="border-t   border-b border-yellow-400 py-4 px-0 flex  justify-start items-start sm:items-center gap-4">
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

        <h2   className="text-xl sm:text-2xl  font-bold text-[#1C2B2D]">
                  RERA Project Finder
        </h2>
    

      </div>
     
    

      {/* Tool/Component */}
      <div className="max-w-5xl mx-auto">
        <RERAProjectFinder />
      </div>
    </div>
  </div>
</>

  )
}

export default RERA