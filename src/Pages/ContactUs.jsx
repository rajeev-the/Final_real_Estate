import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = 'service_b25yvj8';
const TEMPLATE_ID = 'template_mvyl40w';
const PUBLIC_KEY = 'ToYWVFzTB9B4el9Bf';


const ContactUs = ({ margin }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
   const showSuccessToast = (message) => {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
  
    const showErrorToast = (message) => {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log(result.text);
      showSuccessToast('Message sent successfully!');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showErrorToast('Failed to send message.');
    }
  };

  return (
    <div className={`min-h-screen mt-[${margin}px] flex items-center justify-center bg-gray-50`}>
      <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl w-full mx-4">
        <div className="bg-gradient-to-r from-[#D65F00] to-[#FF8C42] p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-white/90">We're here to assist you</p>
        </div>

        <div className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:border-[#826cb0] focus:ring-1 focus:ring-[#826cb0] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="border rounded-lg focus-within:border-[#826cb0] focus-within:ring-1 focus-within:ring-[#826cb0] transition-colors">
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass="!border-0 !ring-0 !w-full !py-3 !px-4"
                    containerClass="!w-full"
                    dropdownClass="!z-20"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:border-[#D65F00] focus:ring-1 focus:ring-[#FF8C42] transition-colors"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#D65F00] to-[#FF8C42] hover:from-[#D65F00] hover:to-[#FF8C42] text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
