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
      return !!response.data.exists;
    } catch (error) {
      if (error.response?.status === 404) return false;
      // console.error("Unexpected error checking user:", error);
      return false;
    }
  };

  const sendVerification = async () => {
    const phoneWithoutCode = phone.slice(2);
  
    if (!name || !phone) {
      showErrorToast("Please enter all required fields");
      return;
    }
  
    const exists = await toast.promise(userPresent(phone), {
      loading: "Checking user existence...",
      success: (exists) => {
        if (exists) throw new Error("User already exists");
        return "User not found. Sending OTP...";
      },
      error: "Error checking user",
    });
  
    try {
      await toast.promise(
        axios.post(`${url}send-otp/`, { phone: phoneWithoutCode }),
        {
          loading: "Sending OTP...",
          success: (res) => {
            if (res.data.responseCode === 200) {
              const verificationId = res.data.data?.verificationId;
              setCustomerId(verificationId);
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
              return "OTP sent successfully!";
            } else {
              throw new Error("Failed to send OTP");
            }
          },
          error: "Error sending OTP",
        }
      );
    } catch (err) {
      // Already handled by toast.promise
    }
  };
  
  const validateOtp = async () => {
    try {
      const res = await toast.promise(
        axios.post(`${url}validate_otp/`, {
          phone: phone.slice(2),
          verificationId: customerId,
          code: otp,
        }),
        {
          loading: "Verifying OTP...",
          success: (res) => {
            if (res.data.responseCode === 200) {
              return "✅ OTP Verified";
            } else {
              throw new Error(res.data.message || "OTP verification failed");
            }
          },
          error: "❌ OTP verification failed",
        }
      );
  
      return res.data.responseCode === 200;
    } catch {
      return false;
    }
  };
  
  const handleVerifyOTP = async () => {
    if (!name || !phone || !otp) {
      showErrorToast("All fields are required");
      return;
    }
  
    const exists = await toast.promise(userPresent(phone), {
      loading: "Checking user existence...",
      success: (exists) => {
        if (exists) throw new Error("User already exists");
        return "Proceeding with OTP validation...";
      },
      error: "Error checking user",
    });
  
    if (!exists) {
      const otpValid = await validateOtp();
      if (!otpValid) return;
  
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
  
        await toast.promise(
          axios.post(`${url}users/`, formData),
          {
            loading: "Creating account...",
            success: "✅ Account created successfully",
            error: "Failed to create account",
          }
        );
  
        localStorage.setItem("User", JSON.stringify({ name, phone }));
  
        // Reset
        setName("");
        setPhone("");
        setOtp("");
        setCustomerId("");
        isOpen(false);
        window.location.reload();
      } catch (error) {
        console.error("Signup error:", error);
      }
    }
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
              placeholder="Enter OTP"
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
