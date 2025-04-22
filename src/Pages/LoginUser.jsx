import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginUser = ({setIsLogin , isOpen , isLogin} ) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [cutomerid, setCustomerid] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  
  const url = "https://finalbackend111.pythonanywhere.com/api/";
    const userPresent = async (phone1) => {
      try {
        const response = await axios.get(`${url}users/search-by-phone/?phone=${phone1}`);
        
        if (response.data.exists) {
          return {
            exists: true,
            data: response.data.user, // User data if exists
          };
        } else {
          return {
            exists: false, // User doesn't exist
            data: null,
          };
        }
      } catch (error) {
        console.error("Error checking user:", error);
        return {
          exists: false,
          data: null,
        };
      }
    };
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!phone || phone.trim() === "") {
      showErrorToast("Please enter a valid phone number.");
      return;
    }
    const userExists = await  userPresent(phone);
   
    if (!userExists.exists) {
      showErrorToast("Phone number not found!");
      return;
    }
  
   
    const validateOTP = axios.post(`${url}validate_otp/`, {
      phone: phone.slice(2),
      verificationId: cutomerid,
      code: otp,
    });
  
    toast.promise(
      validateOTP,
      {
        pending: "Verifying OTP...",
        success: {
          render({ data }) {
            localStorage.setItem("User", JSON.stringify(userExists.data));

            isOpen(false);
            window.location.reload();
            return "✅ OTP Verified!";
          },
        },
        error: {
          render({ data }) {
            return `❌ Verification failed: ${
              data.response?.data?.message || data.message
            }`;
          },
        },
      },
      {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      }
    );
  
    try {
      await validateOTP;
      setPhone("");
      setOtp("");
      setCustomerid("");
    } catch (err) {
      console.error("OTP Validation Error:", err);
    }
  };
  
  const sendverification = async () => {
    const userExists =  await userPresent(phone);

    if (!userExists.exists) {
      showErrorToast("Phone number not found!");
      return;
    }

    const sendOTP = axios.post(`${url}send-otp/`, {
      phone: phone.slice(2),
    });
  
    toast.promise(
      sendOTP,
      {
        pending: "Sending OTP...",
        success: {
          render({ data }) {
            const verificationId = data.data?.data?.verificationId;
            setCustomerid(verificationId);
            startTimer();
            return "OTP sent successfully!";
          },
        },
        error: {
          render({ data }) {
            return `Failed to send OTP: ${data.response?.data?.message || data.message}`;
          },
        },
      },
      {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      }
    );
  
    try {
      const response = await sendOTP;
      return response;
    } catch (error) {
      console.error("OTP Send Error:", error);
    }
  };
  
  const startTimer = () => {
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
  };
  
  const showSuccessToast = (data) => {
    toast.success(data, {
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
  
  return (
    <div className=" flex items-center justify-center bg-gray-100 relative">
      
  

    {/* Auth Container */}
    <div className="relative z-10 bg-white  overflow-hidden max-w-md w-full ">
    

      {/* Form Content */}
      <div className="">
     
      <div className="flex justify-center mb-4">
          <div className="bg-[#36383D] rounded-full flex w-[300px]">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 rounded-full text-white font-bold transition-all ${
                isLogin ? "bg-[#D65F00] shadow-lg" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 rounded-full text-white font-bold transition-all ${
                !isLogin ? "bg-[#D65F00] shadow-lg" : ""
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        
        {/* Phone Input */}
        <div className="mb-6">
          <label className="block text-sm   font-medium mb-2">Phone Number <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-3 h-3 text-red-500 ml-1"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z" />
  </svg> 
  
  </label>
          <div className="block mb-1 font-medium">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(e) => setPhone(e)}
             
              inputClass="!w-full !py-2 !px-4"
              containerClass="!w-full"
              dropdownClass="!z-30"
            />
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="mb-6" id="recaptcha-container"></div>

        {/* OTP Input */}
        <div >
          <label className="block  mb-1 font-medium">Verification Code </label>
          <input
            type="number"
           placeholder="Enter 4-digit OTP"
            className="w-full px-4 py-2 border rounded-lg"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mt-4">
        <button
      onClick={sendverification}
      disabled={isDisabled}
      className={`w-full py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
       {isDisabled ? `Wait ${timer}s` : "Send OTP"}
   
    </button>

       
    <button
  onClick={handleSubmit}
  className="w-full py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition flex items-center justify-center gap-2"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <span>Verify OTP</span>
</button>

         
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          Don't have an account?{' '}
          <button 
            onClick={() => setIsLogin(false)}
            className="text-blue-600 font-semibold"
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