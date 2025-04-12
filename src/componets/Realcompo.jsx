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
        }
      ];
    
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
           <span className="text-[#1C2B2D]">Real Estate Serivce</span> 
        </h2>
        
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
              <button className="flex items-center gap-2 text-sm font-semibold text-[#1C2B2D] hover:text-black transition-colors">
                {service.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Realcompo