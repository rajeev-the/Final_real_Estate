import React,{useState} from 'react'
import {UserOutlined} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import {Tooltip} from "antd"
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AgentNavbar = () => {

const data = JSON.parse(localStorage.getItem("Agent"))

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Place useNavigate here

  const handlelogout =()=>{
    localStorage.removeItem("Agent")
    showInfoToast("Logout Successful")
    navigate("/login")

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
    

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>          

    <nav className="bg-gray-600 p-4 sm:pb-5  ">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">Agent</div>
      <div className="hidden md:flex space-x-[60px] ">
        <Link to={""} className="text-white hover:text-gray-300">Home</Link>
        <Link to={"land"} className="text-white hover:text-gray-300">Land</Link>
        <Link to={"holding"} className="text-white hover:text-gray-300">Holding</Link>
        <Link to={'contact'} className="text-white hover:text-gray-300">Contact</Link>
      </div>

      
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className=" md:flex">
       <Tooltip 
       
      title={
        <ul className="p-4 space-y-4">
        <li className="pb-2">{data.name}</li>
        <button
          onClick={handlelogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </ul>

     
      } 
      style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: "18px",
                color: "#ff4d4f",
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.8)",
                padding: "5px",
                borderRadius: "50%",
                transition: "0.3s",
              }}>  <UserOutlined className="text-white text-2xl" /></Tooltip>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden">
    
    <Link  className="block text-white hover:text-gray-300 px-2 py-1" to={""}>Home</Link>
        <Link  className="block text-white hover:text-gray-300 px-2 py-1" to={"land"}>Land</Link>
        <Link  className="block text-white hover:text-gray-300 px-2 py-1" to={"holding"}>Holding</Link>
        <Link  className="block text-white hover:text-gray-300 px-2 py-1" to={"contact"}>contact</Link>
        <button  onClick={handlelogout}  className="block text-white hover:text-gray-300 px-2 py-1"  >Logout</button>

       
      </div>
    )}
  </nav>
  
  </>
  )
}

export default AgentNavbar