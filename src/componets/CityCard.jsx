import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ name, image, bg }) => {
  return (
    <div className="w-full h-48 sm:h-80"> {/* Reduced height */}
      <div className="relative group overflow-hidden rounded-xl shadow-xl w-full h-full">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
          loading="lazy"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-lg sm:text-2xl font-bold mb-1">
              {name}
            </h3>
            <Link to={'/landlist'} className="text-amber-200 text-xs sm:text-base font-medium hover:text-white flex items-center gap-1">
              Explore 
              <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityCard