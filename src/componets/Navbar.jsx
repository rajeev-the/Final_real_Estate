import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoimg from '../assets/logoo.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); // Default active menu

  return (
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
          { name: "Map Service", link: "/" },
          { name: "Agents", link: "agents" },
          { name: "Contact Us", link: "/" },
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
        <Link  to={"/login"}  style={{ fontFamily: "Krub, sans-serif" }} className="    transform transition duration-300 ease-in-out hover:scale-105  hidden md:block border-2 border-[#826CB0] px-10 py-2 rounded-lg text-black  font-medium">
          LogIn
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col items-center space-y-4 md:hidden">
          <a  href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Land List</a>
          <a href="#" className="text-gray-700">Agents</a>
          <a href="#" className="text-gray-700">Map Service</a>
          <a href="#" className="text-gray-700">Contact Us</a>
          <button className="border border-gray-500 px-4 py-2 rounded-lg text-gray-700">
            LogIn
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
