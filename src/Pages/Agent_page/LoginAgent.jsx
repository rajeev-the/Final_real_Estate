import React,{useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const LoginAgent = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
    {/* Background with buildings overlay */}
    <div className="absolute inset-0 bg-black/50 z-0">
      <img 
        src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="City Background"
        className="w-full h-full object-cover  blur-sm "
      />
    </div>
  
    {/* Auth Container */}
    <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full mx-4">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Agent Portal</h1>
        <p className="text-white/90">Secure Property Management Access</p>
      </div>
  
      {/* Form Content */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Phone Authentication</h2>
        
        {/* Phone Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="border rounded-lg focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(e) => setPhone(e)}
              inputClass="!border-0 !ring-0 !w-full !py-3 !px-4"
              containerClass="!w-full"
              dropdownClass="!z-20"
            />
          </div>
        </div>
  
        {/* reCAPTCHA */}
        <div className="mb-6" id="recaptcha-container"></div>
  
        {/* OTP Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
          <input
            type="number"
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>
  
        {/* Action Buttons */}
        <div className="space-y-4">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Send OTP
          </button>
  
         <Link to={"/agent"}> <button   className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Verify OTP
          </button> </Link>
        </div>
  
        {/* Security Assurance */}
        <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span>Bank-level Security Encryption</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginAgent