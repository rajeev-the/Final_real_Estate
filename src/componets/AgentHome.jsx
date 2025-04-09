import React from 'react'

const AgentHome = () => {
  return (
    <section className="bg-[#fdfaf5] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Sell or Lease Your Land
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Register to post your <br /> Land for{" "}
            <span className="bg-green-500 text-white px-2 py-1 rounded text-base align-middle">
              FREE
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
        
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold text-gray-900">10L+</p>
              <p className="text-sm text-gray-600">Land Listings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">45L+</p>
              <p className="text-sm text-gray-600">Monthly Searches</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2L+</p>
              <p className="text-sm text-gray-600">Owners advertise monthly</p>
            </div>
          </div>

          {/* CTA Button */}
          <button onClick={()=>window.open("/login/agent", '_blank')}  className="bg-[#1C2B2D] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-gray-600 transition">
            Post your Land for FREE
          </button>

          {/* WhatsApp */}
          <p className="mt-4 text-sm text-gray-800">
            Or post via{" "}
            <span className="inline-flex items-center gap-1 text-green-600 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2C6.48 2 2 6.48 2 12c0 1.82.48 3.51 1.34 5L2 22l5.11-1.33A9.962 9.962 0 0 0 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2zm.01 18c-1.62 0-3.13-.5-4.37-1.36l-.31-.21-3.03.79.81-2.96-.2-.31C4.9 14.91 4.4 13.5 4.4 12c0-4.22 3.43-7.65 7.65-7.65s7.65 3.43 7.65 7.65-3.43 7.65-7.65 7.65zm4.31-5.39c-.24-.12-1.42-.7-1.64-.77-.22-.08-.38-.12-.54.12s-.62.77-.76.93c-.14.15-.28.17-.52.06-.24-.12-1.02-.38-1.94-1.21-.72-.65-1.2-1.45-1.34-1.69-.14-.24-.01-.37.11-.49.12-.12.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.77-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.12.16 1.7 2.64 4.12 3.7.58.25 1.04.4 1.39.51.58.18 1.1.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
              </svg>
              WhatsApp
            </span>
            , send a “hi” to{" "}
            <span className="font-semibold text-gray-900">+91 7428197035</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://img.freepik.com/free-photo/young-couple-talking-their-insurance-agent-while-having-consultations-office_637285-849.jpg?t=st=1743933722~exp=1743937322~hmac=a39f12c096b99746ca5a3dc77cc2acb0607274f4cd891a1796221f8213e5801a&w=1380" // Replace with your own image URL if needed
            alt="Couple looking at laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AgentHome