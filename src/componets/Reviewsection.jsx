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
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2B2D] text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <span className="text-[#4B2E83] text-4xl font-bold">“</span>
                <p className="text-[#1C2B2D] text-base sm:text-lg leading-relaxed mb-4">
                  {review.quote}
                </p>
                <span className="text-[#4B2E83] text-4xl font-bold float-right">”</span>
              </div>
              
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-12 h-12 rounded-full bg-[#4B2E83] flex items-center justify-center text-white">
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