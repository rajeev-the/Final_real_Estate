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
import free from "../assets/remove_the_backgroun-removebg-preview.png"


const Navbar = ({ data ,openLogin  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); 
  const boxRef = useRef(null);
  const [activeuser, setActiveUser] = useState(data ? false : true);
   const [isSubOpen, setIsSubOpen] = useState(false);
     const [isHubOpen, setIsHubOpen] = useState(false); // dropdown state
      const [isHubSubOpen, setIsHubSubOpen] = useState(false); // dropdown state
  const navigation = useNavigate();
  const itemsRef = useRef([]);
  const secondRef = useRef();
  const thridref = useRef()
  const forthref = useRef()
   const fivehref = useRef()
  useGSAP(() => {
    const tl = gsap.timeline();
  
    // Animate the Navbar (always runs on mount)
    tl.from(boxRef.current, { 
      y: -100, 
      opacity: 1, 
      duration: 1, 
      ease: "expo.out" 
    });
     
      tl.from(
        forthref.current,
        { 
      y: -100, 
      opacity: 1, 
      duration: 1, 
      ease: "expo.out" 
    }
      );
    
    
  
    // Animate Navigation Items (only when menu is open)
    if (!isOpen) {
      tl.fromTo(
        itemsRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
      );
    }
 

       if (fivehref.current) {
      tl.fromTo(
        fivehref.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1,  stagger: 0.1, ease: "power2.out" }
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
          { name: "Explore Lands", link: "landlist" },
          { name: "Our Partners", link: "agents" },
        
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
  

       <div ref={fivehref} className="relative group inline-block">
         <Link  to={'/blog'}   onClick={() => setActive("blog")}
            className={`relative px-4 py-2 transition duration-300 ease-in-out   cursor-pointer rounded-2xl ${
              active === "blog"
                ? "bg-[#D65F00] text-white shadow-lg"
                : "text-white " 
            }`}
           >
           Knowledge Hub
         </Link>
       
         {/* Dropdown Panel */}
        <div className="absolute left-0 w-52 sm:w-56 bg-white border border-gray-200 shadow-2xl rounded-2xl p-4 space-y-3 hidden group-hover:block z-50">
  {/* Tool 1 */}
  <Link  onClick={() => setActive("blog")} to={'/blog'} className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl transition-all duration-200 cursor-pointer group/tool">
    <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-2 rounded-full text-white">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20h9" />
        <path d="M12 4h9" />
        <path d="M4 12h16" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-sm text-gray-900">Blogs</h4>
      <p className="text-xs text-gray-500">Latest updates and insights</p>
    </div>
  </Link>

  {/* Tool 2 */}
  
   
      {/* Tools with Submenu */}
        <div
          className="relative group/tool"
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent toggle
           
          }}
        >
          <div className="flex items-center justify-between gap-3 hover:bg-gray-100 p-3 rounded-xl transition cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-green-500 to-teal-500 p-2 rounded-full text-white">🛠️</div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900">Tools</h4>
                <p className="text-xs text-gray-500">Utilities and resources</p>
              </div>
            </div>
            <span className="text-gray-400 text-xs">▸</span>
          </div>

          {/* Submenu */}
          <div
            className={`
              absolute top-0 left-full ml-0 w-48 bg-white border border-gray-200 rounded-xl shadow-xl p-2 space-y-2 z-50
              transition-all duration-300
              hidden group-hover/tool:block
              ${isSubOpen ? "block" : ""}
            `}
          >
         

<Link
to={'/rera'}
  className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-gray-700 cursor-pointer
             hover:bg-green-50 hover:text-green-800
             transition-colors duration-200 ease-in-out
             hover:shadow-sm"
>
 <svg
  className="w-5 h-5 text-green-600"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
  <line
    x1="16.65"
    y1="16.65"
    x2="21"
    y2="21"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

  RERA
</Link>
  <Link
            to={'/sip'}
  className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-gray-700 cursor-pointer
             hover:bg-green-50 hover:text-green-800
             transition-colors duration-200 ease-in-out
             hover:shadow-sm"
>
 
  <svg
    className="w-5 h-5 text-green-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
  SIP
</Link>

<Link
to={'/emi'}
  className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-gray-700 cursor-pointer
             hover:bg-green-50 hover:text-green-800
             transition-colors duration-200 ease-in-out
             hover:shadow-sm"
>
<svg
    className="w-5 h-5 text-green-600"
    fill="none"
    stroke="green"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
>

    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="green" strokeWidth="2" fill="none"/>

  
   

    <circle cx="8" cy="12" r="1" fill="green"/>
    <circle cx="12" cy="12" r="1" fill="green"/>
    <circle cx="16" cy="12" r="1" fill="green"/>
    <circle cx="8" cy="16" r="1" fill="green"/>
    <circle cx="12" cy="16" r="1" fill="green"/>
    <circle cx="16" cy="16" r="1" fill="green"/>
</svg>






  EMI
</Link>
            
          </div>
        </div>
  </div>


       </div>

        <Link
            ref={(fivehref) => (itemsRef.current[4] = fivehref)}
            
            to={"/ContactUs"}
            onClick={() => setActive("ContactUs")}
            className={`relative px-4 py-2 transition duration-300 ease-in-out rounded-2xl ${
              active === "ContactUs"
                ? "bg-[#D65F00] text-white shadow-lg"
                : "text-white hover:bg-white/40"
            }`}
          >
           Contact Us
          </Link>
       
      </ul>
  
      {/* Login / User Profile */}
     {/* Login / User Profile - Hidden on Mobile */}

     <div className="flex flex-1 justify-end items-center space-x-4">
     <Link
  ref={forthref}
  to="/login/agent"
  className="hidden sm:flex items-center text-white px-2 py-1 rounded-lg font-medium border-2 transition-colors bg-black hover:text-white hover:border-[#D65F00]"
>
  <span className="flex items-center  justify-center ">
    
    <span>Post Land</span>
    <img src={free}  className="w-[40px] h-[30px] object-contain" alt="lfree" />





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
  className="md:hidden sm:flex items-center text-white px-2 py-1 rounded-lg font-medium border-2 transition-colors bg-black hover:text-white hover:border-[#D65F00]"
>
  <span className="flex items-center  justify-center ">
    
    <span>Post land</span>
      <img src={free}  className="w-[40px] h-[30px] object-contain" alt="lfree" />
    {/* FREE Badge */}
   

  </span>
</Link>


  
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden  text-white transition-colors hover:text-[#D65F00]"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  
    {/* Mobile Menu - Now Placed at the End */}
    {isOpen && (
      <div className="md:hidden    absolute top-full left-0 w-full bg-[#000000] shadow-lg p-4 flex flex-col items-center space-y-4">
        {[
          { name: "Home", link: "/" },
          { name: "Explore Lands", link: "landlist" },
          { name: "Our Partners", link: "agents" },
        
         
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
       {/* Knowledge Hub Dropdown Toggle */}
      <div
        onClick={() => setIsHubOpen(!isHubOpen)}
        className="w-full text-center py-2 text-white hover:bg-black/20 rounded-lg transition-colors cursor-pointer"
      >
        Knowledge Hub {isHubOpen ? "▴" : "▾"}
      </div>

      {/* Dropdown Menu */}
      {isHubOpen && (
        <div className="w-full flex flex-col space-y-2 pl-4">
          <Link
            to="/blog"
            onClick={() => {
              setActive("blog");
              setIsOpen(false);
              setIsHubOpen(false);
            }}
            className="text-sm text-white hover:bg-black/20 py-2 px-2 rounded-lg text-left flex items-center gap-2"
          >

             <svg
    className="w-4 h-4 text-orange-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 20h9" />
    <path d="M12 4h9" />
    <path d="M4 12h16" />
  </svg>
            Blogs

          </Link>
          <div 
            onClick={() => setIsHubSubOpen(!isHubSubOpen)}
           className="w-full text-center py-2 text-white hover:bg-black/20 rounded-lg transition-colors cursor-pointer">
            Tools {isHubSubOpen ? "▴" : "▾"}
          </div>
         
        </div>
      )}
      {
        isHubSubOpen && (
          <div className="w-full flex flex-col space-y-2 pl-4">
         

          <Link
            to="/rera"
            onClick={() => {
              setActive("blog");
              setIsOpen(false);
              setIsHubOpen(false);
              setIsHubSubOpen(false);
            }}
            className="text-sm flex items-center gap-2 text-white hover:bg-black/20 py-2 px-2 rounded-lg text-left"
          >
             <svg
  className="w-5 h-5 text-orange-400"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
  <line
    x1="16.65"
    y1="16.65"
    x2="21"
    y2="21"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
            RERA
          </Link>
           <Link
            to="/sip"
            onClick={() => {
              setActive("blog");
              setIsOpen(false);
              setIsHubOpen(false);
              setIsHubSubOpen(false);
            }}
            className=" flex   items-center  gap-2 text-sm text-white hover:bg-black/20 py-2 px-2 rounded-lg text-left"
          >
              <svg
    className="w-5 h-5 text-orange-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
            SIP
          </Link>
              <Link
            to="/emi"
            onClick={() => {
              setActive("blog");
              setIsOpen(false);
              setIsHubOpen(false);
              setIsHubSubOpen(false);
            }}
            className="text-sm flex items-center gap-2 text-white hover:bg-black/20 py-2 px-2 rounded-lg text-left"
          >
          <svg
    className="w-5 h-5 text-orange-500"
    fill="none"
    stroke="orange"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
>

    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="orange" strokeWidth="2" fill="none"/>

  
   

    <circle cx="8" cy="12" r="1" fill="orange"/>
    <circle cx="12" cy="12" r="1" fill="orange"/>
    <circle cx="16" cy="12" r="1" fill="orange"/>
    <circle cx="8" cy="16" r="1" fill="orange"/>
    <circle cx="12" cy="16" r="1" fill="orange"/>
    <circle cx="16" cy="16" r="1" fill="orange"/>
</svg>
            EMI 
          </Link>



          </div>
        )
      }   <Link
           
            to={"/ContactUs"}
            onClick={() => {
              setActive("ContactUs");
              setIsOpen(false);
            }}
            className={`w-full text-center py-2 text-white hover:bg-black/20 rounded-lg transition-colors ${
              active === "ContactUs" ? "bg-black/30" : ""
            }`}
          >
            Contac tUs
          </Link>
        
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
