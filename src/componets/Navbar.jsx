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


const Navbar = ({ data ,openLogin  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); 
  const boxRef = useRef(null);
  const [activeuser, setActiveUser] = useState(data ? false : true);
  const navigation = useNavigate();
  const itemsRef = useRef([]);
  const secondRef = useRef();
  const thridref = useRef()
  const forthref = useRef()
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
    if (!isOpen) {
      tl.fromTo(
        itemsRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
      );
    }
    if(forthref.current){ 
      tl.fromTo(
        forthref.current,
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
      window.location.reload();
  
    
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
    <nav ref={boxRef} className="fixed top-0 left-0 w-full z-50 bg-[#36383D] py-2 px-6 md:px-2 flex justify-between items-center">
    {/* Logo */}
    <div>
      <img 
        ref={secondRef} 
        src={logoimg} 
        alt="Real Estate Logo" 
        className="sm:h-16 sm:w-26 h-15 w-20 rounded-md " 
      />
    </div>
  
    {/* Right Section: Navigation + Login/Profile + Mobile Button */}
    <div className="flex-1  ml-[40px] flex justify-start items-center space-x-6">
      {/* Navigation Links - Hidden on Small Screens */}
      <ul className="hidden    md:flex items-center space-x-6 text-white font-medium">
        {[
          { name: "Home", link: "/" },
          { name: "Our Explor", link: "landlist" },
          { name: "Our Partners", link: "agents" },
          { name: "Contact Us", link: "ContactUs" },
        ].map((item, index) => (
          <Link
            ref={(el) => (itemsRef.current[index] = el)}
            key={item.name}
            to={item.link}
            onClick={() => setActive(item.name)}
            className={`relative px-4 py-2 transition duration-300 ease-in-out rounded-2xl ${
              active === item.name
                ? "bg-[#D65F00] text-white shadow-lg"
                : "text-white hover:bg-white/40"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
  
      {/* Login / User Profile */}
     {/* Login / User Profile - Hidden on Mobile */}

     <div className="flex flex-1 justify-end items-center space-x-4">
     <Link
  ref={forthref}
  to="/login/agent"
  className="hidden sm:flex items-center text-white px-4 py-1 rounded-lg font-medium border-2 transition-colors bg-black hover:text-white hover:border-[#D65F00]"
>
  <span className="flex items-center  justify-center gap-2">
    
    <span>Post Land</span>
    {/* FREE Badge */}


  </span>
</Link>


     {activeuser ? (

      <>




  <button
    ref={thridref}  // Attach ref to this element instead
    onClick={() => {setIsOpen(false) ;
      openLogin(true);
      localStorage.removeItem("User");
      localStorage.removeItem("Agent");


      }}
    className="bg-[#D65F00] hidden sm:flex text-white px-6 py-2 rounded-lg font-medium border-2 border-[#D65F00] transition-colors hover:bg-white hover:text-[#D65F00]"
  >
    Log In
  </button>
 

 

  </>
  

) : (
  <Tooltip
    title={
      <div className="p-4 space-y-2 bg-white rounded-lg shadow-lg">
        <li className="pb-2 text-[#D65F00] list-none">
          {data.user ? data.user.name : data.name}
        </li>
        <button
          onClick={handleLogout}
          className="mt-2 bg-[#D65F00] text-white px-4 py-2 rounded-lg w-full transition-colors hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    }
  >
    <button
      ref={thridref} // Attach ref here instead of inside Tooltip content
      className="border-2 border-[#D65F00] hidden sm:flex p-2 rounded-lg transition-colors hover:bg-[#D65F00]"
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

     </div>

     <Link
  ref={forthref}
  to="/login/agent"
  className="md:hidden sm:flex items-center text-white px-4 py-1 rounded-lg font-medium border-2 transition-colors bg-black hover:text-white hover:border-[#D65F00]"
>
  <span className="flex items-center  justify-center gap-2">
    
    <span>Post land</span>
    {/* FREE Badge */}
   

  </span>
</Link>


  
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white transition-colors hover:text-[#D65F00]"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  
    {/* Mobile Menu - Now Placed at the End */}
    {isOpen && (
      <div className="md:hidden  absolute top-full left-0 w-full bg-[#000000] shadow-lg p-4 flex flex-col items-center space-y-4">
        {[
          { name: "Home", link: "/" },
          { name: "Our Explor", link: "landlist" },
          { name: "Our Partners", link: "agents" },
          { name: "Contact Us", link: "ContactUs" }
         
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
      <button
       
        onClick={() => {setIsOpen(false) ;
          openLogin(true);
          localStorage.removeItem("User");
          localStorage.removeItem("Agent");


          }}
        className="w-full text-center py-2 text-white bg-[#D65F00] hover:bg-[#3a2166] rounded-lg transition-colors"
      >
        Log In
      </button>
    ) : (
      <button
        onClick={() => {
          handleLogout();
          setIsOpen(false);
          localStorage.removeItem("User");
          localStorage.removeItem("Agent");
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
