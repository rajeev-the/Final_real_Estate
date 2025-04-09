import React from 'react';

const JointVentureStructuring = () => {
  const whatWeOffer = [
    {
      title: "Strategic JV Advisory",
      content: "Assess development potential and structure JVs tailored to objectives including capital appreciation or development partnerships."
    },
    {
      title: "Financial & Revenue Structuring",
      content: "Build balanced models for cost-sharing, revenue splits, and risk mitigation with clear exit plans."
    },
    {
      title: "Legal & Compliance Support",
      content: "End-to-end legal handling including JDAs, MoUs, due diligence, and regulatory approvals."
    },
    {
      title: "Developer & Investor Matching",
      content: "Leverage our network to connect with right partners across real estate segments."
    },
    {
      title: "Full-Cycle JV Management",
      content: "Complete lifecycle management from feasibility studies to post-deal support."
    }
  ];

  const whyChoose = [
    "Nationwide land intelligence and execution capabilities",
    "Specialized in emerging industrial/urban corridors",
    "Trusted by institutional developers and HNWIs",
    "Compliance-first approach to partnerships"
  ];

  const idealFor = [
    "Landowners wanting to monetize without selling",
    "Developers seeking expansion without upfront acquisition",
    "Investors targeting strategic project entry"
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Joint Venture Structuring
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {whatWeOffer.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#1C2B2D]"
            >
              <h3 className="text-xl font-semibold text-[#1C2B2D] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Landsathi.com?</h3>
            <ul className="space-y-4">
              {whyChoose.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ideal For</h3>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointVentureStructuring;