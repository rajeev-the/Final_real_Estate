import React from 'react'
import { Link } from 'react-router-dom'
import Agnet from "../assets/Agnets.jpeg"
import User from "../assets/User.jpeg"
import { UserIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import mmm from "../assets/desktop-banner.jpeg"

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
    {/* Blurred Background Image */}
    <div 
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `url(${mmm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "blur(8px)",
        transform: "scale(1.1)"
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  
    {/* Content Container */}
    <div className="relative bg-white/90 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl text-center w-full max-w-md mx-4 border border-gray-200/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gray-700/10 blur-xl"></div>
      
      {/* Icons with animation */}
      <div className="flex justify-center space-x-8 mb-8 relative z-10">
        <div className="relative group">
          <img 
            src={User} 
            alt="User Icon" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md border-4 border-white/80 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-100" 
          />
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2  bg-[#826CB0] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            User
          </span>
        </div>
        <div className="relative group">
          <img 
            src={Agnet} 
            alt="Agent Icon" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md border-4 border-white/80 transition-all duration-300 group-hover:scale-110 group-hover:border-gray-200" 
          />
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Agents
          </span>
        </div>
      </div>
  
      {/* Title with subtle animation */}
      <div className="mb-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 transition-all duration-500 hover:text-gray-800">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-base sm:text-lg font-light">
          Select your login portal below
        </p>
      </div>
  
      {/* Enhanced buttons with hover effects */}
      <div className="space-y-4 sm:space-y-5 relative z-10">
        <Link 
          to={"/"} 
          className="block w-full py-3 px-4 sm:py-3.5 sm:px-6 bg-[#826CB0] text-white rounded-xl text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:from-blue-700 hover:to-blue-800 active:scale-95"
        >
          <div className="flex items-center justify-center space-x-2">
            <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>User Portal</span>
          </div>
        </Link>
        
        <Link 
          to={"agent"} 
          className="block w-full py-3 px-4 sm:py-3.5 sm:px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:from-gray-900 hover:to-gray-950 active:scale-95"
        >
          <div className="flex items-center justify-center space-x-2">
            <BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Agent Portal</span>
          </div>
        </Link>
      </div>
  
      {/* Subtle footer */}
      <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8 relative z-10">
        Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
      </p>
    </div>
  </div>
  )
}

export default Login