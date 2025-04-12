import React from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = ({margin}) => {   
  return (
  
    <div  className={`min-h-screen mt-[${margin}px] flex items-center justify-center bg-gray-50`}>
    {/* Contact Container - Wider Version */}
    <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl w-full mx-4">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-[#826cb0] to-[#a291c2] p-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-white/90">We're here to assist you</p>
      </div>
  
      {/* Form Content */}
      <div className="p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:border-[#826cb0] focus:ring-1 focus:ring-[#826cb0] transition-colors"
              />
            </div>
  
            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="border rounded-lg focus-within:border-[#826cb0] focus-within:ring-1 focus-within:ring-[#826cb0] transition-colors">
                <PhoneInput
                  country={"in"}
                  inputClass="!border-0 !ring-0 !w-full !py-3 !px-4"
                  containerClass="!w-full"
                  dropdownClass="!z-20"
                />
              </div>
            </div>
          </div>
  
          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:border-[#826cb0] focus:ring-1 focus:ring-[#826cb0] transition-colors"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-[#826cb0] to-[#9b85c5] hover:from-[#7359a0] hover:to-[#826cb0] text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Send Message
          </button>
  
          {/* Contact Information */}
          <div className="mt-8 space-y-4 text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <svg className="w-6 h-6 text-[#826cb0] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
  
              <div className="p-4 bg-purple-50 rounded-lg">
                <svg className="w-6 h-6 text-[#826cb0] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p className="text-sm text-gray-600">support@landsathi.com</p>
              </div>
  
              <div className="p-4 bg-purple-50 rounded-lg">
                <svg className="w-6 h-6 text-[#826cb0] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="text-sm text-gray-600">Mumbai, India</p>
              </div>
            </div>
          </div>
  
          {/* Security Assurance */}
          <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[#826cb0]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Bank-level Security Encryption</span>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ContactUs