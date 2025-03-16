import React from 'react'
import { Link } from 'react-router-dom'
import Agnet from "../assets/Agnets.jpeg"
import User from "../assets/User.jpeg"

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
    <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-300">
      {/* User & Agent Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <img src={User} alt="User Icon" className="w-20 h-20 rounded-full shadow-lg hover:scale-105 transition transform duration-300" />
        <img src={Agnet} alt="Agent Icon" className="w-20 h-20 rounded-full shadow-lg hover:scale-105 transition transform duration-300" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">Welcome Back</h2>
      <p className="text-gray-600 mb-6">Choose your login method</p>

      {/* Buttons */}
      <div className="space-y-4">
        <Link to={"/home"} className="block w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg text-lg font-semibold shadow-md transition transform hover:scale-105 hover:shadow-lg">
          User Login
        </Link>
        <Link to={"agent"} className="block w-full py-3 px-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg text-lg font-semibold shadow-md transition transform hover:scale-105 hover:shadow-lg">
          Agent Login
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Login