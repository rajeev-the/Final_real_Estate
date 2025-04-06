import React from 'react'

const Reviewsection = () => {

   const reviews = [
    {
      id: 1,
      quote: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Celia Almeda",
      role: "Secretary",
      initials: "CA"
    },
    {
      id: 2,
      quote: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Nat Reynolds",
      role: "Chief Accountant",
      initials: "NR"
    },
    {
      id: 3,
      quote: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Bob Roberts",
      role: "Sales Manager",
      initials: "BR"
    }
  ];

  return (
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2B2D] text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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