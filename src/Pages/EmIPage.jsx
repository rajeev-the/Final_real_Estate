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
         <svg
    className="w-10 h-10 text-orange-500"
    fill="none"
    stroke="orange"
   strokeWidth="2"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
>
    <rect x="8" y="8" width="32" height="32" rx="4" ry="4" stroke="orange" strokeWidth="2" fill="none"/>
    <rect x="12" y="12" width="24" height="6" fill="none" stroke="orange" strokeWidth="2"/>
    <circle cx="14" cy="24" r="2" fill="orange"/>
    <circle cx="22" cy="24" r="2" fill="orange"/>
    <circle cx="30" cy="24" r="2" fill="orange"/>
    <circle cx="14" cy="32" r="2" fill="orange"/>
    <circle cx="22" cy="32" r="2" fill="orange"/>
    <circle cx="30" cy="32" r="2" fill="orange"/>
</svg>

        <h2   className="text-xl sm:text-2xl  font-bold text-[#1C2B2D]">
          EMI Calculator
        </h2>
    

      </div>
     

      {/* SIP Calculator Section - Centered and Bounded */}
      <div className="max-w-4xl mt-[20px] mx-auto">
        <HomeEmiCalculator/>
        <div className="mt-16 rounded-xl p-6 shadow-md">
  <h2 className="text-xl font-bold text-gray-800 mb-4">What is an EMI Calculator?</h2>
  <p className="text-gray-600 mb-3">
    An EMI (Equated Monthly Installment) calculator helps you determine the monthly repayment amount for loans. 
    It allows you to calculate your EMI based on the loan amount, interest rate, and repayment tenure.
  </p>
  <p className="text-gray-600">
    By adjusting the parameters, you can visualize how different loan terms impact your monthly payments, 
    enabling better financial planning and loan management.
  </p>
</div>
      </div>
      
    </div>
  </div>
</>
  )
}

export default EmIPage