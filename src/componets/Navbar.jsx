// Navbar.jsx
import { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoimg from '../assets/logoo.jpg';
import { useGSAP  } from "@gsap/react"; 
import gsap from "gsap";


const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); 
  const boxRef = useRef(null);
  const [activeuser, setActiveUser] = useState(data ? false : true);
  const navigation = useNavigate();
  const itemsRef = useRef([]);
  const secondRef = useRef();
  const thridref = useRef()
  useGSAP(() => {
    const tl = gsap.timeline();
  
    // Animate the Navbar (always runs on mount)
    tl.from(boxRef.current, { 
      y: -100, 
      opacity: 1, 
      duration: 1, 
      ease: "expo.out" 
    });
  
    // Animate Navigation Items (only when menu is open)
    if (isOpen) {
      tl.fromTo(
        itemsRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
      );
    }
  
    // Animate Profile/Login Section
    if (thridref.current) {
      tl.fromTo(
        thridref.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out" }
      );
    }
  
    // Animate Logo
    if (secondRef.current) {
      tl.fromTo(
        secondRef.current,
        { opacity: 0, scale: 1 },
        { opacity: 1, y: 0, duration: 1, scale: 1, stagger: 0.1, ease: "expo.out" }
      );
    }
  
  }, [isOpen]);
  
  // ✅ Runs only on component mount

  const handleLogout =()=>{
    
      localStorage.removeItem("User")
      showInfoToast("Logout Successful")
      navigation("/login")
  
    
  }
  const showInfoToast = (message) => {
      toast.info(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    };
  

  return (
    <nav ref={boxRef} className="fixed top-0 left-0 w-full z-50 bg-black py-2 px-6 md:px-12 flex justify-between items-center">
    {/* Logo */}
    <div>
      <img 
        ref={secondRef} 
        src={logoimg} 
        alt="Real Estate Logo" 
        className="sm:h-15 sm:w-15 h-12 w-12 rounded-md border-2 border-[#4B2E83]" 
      />
    </div>
  
    {/* Right Section: Navigation + Login/Profile + Mobile Button */}
    <div className="flex-1 flex justify-end items-center space-x-6">
      {/* Navigation Links - Hidden on Small Screens */}
      <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
        {[
          { name: "Home", link: "/" },
          { name: "Land Listing", link: "landlist" },
          { name: "Agents", link: "agents" },
          { name: "Contact Us", link: "contact" },
        ].map((item, index) => (
          <Link
            ref={(el) => (itemsRef.current[index] = el)}
            key={item.name}
            to={item.link}
            onClick={() => setActive(item.name)}
            className={`relative px-4 py-2 transition duration-300 ease-in-out rounded-2xl ${
              active === item.name
                ? "bg-[#4B2E83] text-white shadow-lg"
                : "text-white hover:text-[#4B2E83]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
  
      {/* Login / User Profile */}
     {/* Login / User Profile - Hidden on Mobile */}
{/* Login / User Profile - Hidden on Mobile */}
{/* Login / User Profile - Hidden on Mobile */}
{activeuser ? (
  <Link
    ref={thridref}  // Attach ref to this element instead
    to={"/login"}
    className="bg-[#4B2E83] hidden sm:flex text-white px-6 py-2 rounded-lg font-medium border-2 border-[#4B2E83] transition-colors hover:bg-white hover:text-[#4B2E83]"
  >
    Log In
  </Link>
) : (
  <Tooltip
    title={
      <div className="p-4 space-y-2 bg-white rounded-lg shadow-lg">
        <li className="pb-2 text-[#4B2E83] list-none">
          {data.user ? data.user.name : data.name}
        </li>
        <button
          onClick={handleLogout}
          className="mt-2 bg-[#4B2E83] text-white px-4 py-2 rounded-lg w-full transition-colors hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    }
  >
    <button
      ref={thridref} // Attach ref here instead of inside Tooltip content
      className="border-2 border-[#4B2E83] hidden sm:flex p-2 rounded-lg transition-colors hover:bg-[#4B2E83]"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </button>
  </Tooltip>
)}


  
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white transition-colors hover:text-[#4B2E83]"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  
    {/* Mobile Menu - Now Placed at the End */}
    {isOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-[#000000] shadow-lg p-4 flex flex-col items-center space-y-4">
        {[
          { name: "Home", link: "/" },
          { name: "Land Listing", link: "landlist" },
          { name: "Agents", link: "agents" },
          { name: "Contact Us", link: "contact" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.link}
            onClick={() => {
              setActive(item.name);
              setIsOpen(false);
            }}
            className={`w-full text-center py-2 text-white hover:bg-black/20 rounded-lg transition-colors ${
              active === item.name ? "bg-black/30" : ""
            }`}
          >
            {item.name}
          </Link>



          
        ))}
        {activeuser ? (
      <Link
        to="/login"
        onClick={() => setIsOpen(false)}
        className="w-full text-center py-2 text-white bg-[#4B2E83] hover:bg-[#3a2166] rounded-lg transition-colors"
      >
        Log In
      </Link>
    ) : (
      <button
        onClick={() => {
          handleLogout();
          setIsOpen(false);
        }}
        className="w-full text-center py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
      >
        Logout
      </button>
    )}


      </div>
    )}
  </nav>
  
  );
};

export default Navbar;