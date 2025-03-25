import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoimg from '../assets/logoo.jpg';

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); 
  const [activeuser, setActiveUser] = useState(data ? false : true);
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("User");
    showInfoToast("Logout Successful");
    setActiveUser(true);
    navigation("/login");
  };

  
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
    <>
    <nav className=" fixed top-0 left-0 w-full z-50 bg-white  rounded-b-lg  py-2 px-6 md:px-12 flex justify-between items-center  " >
      {/* Logo Section */}
      <div>
        <img src={logoimg} alt="Real Estate Logo" className="h-15 w-15" />
      </div>

      {/* Desktop Menu & Login Button (Pushed to the End) */}
      <div className="flex-1 flex justify-end items-center space-x-14">
      <ul className="hidden md:flex space-x-14 text-black font-normal" style={{ fontFamily: "Krub, sans-serif" }}>
        {[
          { name: "Home", link: "/" },
          { name: "Land List", link: "landlist" },
          { name: "Agents", link: "agents" },
          { name: "Contact Us", link: "contact" },
        ].map((item) => (
            <Link
            key={item.name}
            to={item.link}
            onClick={() => setActive(item.name)}
            className={`relative cursor-pointer pb-2 transition duration-300 ${
              active === item.name ? "text-black" : ""
            }`}
          >
            {item.name}
            {active === item.name && (
              <span className="absolute left-0 bottom-0 w-full h-1 border-b-3 border-[#826CB0] rounded-lg "></span>
            )}
          </Link>
        ))}
      </ul>
        {/* Login Button */}
        {   activeuser ? (
            <Link
              to={"/login"}
              className="border-2 border-[#826CB0] px-10 py-2 rounded-lg text-black font-medium"
            >
              LogIn
            </Link>
          ) : (
            <Tooltip
              title={
                <ul className="p-4 space-y-2">
                  <li className="pb-2">{data.user.name}</li>
                  <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </ul>
              }
            >
              <button className="border-2   border-[#826CB0] p-2 rounded-lg  mr-2 sm:mr-0">
                <svg className="sm:w-6 sm:h-6  w-4 h-4  " fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </button>
            </Tooltip>
          )
        
        }
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col items-center space-y-4 md:hidden">
          <Link to={"/"}  className="text-gray-700">Home</Link>
          <Link  to={"landlist"} className="text-gray-700">Land List</Link>
          <Link to={"agents"} className="text-gray-700">Agents</Link>
         
          <Link  to={"contact"}className="text-gray-700">Contact Us</Link>
          
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
