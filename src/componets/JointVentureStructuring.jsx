import React from 'react';

const JointVentureStructuring = () => {
    const services = [
        {
          title: "Joint Venture Structuring",
          description: "Assess development potential and structure JVs tailored to objectives including capital appreciation or development partnerships.",
          cta: "Explore Advisory",
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
       
       
       
      ];

 

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Joint Venture Structuring
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
};

export default JointVentureStructuring;