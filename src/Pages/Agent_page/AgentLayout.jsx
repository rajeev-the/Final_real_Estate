import React from "react";
import AgentNavbar from "../../componets/AgentNavbar";
import Footer from "../../componets/Footer"
import { Outlet } from "react-router-dom"; // Outlet renders nested routes

const AgentLayout = () => {
  return (
    <>
    
    <div className=" h-full w-full  ">
      
    <AgentNavbar/>
      <div>
        <Outlet /> {/* This renders the current page */}
      </div>
  
      <Footer/>
    </div>
    

    </>
  )
}

export default AgentLayout