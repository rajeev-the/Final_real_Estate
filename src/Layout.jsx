import React from "react";
 import Navbar from "./componets/Navbar";
 import Footer from "./componets/Footer";
import { data, Outlet } from "react-router-dom"; // Outlet renders nested routes
import { ToastContainer } from "react-toastify";


const Layout = () => {
  const data1 = JSON.parse(localStorage.getItem("User"))
  
  return (
<>
    
    <div className=" h-full w-full  ">
      
      
    <Navbar data={data1}/>
      <div>
        <Outlet /> {/* This renders the current page */}
      </div>
  
      <Footer/>
    </div>
    

    </>
  );
};

export default Layout;
