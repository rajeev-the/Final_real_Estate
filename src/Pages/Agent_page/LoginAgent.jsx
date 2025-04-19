import React,{useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';
import SignupAgent from './SignupAgent';
const faqData = [
  {
    question: "What are advantages of taking owner subscription?",
    answer: (
      <>
        <p className="mb-3">
          Among a lot of benefits, the foremost one is there is no boundation on number of listings that a person can do. Moving forward, here are some unique features -
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>10X More Visibility</li>
          <li>Unlimited Enquiries on Your Property</li>
          <li>20 Matching Buyers Leads on Similar Properties</li>
          <li>Relationship Manager (RM) Assistance</li>
          <li>Assisted Listing Access</li>
          <li>Buyer Verification (Litigation Report)</li>
          <li>Recent Registered Transactions in your Project/Locality</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the total price of the owner plan?",
    answer: "The total price depends on the plan you choose. We offer flexible pricing to suit your needs. Please check our pricing section for more details.",
  },
  {
    question: "Is Post Property as an owner, free?",
    answer: "Yes, posting a property as an owner is absolutely free. However, premium services may have additional charges.",
  },
  {
    question: "Will I get genuine/interested clients, even after posting a free property?",
    answer: "Yes, we work to connect you with serious and verified buyers, even with free listings.",
  },
  {
    question: "What modes of payment are possible to buy owner subscription?",
    answer: "You can pay via Credit/Debit Cards, UPI, Netbanking, or Wallets like Paytm, PhonePe, etc.",
  },
];


const LoginAgent = () => {
  const [phone, setPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [LoginIn ,setLoginIn] = useState(true)
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const [otpcheck, setOtpCheck] = useState(true);
  const navigation = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
    const[cutomerid ,setCustomerid] = useState("")
  const url = "https://finalbackend111.pythonanywhere.com/api/"
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.trim() === "") {
        showErrorToast("Please enter a valid phone number.");
        return;
    }

    try {
        const res = await axios.get(`${url}agent/search-by-phone/?phone=${encodeURIComponent(phone)}`);
       

        const res2 = await validateOtp(phone.slice(2),cutomerid,otp)
      

        if(res.status !=200){
          showErrorToast("Signup User Not Exist")
          return;
        }

        if (res.status === 200  && res2.responseCode === 200 ) {
            localStorage.setItem("Agent", JSON.stringify(res.data.agent))
            showSuccessToast("Successfully Logged In");
            navigation("/agent");
        }
        else{
          showErrorToast(res.data.message );
        }
    } catch (error) {
       

        if (error.response) {
            if (error.response.status === 400) {
                showErrorToast("Invalid phone number format. Please try again.");
            } else if (error.response.status === 404) {
                showErrorToast("User not found! Please enter a valid phone number.");
            } else {
                showErrorToast(error.response.data?.error || "An unexpected error occurred.");
            }
        }
    }
};
const validateOtp = async (phonei,verifi,ootp) => {
  try {
    const response = await axios.post(`${url}validate_otp/`, {
      phone: phonei,
      verificationId: verifi, // from send-otp response
      code: ootp           // user-entered OTP
    });
    return response.data;
   showSuccessToast('✅ OTP Verified:', response.message)
  } catch (error) {
    showErrorToast('❌ Verification failed:',  error.message);
  }
};
 
const sendverification = async () => {
  try {
    const response = await axios.post(`${url}send-otp/`, {
      phone: phone.slice(2),
    });

    if (response.data.responseCode === 200) {
      const verifed = response.data.data?.verificationId;
      console.log(verifed)
      console.log(response.data.data)
    
      setCustomerid(verifed);

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
       console.log(response.data)
    }
  } catch (err) {
    console.error("OTP send error:", err);
    showErrorToast("Failed to send OTP", err.message);
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


  return (
    <>
    {/* Hero Section */}
    <div className="min-h-screen bg-[#1F2563] flex items-center justify-center px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto gap-10 md:gap-16 items-center">
        {/* Left Side */}
        <div className="text-white text-center md:text-left p-4 md:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Post Your Land With Us <br /> Online for <span className="text-green-400">FREE</span>
          </h1>
  
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
            <div className="bg-green-200 text-black p-5 sm:p-6 rounded-xl w-full sm:w-56 text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1">Land Sold</div>
              <div className="text-lg">100<strong>+</strong> Acres</div>
            </div>
            <div className="bg-blue-200 text-black p-5 sm:p-6 rounded-xl w-full sm:w-56 text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1">Land Leased</div>
              <div className="text-lg">200<strong>+</strong>Acres</div>
            </div>
          </div>
  
          <div className="text-lg font-semibold mt-4">On</div>
          <div className="text-2xl font-bold mt-1">Landsathi</div>
        </div>
  
        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8">

          <div className="flex flex-col items-center justify-center mb-2
 relative">
  <div className="bg-[#36383D] p-1 mb-3 rounded-full flex items-center w-[220px] md:w-[300px] lg:w-[320px]">
    <button
      onClick={() => setLoginIn(true)}
      className={`w-1/2 py-3 text-sm md:text-xl font-bold transition-all duration-300 rounded-full ${
        LoginIn
          ? "bg-[#D65F00] text-white shadow-lg"
          : "text-white"
      }`}
    >
      Login
    </button>

    <button
      onClick={() => setLoginIn(false)}
      className={`w-1/2 py-3 text-sm md:text-xl font-bold transition-all duration-300 rounded-full ${
        !LoginIn
          ? "bg-[#D65F00] text-white shadow-lg"
          : "text-white"
      }`}
    >
      Sign Up
    </button>
  </div>
</div>
              {
                   LoginIn ?      <div>
                   <div className="mb-6">
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
                       className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                       onChange={(e)=>setOtp(e.target.value)}
                     />
                   </div>
         
                   {/* Buttons */}
                   <div  className="space-y-4">
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
                       onClick={handleSubmit}
                       className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                     >
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                       Verify OTP
                     </button>
                   </div>
         
                   <div className="mt-4 text-center">
                     <p className="text-gray-600">
                       Don't have an account?{" "}
                       <Link to="/signup/agent" className="text-blue-600 font-semibold hover:underline">
                         Sign Up
                       </Link>
                     </p>
                   </div>
       
                   </div> :<SignupAgent/>


              }



  
            <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Bank-level Security Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* How to Post Section */}
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">How to post to get the most?</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Selling/renting property is no more a challenge with Square Yards. Renting / Selling a house has become easy with the internet and easier with us! We will handle the process of selling your property from start to finish.
      </p>
  
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            img: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
            title: "Show off your Land",
            desc:
              "Sign up or log in and create a free ad post with pictures, video, and other info like type, price, size, location, etc.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
            title: "Land Proposal",
            desc:
              "Attract buyers/renters by listing key advantages and benefits they may want to avail of.",
          },
          {
            img: "https://cdn-icons-png.flaticon.com/512/2038/2038854.png",
            title: "Needful Negotiations",
            desc:
              "Inspect, negotiate, and seal the deal yourself. Do not under-price your property!",
          },
        ].map((item, idx) => (
          <div className="flex flex-col items-center text-center px-4" key={idx}>
            <img src={item.img} alt={item.title} className="w-20 h-20 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  
    {/* FAQ Section */}
    <section className="py-16 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <img src="https://cdn-icons-png.flaticon.com/512/4825/4825038.png" alt="FAQ" className="h-16 w-16 mb-4" />
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        </div>
  
        <div className="bg-white shadow-xl rounded-xl">
          {faqData.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none font-medium text-lg hover:bg-gray-50"
              >
                <span className="text-gray-800">{item.question}</span>
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  
  )
}

export default LoginAgent