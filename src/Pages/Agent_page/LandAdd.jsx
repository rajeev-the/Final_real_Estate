import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandAdd = () => {
    const [state, setEstate] = useState("");
    const [value, setValue] = useState([]);
    const [Available, setAvailable] = useState(false);
    const [AcrePrice, setAcrePrice] = useState("");
    const [Acre, setAcre] = useState("");
    const [file, setFile] = useState(null);
    const [Road, setRoad] = useState("");
    const [Category, setCategory] = useState("");
    const[district,setDistrict] = useState("");
    const[address,setAddress] = useState("");
    const[tehsil,setTehsil] = useState("");
    const[location,setLocation] = useState("");
    const navigate = useNavigate()
    const agent = JSON.parse(localStorage.getItem("Agent"));
    const url = "https://finalbackend111.pythonanywhere.com/api/"

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Create a FormData object
      const formData = new FormData();
      formData.append("state", JSON.stringify(state));
      formData.append("address", address);
      formData.append("district_name", district);
      formData.append("tehsil_name", tehsil);
      formData.append("locations_link", location);
      formData.append("img", file); // Make sure file is a File object, not a URL
      formData.append("land_category", Category);
      formData.append("road_width", Road);
      formData.append("acre", Acre);
      formData.append("acre_price", AcrePrice);
      formData.append("available", Available);
      formData.append("agent", agent.id); // Ensure agent.id is valid
  
      try {
          const res = await axios.post(`${url}property/`, formData, {
              headers: {
                  "Content-Type": "multipart/form-data", // Required for FormData
              },
          });
  
          if (res.status === 201) {
              showSuccessToast("Property added successfully");
              setValue(res.data);
          }
  
          // Reset form fields
          setEstate("");
          setValue([]);
          setAvailable(false);
          setAcrePrice("");
          setAcre("");
          setFile(null);
          setRoad("");
          setCategory("");
          setDistrict("");
          setAddress("");
          setTehsil("");
          setLocation("");
          setAgent(null);
  
          navigate("/agent/holding");
  
      } catch (error) {
          showErrorToast("Error in adding property");
          console.error("❌ Error:", error.response?.data || error.message);
      }
  };
  
      const showSuccessToast = (data1) => {
         toast.success(data1 , {
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

    //  const handleImageChange = (e) => {
    //   const file = e.target.files[0];
    //   if (file) {
    //     setImage(file);
    //   }
    // };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
     {/* Background with buildings overlay */}
     
   
     {/* Form Container */}
     <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4">
       {/* Header */}
       <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-center">
         <h1 className="text-3xl font-bold text-white mb-2">Property Registration</h1>
         <p className="text-white/90">List New Property for Sale</p>
       </div>
   
       {/* Form Content */}
       <div className="p-6 sm:p-8">
         <form className="space-y-6" >
           {/* Basic Info Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Acre Price */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Price per Acre (₹)</label>
               <input
                 type="number"
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 placeholder="Enter price per acre"
                 onChange={(e)=>setAcrePrice(e.target.value)}
                 value={AcrePrice}
               />
             </div>
   
             {/* Total Acre */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Total Acreage</label>
               <input
                 type="number"
                 step="0.01"
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 placeholder="Enter total acres"
                 onChange={(e)=>setAcre(e.target.value)}
                 value={Acre}
               />
             </div>
   
             {/* Road Width */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Road Width (feet)</label>
               <input
                 type="number"
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 placeholder="Enter road width"
                 onChange={(e)=>setRoad(e.target.value)}
                 value={Road}
               />
             </div>
   
             {/* Land Category */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Land Category</label>
               <select  value={Category}  onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
                 <option value="">Select Category</option>
                 <option value={"Agricultural"}>Agricultural</option>
                 <option value={"Residential"}>Residential</option>
                 <option value={"Commercial"}>Commercial</option>
               </select>
             </div>
           </div>
   
           {/* Location Details */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
               <input
                 type="text"
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 placeholder="Enter district"
                 onChange={(e)=>setDistrict(e.target.value)}
                 value={district}
               />
             </div>
   
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Tehsil</label>
               <input
                 type="text"
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 placeholder="Enter tehsil"
                 onChange={(e)=>setTehsil(e.target.value)}
                 value={tehsil}
               />
             </div>
   
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
               <select value={state} onChange={(e)=>setEstate(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
                 <option value="">Select State</option>
                 <option value={"Noida"} >Noida,Up</option>
                 <option value={"Haryana"} >Haryana</option>
                 <option value={"New Delhi"}>Delhi</option>
               </select>
             </div>
           </div>
   
           {/* Address & Location Link */}
           <div className="space-y-6">
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
               <textarea
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 rows="3"
                 placeholder="Enter complete address"
                 onChange={(e)=>setAddress(e.target.value)}
                 value={address}
               ></textarea>
             </div>
   
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps Link</label>
               <input
                 type="url"
                 className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                 placeholder="Paste location link"
                 onChange={(e)=>setLocation(e.target.value)}
                 value={location}
               />
             </div>
           </div>
   
           {/* Image Upload */}
           <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
          <div className="flex items-center justify-center w-full">
         
            <label className="flex flex-col w-full border-2 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="flex flex-col items-center justify-center py-4 sm:py-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span className="mt-2 text-sm text-gray-600" >  {  file  ?  file.name  : "Upload profile photo" }</span>
              </div>
              <input type="file"  onChange={(e)=>setFile(e.target.files[0])} className="hidden" />
            </label>
          </div>
        </div>
   
           {/* Availability & Agent Selection */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex items-center">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 rounded border-gray-300"
                 onChange={(e)=>setAvailable(e.target.checked)}
                 value={Available}
               />
               <label className="ml-2 text-sm text-gray-700">Currently Available</label>
             </div>
   
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2"> Agent</label>
               <select value={agent} onChange={(e)=>setAgent(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
             
                 <option value={agent.id} >{agent.name}</option>
               
               </select>
             </div>
           </div>
   
           {/* Submit Button */}
           <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all">
             Register Property
           </button>
  
          
         </form>
       </div>
     </div>
   </div>
  
  )
}

export default LandAdd