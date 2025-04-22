import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from "react-toastify";

const SignupUser = ({ setIsLogin, isOpen, isLogin }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const url = "https://finalbackend111.pythonanywhere.com/api/";

  const showSuccessToast = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "colored",
    });
  };
  
  const showErrorToast = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "colored",
    });
  };
  
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
  const sendVerification = async () => {
    const userExists =  await userPresent(phone);

    if (userExists.exists) {
      showErrorToast("User is Already Exit");
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
            console.log(verificationId)
            setCustomerId(verificationId);
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
 

  const dataadding = async () => {
    try {
      const res = await axios.post(`${url}users/`, {
        phone: phone,
        name: name,
      });
  
      if (res.status === 201 || res.status === 200) {
        localStorage.setItem("User", JSON.stringify(res.data));
        showSuccessToast("User created successfully!");
      } else {
        showErrorToast("User creation failed. Please try again.");
      }
  
      return res.data;
    } catch (error) {
      console.error("User creation error:", error);
      showErrorToast("Something went wrong while adding user.");
      throw error;
    }
  };
  

  
  
  const handleVerifyOTP = async () => {
    if (!name || !phone || !otp) {
      showErrorToast("All fields are required");
      return;
    }
  
    const { exists } = await userPresent(phone);
  
    if (exists) {
      showErrorToast("User already exists");
      return;
    }
  
    try {
      // Await OTP validation here
      const validateOTP = axios.post(`${url}validate_otp/`, {
        phone: phone.slice(2),
        verificationId: customerId,
        code: otp,
      });
  
      await toast.promise(
        validateOTP,
        {
          pending: "Verifying OTP...",
          success: "✅ OTP Verified!",
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
  
      // ✅ Call dataadding after successful OTP verification
      await dataadding();
  
      localStorage.setItem("User", JSON.stringify({ phone, name }));
      isOpen(false);
      window.location.reload();
  
      setPhone("");
      setOtp("");
      setCustomerId("");
    } catch (err) {
      console.error("OTP Verification Error:", err);
      showErrorToast("OTP verification failed. Please try again.");
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
  

  return (
    <div className="flex items-center justify-center bg-gray-100 relative">
      <div className="relative z-10 bg-white overflow-hidden max-w-md w-full p-6 rounded-lg shadow-lg">
        
        {/* Login/SignUp Switch */}
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

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(e) => setPhone(e)}
              inputClass="!w-full !py-2 !px-4"
              containerClass="!w-full"
              dropdownClass="!z-30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Verification Code</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {/* Action Buttons */}
          <button
            onClick={sendVerification}
            disabled={isDisabled}
            className={`w-full py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isDisabled ? `Wait ${timer}s` : "Send OTP"}
          </button>

          <button
            onClick={handleVerifyOTP}
            className="w-full py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-600 font-semibold"
            >
              Login instead
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupUser;
