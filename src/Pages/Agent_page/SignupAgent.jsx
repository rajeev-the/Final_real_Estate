import React,{useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link ,useNavigate } from "react-router-dom";
import axios from 'axios';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const SignupAgent = () => {
      const [phone, setPhone] = useState("");
      const [otp, setOtp] = useState("");
      const [name,setName] = useState("");
      const [estate,setEstate] = useState("");
     
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

    
    const userpresent = async (phone1) => {
      try {
        const res = await axios.get(`${url}agent/search-by-phone/?phone=${phone1}`);
        return res.data.exists;
      } catch (error) {
        if (error.response?.status === 404) {
          return false;
        }
        console.error("Error checking user presence:", error);
        return false;
      }
    };

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
     

      if (await userpresent(phone)) {
        showErrorToast("User already Exist")
        return;

      }


      const res2 = await validateOtp(phone.slice(2),cutomerid,otp)

      if(res2.data.responseCode !=200){
        showErrorToast("Incorrect OTP")
      }
    
    
      try {
        const res = await axios.post(`${url}agent/`, formData, {
          "headers": {
            'Content-Type': 'multipart/form-data',
          },
        });
       
    
        if (res.status === 200 || res.status === 201 &&  res2.responseCode === 200 ) {
          console.log("Registration successful");
          showSuccessToast("Agent is created")
          // Reset form states
          setName("");
          setEstate("");
          setPhone("");
          setOtp("");
         
          setSelectedLanguages([]);
          navigation("/agent");
        }
        else{
          showErrorToast( res.data.message);
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


      const validateOtp = async (phonei, verifi, ootp) => {
        try {
          const response = await toast.promise(
            axios.post(`${url}validate_otp/`, {
              phone: phonei,
              verificationId: verifi,
              code: ootp,
            }),
            {
              loading: "Verifying OTP...",
              success: (res) => {
                if (res.data.responseCode === 200) {
                  return "✅ OTP Verified!";
                } else {
                  throw new Error(res.data.message || "OTP verification failed");
                }
              },
              error: "❌ OTP Verification failed",
            }
          );
          return response.data;
        } catch (error) {
          console.error("OTP verification error:", error);
          return { responseCode: 400 };
        }
      };

const sendverification = async (e) => {
  e.preventDefault();

  const userExists = await toast.promise(userpresent(phone), {
    loading: "Checking user existence...",
    success: (exists) => {
      if (exists) throw new Error("User already exists!");
      return "Phone is available. Sending OTP...";
    },
    error: "Error checking user",
  });

  if (userExists) return;

  try {
    await toast.promise(
      axios.post(`${url}send-otp/`, { phone: phone.slice(2) }),
      {
        loading: "Sending OTP...",
        success: (res) => {
          if (res.data.responseCode === 200) {
            const verifed = res.data.data?.verificationId;
            setCustomerid(verifed);
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

            return "✅ OTP Sent!";
          } else {
            throw new Error("Unexpected response from OTP API");
          }
        },
        error: "❌ Failed to send OTP",
      }
    );
  } catch (error) {
    console.error("OTP send error:", error);
  }
};



  return (
<>

    {/* Form Content */}
    <div className="">
      <form className="space-y-4">
        {/* Grid for Name and Estate Name */}
        <div className="grid grid-cols-1 gap-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-3 h-3 text-red-500 ml-1"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z" />
  </svg></label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Estate Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-3 h-3 text-red-500 ml-1"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z" />
  </svg></label>
            <input
              type="text"
              placeholder="ABCD Properties"
              onChange={(e)=>setEstate(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-3 h-3 text-red-500 ml-1"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z" />
  </svg></label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">State   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-3 h-3 text-red-500 ml-1"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z" />
  </svg></label>
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
            <Link to="/login/agent" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Security Assurance */}
      
      </form>
    </div>
    </>   
 
  )
}

export default SignupAgent