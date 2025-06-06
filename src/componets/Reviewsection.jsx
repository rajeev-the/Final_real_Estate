import React from 'react'

const Reviewsection = () => {

   const reviews = [
    {
      id: 1,
      quote: "Landsathi made land scouting unbelievably easy. Within minutes, I had a short list of verified plots with all key details. It’s like having a real estate expert in your pocket.",
      name: "Rohit Sharma,",
      role: "Real Estate Investor",
      initials: "RS"
    },
    {
      id: 2,
      quote: "Thanks to Landsathi, we found a perfect land parcel for our warehouse project without wasting weeks on field visits. Their ground intel and clarity saved us time and money.",
      name: " Ajay Goyal",
      role: " Industrial Developer",
      initials: "AG"
    },
    
    {
      id: 3,
      quote: "Being an NRI, it’s tough to trust land listings from afar. Landsathi gave me transparency and visuals of the site without me being in India. I closed a deal confidently, remotely.",
      name: "Ruchil Bansal, NRI Investor",
      role: " NRI Investor, Dubai",
      initials: "BR"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-2">
      <div className="max-w-7xl mx-auto">
       
          <div className=" mb-5 bg-gradient-to-r from-white via-[#fff4ec] to-[#fff0e6] rounded-2xl shadow-lg px-6 sm:px-10 py-2 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
  {/* Title Section */}
  <div className="flex items-center gap-3 mb-4 sm:mb-0">
    <div className="w-2 h-10 bg-[#D65F00] rounded-full"></div>
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C2B2D] tracking-tight">
      What Our Users <span className="text-[#D65F00]">Say</span>
    </h2>
  </div>
  </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <span className="text-[#D65F00] text-4xl font-bold">“</span>
                <p className="text-[#1C2B2D] text-base sm:text-lg leading-relaxed mb-4">
                  {review.quote}
                </p>
                <span className="text-[#D65F00] text-4xl font-bold float-right">”</span>
              </div>
              
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-12 h-12 rounded-full bg-[#D65F00] flex items-center justify-center text-white">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#1C2B2D]">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
   
  
  )
}

export default Reviewsection