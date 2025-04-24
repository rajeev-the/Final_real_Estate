import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const AgentBox = ({ phone_number, estate_name ,language ,rating ,name ,img ,state,clickurl }) => {
   const showErrorToast = (message) => {
          toast.error(message, {
            position: "top-right",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        };
  
  
  const value = name.charAt(0)
  const url = "https://finalbackend111.pythonanywhere.com/api/"

  const userdata = JSON.parse(localStorage.getItem("User"))
 
  const whatsappLink = phone_number 
  ? `https://wa.me/${phone_number}` 
  : "#";

  // const whatsappLink = `https://wa.me/${9310650163}`

  const onsubmitWhatsapp = async () => {
    const userdata = JSON.parse(localStorage.getItem("User"));
  
    if (!userdata || !userdata.User) {
      showErrorToast("Sign in to connect");
      return;
    }
  
    const jsondata = {
      phone_User: userdata.User.phone_number,
      User_name: userdata.User.name,
      Agent_name: name,
      phone_Agent: phone_number,
    };
  
    try {
      const res = await axios.post(`${url}add-to-sheet/`, jsondata);
      // Optional: handle res
    } catch (err) {
      console.log(err);
    }
  
    window.open(whatsappLink, "_blank");
  };
  
  

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full max-w-xl transition-all  duration-300 hover:shadow-xl hover:scale-[1.02] transform origin-center">
    {/* Profile Image */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-blue-500 flex justify-center  items-center  rounded-2xl text-2xl sm:text-3xl text-white font-bold ring-4 ring-white ring-opacity-30 shadow-md">
       <img className='w-full h-full object-cover  rounded-2xl' src={`https://ui-avatars.com/api/?name=${estate_name}&background=random`} alt="" /> 
    </div>
    
    {/* Agent Details */}
    <div className="flex-1 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-bold text-lg sm:text-xl text-gray-800">{name}</h2>
        <span className="text-xs font-medium bg-gray-100 text-blue-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mt-1 sm:mt-0">
        Top Partner
        </span>
      </div>
      
      <p className="text-gray-500 text-sm mt-2 flex items-center">
        <svg className="w-4 h-4 mr-1.5 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 20S3 10.87 3 7a7 7 0 1114 0c0 3.87-7 13-7 13zm0-11a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        <span className="truncate">{estate_name} • {state}</span>
      </p>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
        <div className="bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded-lg border border-gray-100 flex items-center w-fit">
          🌐 {language[0]} {language[1]  ?  "":  language[1]  }
        </div>
  
      </div>

      {/* Rating and Action */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600">{rating}/5</span>
        </div>
        
        <div 
        
      
        className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
         
            <button
           onClick={onsubmitWhatsapp}
            
            className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
              </svg>
              <span className="text-sm sm:text-base">Message</span>
            </button>
          
          <Link 
         
            to={clickurl}
            className="w-full sm:w-auto flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-gray-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <span className="text-sm sm:text-base">Details</span>
          </Link>
        </div>
      </div>
    </div>
</div>
  )
}

export default AgentBox