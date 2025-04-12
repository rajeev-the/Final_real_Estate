import React,{useState} from "react";
 import Navbar from "./componets/Navbar";
 import Footer from "./componets/Footer";
import { data, Outlet } from "react-router-dom"; // Outlet renders nested routes
import { ToastContainer } from "react-toastify";
import LoginModal from "./componets/LoginModal";


const Layout = () => {
  const data1 = JSON.parse(localStorage.getItem("User"))
  const [showLogin, setShowLogin] = useState(false);
  
  return (
<>
    
    <div className=" h-full w-full  ">
      
      
    <Navbar data={data1 }  openLogin={() => setShowLogin(true)}/>
      <div>
        <Outlet  /> {/* This renders the current page */}
      </div>
  
      <Footer/>
        {/* Login Modal */}
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
    

    </>
  );
};

export default Layout;
