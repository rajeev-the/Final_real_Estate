import React,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';

const SignupUser = ({setIsLogin , isOpen}) => {
    const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email,setemail] = useState("")
const [otp, setOtp] = useState("");
  const[cutomerid ,setCustomerid] = useState("")


  const url = "https://finalbackend111.pythonanywhere.com/api/"

// OTP handlers
const handleSendOTP = () => {
  // Implement OTP sending logic
 
};

const userpresent = async (phone1) => {
  try {
    const res1 = await axios.get(
      `${url}users/search-by-phone/?phone=${phone1}`
    );
    return res1.data.exists; // Returns true if user exists
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false; // User does not exist
    }
    console.error("Error checking user presence:", error);
    return false; // Return false in case of other errors
  }
};

const validateOtp = async (phonei, verifi, ootp) => {
  try {
    const response = await axios.post(`${url}validate_otp/`, {
      phone: phonei,
      verificationId: verifi, // from send-otp response
      code: ootp           // user-entered OTP
    });

   showSuccessToast('✅ OTP Verified:', response.message)
   return response;
  } catch (error) {
    showErrorToast('❌ Verification failed:', error.response?.data || error.message);
    throw error;
  }
};

const sendverification = async () => {
  try {
    const response = await axios.post(`${url}send-otp/`, {
      phone: phone.slice(2),
    });

    if (response.responseCode === 200) {
      setCustomerid(response.data.verificationId)

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
      showErrorToast("Unexpected response", response.data);
    }
  } catch (err) {
    console.error("OTP send error:", err);
    showErrorToast("Failed to send OTP", err.message);
  }
};

const handleVerifyOTP =async () => {
  // Implement OTP verification and registration
 
  if (await userpresent(phone)) {
    console.log("User already exists");
    return;
  }
  
try {


let formData = new FormData();
formData.append("name", name);
formData.append("phone", phone);
formData.append("email",email);

const res = await axios.post(`${url}users/`, formData);
const res2 = await validateOtp(phone.slice(2),cutomerid,otp)

  if(res.status == 201 && res2.responseCode === 200){
 
    localStorage.setItem("User", JSON.stringify(res.data));
    isOpen(false)
    name("");
    phone("")
    email("")
    otp("")
    window.location.reload();

  }
  else{
    showErrorToast(res2.message || res.data.message);
  }
  
} catch (error) {
  if (error.response) {
   console.log("An error occurred. Please try again.");}
  
}
 
};
  return (
    <div className=" flex items-center justify-center bg-gray-100 relative">
    {/* Background with buildings overlay */}
  
  
    {/* Auth Container */}
    <div className="relative z-10 bg-white  overflow-hidden max-w-md w-full ">
      {/* Form Header */}
      

    
      {/* Form Content */}
      <div className="">
      <h1 className="text-3xl font-bold text-black mb-2">User Signup</h1>
        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              value={name}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
  
          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="border rounded-lg focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 transition-colors">
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
  
          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
            <input
              type="number"
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
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
  
            <button 
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              onClick={handleVerifyOTP}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Create Account
            </button>
          </div>
  
          {/* Login Link */}
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={()=> setIsLogin(true)} 
              className="text-teal-600 hover:text-teal-800 font-semibold"
            >
              Login instead
            </button>
          </div>
  
          {/* Security Assurance */}
          
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignupUser