import React from "react";
 import Navbar from "./componets/Navbar";
 import Footer from "./componets/Footer";
import { Outlet } from "react-router-dom"; // Outlet renders nested routes

const Layout = () => {
  return (
<>
    
    <div className=" h-full w-full  ">
      
    <Navbar/>
      <div className="">
        <Outlet /> {/* This renders the current page */}
      </div>
  
      <Footer/>
    </div>
    

    </>
  );
};

export default Layout;
