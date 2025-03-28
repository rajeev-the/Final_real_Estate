import React from 'react'
import { Link } from 'react-router-dom'


const BoxAgent = ({ image, text }) => {

    

    
  return (
    <Link to={`/agents/${text}`} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center w-full sm:w-64 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="w-40 h-40  md:h-20 md:w-20 flex items-center justify-center">
      <img src={image} alt={text} className="object-contain w-full h-full" />
    </div>
    <p className="text-lg font-semibold text-[#826CB0] mt-4">{text}</p>
  </Link>
  )
}

export default BoxAgent