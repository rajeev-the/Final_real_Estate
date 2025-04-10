import React,{useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link ,useNavigate } from "react-router-dom";
import axios from 'axios';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from 'antd';


const SignupAgent = () => {
      const [phone, setPhone] = useState("");
      const [otp, setOtp] = useState("");
      const [name,setName] = useState("");
      const [estate,setEstate] = useState("");
      const [file,setFile] = useState(null);
      const [state,setState] = useState();
      const [selectedLanguages, setSelectedLanguages] = useState([]);
      const [checkuser , setCheckuser] = useState(false)
       const[cutomerid ,setCustomerid] = useState("")
       const [isDisabled, setIsDisabled] = useState(false);
       const [timer, setTimer] = useState(0);
      
      const navigation = useNavigate()
      const url = "https://finalbackend111.pythonanywhere.com/api/"
     

      const handleLang = (lang) => (event) => {
        if (event.target.checked) {
          setSelectedLanguages([...selectedLanguages, lang]); // Add language to list
        } else {
          setSelectedLanguages(selectedLanguages.filter((l) => l !== lang)); // Remove if unchecked
        }
    }

    const handleSign = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append('name', name);
      formData.append('estate_name', estate);
      formData.append('phone_number', phone);
      formData.append('language', JSON.stringify(selectedLanguages));
      formData.append('state', state ); // Assuming state is a string from dropdown
      formData.append('verifications', false); // Default to false as per model
      formData.append('rating', 0.5); // Send as string to match FloatField
      
      if (file) {
        formData.append('img', file);
      }
    
      try {
        const res = await axios.post(`${url}agent/`, formData, {
          "headers": {
            'Content-Type': 'multipart/form-data',
          },
        });
        const res2 = await validateOtp(phone.slice(2),cutomerid,otp)
    
        if (res.status === 200 || res.status === 201 && res2.responseCode === 200 ) {
          console.log("Registration successful");
          showSuccessToast("Agent is created")
          // Reset form states
          setName("");
          setEstate("");
          setPhone("");
          setOtp("");
          setFile(null);
          setSelectedLanguages([]);
          navigation("/agent");
        }
        else{
          showErrorToast(res2.message || res.data.message);
        }

        localStorage.setItem("Agent", JSON.stringify(res.data));
      } catch (error) {
        console.error("Error Response:", error.response?.data || error);
        showErrorToast(error.response?.data)
      }
    };

     const showSuccessToast = (data1) => {
        toast.success(data1 , {
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

      
const validateOtp = async (phonei,verifi,ootp) => {
  try {
    const response = await axios.post(`${url}/api/validate_otp/`, {
      phone: phonei,
      verificationId: verifi, // from send-otp response
      code: ootp           // user-entered OTP
    });

   showSuccessToast('✅ OTP Verified:', response.message)
  } catch (error) {
    showErrorToast('❌ Verification failed:', error.response?.data || error.message);
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




  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 relative ">
  {/* Background with buildings overlay */}
  <div className="absolute inset-0 bg-black/50 z-0">
    <img 
      src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="City Background"
      className="w-full h-full object-cover blur-sm"
    />
  </div>

  {/* Auth Container - Wider version */}
  <div className="relative z-10 bg-white mt-2 mb-3 rounded-2xl shadow-2xl overflow-hidden max-w-xl w-full mx-4 sm:mx-6 md:mx-8">
    {/* Form Header */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
      <h1 className="text-3xl font-bold text-white mb-2">Agent Registration</h1>
      <p className="text-white/90">Create Your Professional Account</p>
    </div>

    {/* Form Content */}
    <div className="p-6 sm:p-8">
      <form className="space-y-4">
        {/* Grid for Name and Estate Name */}
        <div className="grid grid-cols-1 gap-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Estate Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estate Name</label>
            <input
              type="text"
              placeholder="Prime Properties"
              onChange={(e)=>setEstate(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="border rounded-lg focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
          <PhoneInput
  country="in"
  value={phone}
  onChange={setPhone}
  inputClass="!border-0 !ring-0 !w-full !py-3 !px-4"
  containerClass="!w-full"
  dropdownClass="!z-20"
/>

          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
          <div className="flex items-center justify-center w-full">
         
            <label className="flex flex-col w-full border-2 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="flex flex-col items-center justify-center py-4 sm:py-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span className="mt-2 text-sm text-gray-600" >  {  file  ?  file.name  : "Upload profile photo" }</span>
              </div>
              <input 
  type="file"  
  onChange={(e) => {
    console.log("Selected File:", e.target.files[0]); // Debugging
    setFile(e.target.files[0]);
  }} 
  className="hidden" 
/>

            </label>
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Languages Known</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {['English', 'Hindi'].map((lang) => (
              <label key={lang} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                <input type="checkbox" onChange={handleLang(lang)}   checked={selectedLanguages.includes(lang)} className="rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        {/* State Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
          <select value={state} onChange={(e)=>setState(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
            <option value="">Select your state</option>
            {['Haryana', 'Uttar pradesh', 'Delhi','Punjab'].map((state) => (
              <option   key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* OTP Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
            <input
              type="number"
              placeholder="Enter 6-digit OTP"
              onChange={(e)=>setOtp(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={sendverification}    disabled={isDisabled}
      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 
      hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg 
      font-semibold transition-all flex items-center justify-center gap-2
      ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      {isDisabled ? `Wait ${timer}s` : "Send OTP"}
            </button>
            <button onClick={handleSign} className="w-full sm:w-1/2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all">
              Register
            </button>
       
          </div>
        </div>

        {/* Existing Account Link */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Security Assurance */}
        <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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

export default SignupAgent