import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginUser = ({setIsLogin , isOpen}) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const[cutomerid ,setCustomerid] = useState("")
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
 

 
  const url = "https://finalbackend111.pythonanywhere.com/api/"

  const handleSubmit = async (e) => {

    e.preventDefault();
  

    if (!phone || phone.trim() === "") {
      showErrorToast("Please enter a valid phone number.");
      return;
  }


 

    try {
      const res = await axios.get(
        `${url}users/search-by-phone/?phone=${encodeURIComponent(phone)}`
      );
      console.log(res)
      console.log( phone.slice(2) , res.data.verificationId , otp)
      const res2 = await validateOtp(phone.slice(2) , res.data.verificationId , otp);
  
      if (res.status === 200 && res2.responseCode === 200 ) {
      
        localStorage.setItem("User", JSON.stringify(res.data));
        showSuccessToast("User Login Successful");
        
         // Navigate only if the response is valid
        isOpen(false)
        window.location.reload();
      }
      else{
        showErrorToast(res2.message || res.data.message);
      }
      
      // Clearing input fields
      setPhone("");  
      setOtp("");
      setCustomerid("");
  
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          
          showErrorToast("User not found! Please enter a valid phone number.");
        } else {
          
          showErrorToast("An error occurred. Please try again.");
        }
      } else {
       
        showErrorToast("Network error. Please check your connection.");
      }
    }
  };

  const validateOtp = async (phonei, verifi, ootp) => {
    try {
      const response = await axios.post(`${url}validate_otp/`, {
        phone: phonei,
        verificationId: verifi,
        code: ootp,
      });
  
      showSuccessToast("✅ OTP Verified");
      return response.data;
    } catch (error) {
      showErrorToast(
        "❌ Verification failed: " + (error.response?.data?.message || error.message)
      );
      return { responseCode: 400 }; // fallback error response
    }
  };
  
  
  const showSuccessToast = (data) => {
    toast.success(data , {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
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
        autoClose: 3000, // Closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };

    
    const sendverification = async () => {
      try {
        const response = await axios.post(`${url}send-otp/`, {
          phone: phone.slice(2),
        });
    
        if (response.data.responseCode === 200) {
          setCustomerid(response.data.verificationId);
          showSuccessToast("OTP sent!");
          setIsDisabled(true);
          setTimer(60);
    
          const countdown = setInterval(() => {
            setTimer((prev) => {
              if (prev <= 1) {
                clearInterval(countdown);
                setIsDisabled(false);
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        } else {
          showErrorToast("Unexpected response: " + response.data.message);
        }
      } catch (err) {
        console.error("OTP send error:", err);
        showErrorToast("Failed to send OTP: " + err.message);
      }
    };
  return (
    <div className=" flex items-center justify-center bg-gray-100 relative">
      
  

    {/* Auth Container */}
    <div className="relative z-10 bg-white  overflow-hidden max-w-md w-full ">
    

      {/* Form Content */}
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login In</h2>
        
        {/* Phone Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="border rounded-lg focus-within:border-coral-500 focus-within:ring-1 focus-within:ring-coral-500 transition-colors">
            <PhoneInput
              country={"in"}
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
            className="w-full px-4 py-3 border rounded-lg focus:border-coral-500 focus:ring-1 focus:ring-coral-500 transition-colors"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
        <button
      onClick={sendverification}
      disabled={isDisabled}
      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 
      hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg 
      font-semibold transition-all flex items-center justify-center gap-2
      ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      {isDisabled ? `Wait ${timer}s` : "Send OTP"}
    </button>

       
            <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Verify OTP
            </button>
         
        </div>

        {/* Sign Up Link */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => setIsLogin(false)}
            className="text-[#FF6F61] hover:text-[#FF4638] font-semibold transition-colors"
          >
            Sign Up
          </button>
        </div>

        {/* Security Assurance */}
        
      </div>
    </div>
  </div>
  )
}

export default LoginUser