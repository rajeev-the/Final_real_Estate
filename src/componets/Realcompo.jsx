import React from 'react'

const Realcompo = () => {
    const services = [
        {
          title: "Buy a Property ",
          description: "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
          cta: "Find a local agent",
          icon: (
            <svg className="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        },
        {
          title: "Sell a  Property",
          description: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
          cta: "See your options",
          icon: (
            <svg className="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Rent a  Property",
          description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
          cta: "Find rentals",
          icon: (
            <svg className="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          )
        }
      ];
    
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-normal text-center text-black mb-12"  style={{ fontFamily: "Krub, sans-serif" }}>Real Estate Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-[#826CB0] rounded-full mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-[#826CB0] mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <div className="text-center">
                <button className="px-6 py-2 bg-[#826CB0] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 border-2 border-transparent hover:border-amber-200">
                  {service.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Realcompo



