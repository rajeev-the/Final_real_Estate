// components/LoginModal.jsx

import React, { useState } from 'react';
import LoginUser from '../Pages/LoginUser';
import SignupUser from '../Pages/SignupUser';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
    <div className="relative bg-white  p-8 rounded-2xl w-full max-w-md animate-fadeIn">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-500   hover:text-gray-800 dark:hover:text-red-500 text-2xl"
        onClick={onClose}
        aria-label="Close modal"
      >
        ✕
      </button>
  
      {/* Form Content */}
      {isLogin ? <LoginUser isOpen={onClose} isLogin={isLogin} setIsLogin={setIsLogin} /> : <SignupUser  isLogin={isLogin} isOpen={onClose} setIsLogin={setIsLogin} />}
    </div>
  </div>
  
  );
};

export default LoginModal;
