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
    
   <div className="h-full w-full relative">
  <Navbar data={data1} openLogin={() => setShowLogin(true)} />

  <div>
    <Outlet /> {/* This renders the current page */}
  </div>

  <Footer />

  {/* Login Modal */}
  <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/yourNumberHere"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1ebd5a] transition-colors"
    aria-label="Chat on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.3.062 12 .062c3.181 0 6.167 1.24 8.413 3.488a11.822 11.822 0 013.49 8.409c-.003 6.627-5.376 12-12 12a11.9 11.9 0 01-6.001-1.623L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.591 5.464 0 9.906-4.437 9.91-9.898.003-5.476-4.436-9.91-9.912-9.91-5.462 0-9.899 4.435-9.899 9.91 0 2.221.729 3.891 1.938 5.522l-.999 3.648 3.616-.963zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  </a>
</div>


    </>
  );
};

export default Layout;
