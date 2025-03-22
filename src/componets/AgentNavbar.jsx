import React,{useState} from 'react'
import {UserOutlined} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import {Tooltip} from "antd"




const AgentNavbar = () => {



  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>          

    <nav className="bg-gray-600 p-4 sm:pb-5 mb-3  ">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">Agent</div>
      <div className="hidden md:flex space-x-[60px] ">
        <Link to={""} className="text-white hover:text-gray-300">Home</Link>
        <Link to={"land"} className="text-white hover:text-gray-300">Land</Link>
        <Link to={"holding"} className="text-white hover:text-gray-300">Holding</Link>
        <Link to={'#'} className="text-white hover:text-gray-300">Contact</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex">
       <Tooltip 
       onClick={ () =>navigator("/login")}
      title={
      <Link  to={"/login"}> <p className='text-white hover:text-gray-300 font-semibold transition-colors'>Logout </p> </Link>
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
        <a href="#" className="block text-white hover:text-gray-300 px-2 py-1">Home</a>
        <a href="#" className="block text-white hover:text-gray-300 px-2 py-1">About</a>
        <a href="#" className="block text-white hover:text-gray-300 px-2 py-1">Services</a>
        <a href="#" className="block text-white hover:text-gray-300 px-2 py-1">Contact</a>
      </div>
    )}
  </nav>
  
  </>
  )
}

export default AgentNavbar