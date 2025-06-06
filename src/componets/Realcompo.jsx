import React from 'react'

const Realcompo = () => {
    const services = [
        {
          title: "Land Acquisition",
          description: "Expert guidance through property selection, cost analysis, and legal processes for secure land purchases.",
          cta: "Find an Agent",
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        },
        {
          title: "Land Sales",
          description: "Comprehensive sales strategies and market analysis to maximize your property's value.",
          cta: "Explore Options",
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Land Lease",
          description: "Streamlined leasing solutions with transparent terms and digital management tools.",
          cta: "View Listings",
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          )
        }, {
          title: "Joint Venture Structuring",
          description: "Assess development potential and structure JVs tailored to objectives including capital appreciation or development partnerships.",
          cta: "Explore Advisory",
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
        {
          title: "Land Advisory & Paper Consultancy",
          description: "Expert support for all your land documents, due diligence, and legal paperwork.",
          cta: "Explore Advisory",
          icon: (
            <svg  className="w-6 h-6 text-white"  fill="none" stroke="currentColor" viewBox="0 0 24 24 ">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6M9 16h6M9 8h6M4 6h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
          </svg>
          
          )
        },
        {
          title: "Government Liaison & CLU Approvals",
          description: "  Government Liaison & CLU Approvals Navigate zoning, CLU (Change of Land Use), and local authority approvals with ease.",
          cta: "Explore Advisory",
          icon: (
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shield Outline */}
            <path
              d="M12 2L4 5v6c0 5.55 3.84 10.74 8 11 4.16-.26 8-5.45 8-11V5l-8-3z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Checkmark */}
            <path
              d="M9 13l2 2 4-4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
          
          )
        },
      ];
    
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="text-center mb-10">

             <div className="  bg-gradient-to-r from-white via-[#fff4ec] to-[#fff0e6] rounded-2xl shadow-lg px-6 sm:px-10 py-2 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
  {/* Title Section */}
  <div className="flex items-center gap-3 mb-4 sm:mb-0">
    <div className="w-2 h-10 bg-[#D65F00] rounded-full"></div>
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C2B2D] tracking-tight">
       Our <span className="text-[#D65F00]">Services</span>
    </h2>
  </div>
  </div>
     
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#1C2B2D]/20"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#1C2B2D] rounded-lg mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
            <div className="mt-6">
             
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Realcompo