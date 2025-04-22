import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandAdd = () => {
  // Basic Information
  const [state, setState] = useState("");
  const [available, setAvailable] = useState(false);
  const [acrePrice, setAcrePrice] = useState("");
  const [acre, setAcre] = useState("");
  const [roadWidth, setRoadWidth] = useState("");
  const [category, setCategory] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [address, setAddress] = useState("");
  const [tehsilName, setTehsilName] = useState("");
  const [locationsLink, setLocationsLink] = useState("");
  const [UnitFrontage,setUnitFrontage] = useState("")

 
  const [saleOrLease, setSaleOrLease] = useState('sale');
  const [eligibleForClu, setEligibleForClu] = useState(true);
  const [villageName, setVillageName] = useState("");
 
  const [zone, setZone] = useState("");
  const [landFacing, setLandFacing] = useState("");
  const [nearestHighways, setNearestHighways] = useState("");
  const [details, setDetails] = useState("");
  const [layout, setLayout] = useState(null);
  const [unitOfLand, setUnitOfLand] = useState('Acres');
  const [moneyUnit, setMoneyUnit] = useState('Crore');
  const [footter, setFootter] = useState(null);

  const navigate = useNavigate();
  const agent = JSON.parse(localStorage.getItem("Agent"));
  const url = "https://finalbackend111.pythonanywhere.com/api/";

  // Helper functions for derived fields
  const money_units = [
    ['Crore', 'Cr'],
    ['Lakh', 'Lakh'],
    ['Thousand', 'Thousand']
  ];
  
  const unitofland = [
    ['Acres', 'Acres'],
    ['Sq. Ft.','Sq. Ft.'],
    ['Sq. Yd.', 'Sq. Yd.'],
    ['Sq. Mtr.', 'Ghaj'],
    ['Sq. Mtr.', 'Sq. Mtr.'],
  ];

const frontageunit=[
  ['ft','ft'],
  ['mt','mt']
]
 

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
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
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!state || !districtName || !acrePrice || !acre) {
      showErrorToast("Please fill in all required fields");
      return;
    }
  
    try {
      const formData = new FormData();
      
      // Format numbers properly
      const numericAcrePrice = parseFloat(acrePrice) || 0;
      const numericAcre = parseFloat(acre) || 0;
      const numericRoadWidth = parseInt(roadWidth) || 0;
      const numericFootter = parseInt(footter) || 0;

  
      // Append basic information
      formData.append("state", state);
      formData.append("address", address);
      formData.append("acre_price", numericAcrePrice);
      formData.append("acre", numericAcre);
      formData.append("available", available ? "true" : "false");
      formData.append("road_width", numericRoadWidth);
      formData.append("land_category", category);
      formData.append("district_name", districtName);
      formData.append("tehsil_name", tehsilName);
      formData.append("locations_link", locationsLink);
  
      // Append additional details
      formData.append("village_name", villageName);
      formData.append("sale_or_lease", saleOrLease);
      formData.append("eligible_for_clu", eligibleForClu ? "true" : "false");
      formData.append("zone", zone);
      formData.append("land_facing", landFacing);
      formData.append("nearest_highways", nearestHighways);
      formData.append("details", details);
      formData.append("agent", agent?.id?.toString());
  
      // Append unit information
      formData.append("unit_of_frontage",UnitFrontage);
      formData.append("unit_of_front", unitOfLand);
      formData.append("money_unit", moneyUnit);
      formData.append("frontage", numericFootter);
  
      
      if (layout instanceof File) {
        formData.append("layout", layout);
      }
  
    
  
      const response = await axios.post(`${url}property/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
  
      if (response.status === 201) {
        showSuccessToast("Property added successfully!");
        navigate("/agent/holding");
      }
  
    } catch (error) {
      console.error("Error details:", error.response?.data);
      const errorMessage = error.response?.data?.detail || 
                          Object.values(error.response?.data || {})[0] || 
                          "Error adding property";
      showErrorToast(errorMessage);
    }
  };

  return (
    <div className="min-h-screen mt-[10px] flex items-center justify-center bg-gray-100 relative">
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Property Registration</h1>
          <p className="text-white/90">List New Property for Sale/Lease</p>
        </div>

        <div className="p-6 sm:p-8">
          <form className="space-y-6">
            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Type</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    name="sale_or_lease"
                    value="sale"
                    checked={saleOrLease === 'sale'}
                    onChange={(e) => setSaleOrLease(e.target.value)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Sale</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    name="sale_or_lease"
                    value="lease"
                    checked={saleOrLease === 'lease'}
                    onChange={(e) => setSaleOrLease(e.target.value)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Lease</span>
                </label>
              </div>
            </div>

            {/* Basic Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price with Money Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price per Unit</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    placeholder="Enter price"
                    onChange={(e) => setAcrePrice(e.target.value)}
                    value={acrePrice}
                    required
                  />
                  <select
                    value={moneyUnit}
                    onChange={(e) => setMoneyUnit(e.target.value)}
                    className="w-1/3 px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    required
                  >
                    {money_units.map((unit) => (
                      <option key={unit[0]} value={unit[0]}>{unit[1]}</option>
                    ))}
                  </select>
                </div>
              </div>
            
              {/* Area with Land Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Land Size</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    placeholder="Enter Land Aera"
                    onChange={(e) => setAcre(e.target.value)}
                    value={acre}
                    required
                  />
                  <select
                    value={unitOfLand}
                    onChange={(e) => setUnitOfLand(e.target.value)}
                    className="w-1/3 px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    required
                  >
                    {unitofland.map((unit) => (
                      <option key={unit[0]} value={unit[0]}>{unit[1]}</option>
                    ))}
                  </select>
                </div>
              </div>
            
              {/* Road Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Road Width (ft)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter road width"
                  onChange={(e) => setRoadWidth(e.target.value)}
                  value={roadWidth}
                  required
                />
              </div>
            
              {/* Land Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Land Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Agricultural">Agricultural</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            
              {/* New Footter Field */}
            
             
            
            </div>

            <div className="flex items-end gap-4">
  {/* Frontage Input */}
  <div className="flex-1">
    <label className="block text-sm font-medium text-gray-700 mb-2">Frontage</label>
    <input
      type="number"
      className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
      placeholder="Enter Frontage"
      onChange={(e) => setFootter(e.target.value)}
      value={footter}
    />
  </div>

  {/* Money Unit Dropdown */}
  <div className="w-1/3">
    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
    <select
      value={UnitFrontage}
      onChange={(e) => setUnitFrontage(e.target.value)}
      className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
      required
    >
      {frontageunit.map((unit) => (
        <option key={unit[0]} value={unit[0]}>{unit[1]}</option>
      ))}
    </select>
  </div>
</div>

            {/* Location Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Uttar Pradesh">Noida, UP</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter district"
                  onChange={(e) => setDistrictName(e.target.value)}
                  value={districtName}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tehsil</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter tehsil"
                  onChange={(e) => setTehsilName(e.target.value)}
                  value={tehsilName}
                  required
                />
              </div>
            </div>

            {/* Village Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Village Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                placeholder="Enter village name"
                onChange={(e) => setVillageName(e.target.value)}
                value={villageName}
              />
            </div>

            {/* Address & Location Link */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  rows="3"
                  placeholder="Enter complete address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps Link</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="https://maps.google.com/..."
                  onChange={(e) => setLocationsLink(e.target.value)}
                  value={locationsLink}
                  pattern="https?://.+"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zone</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter zone"
                  onChange={(e) => setZone(e.target.value)}
                  value={zone}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Land Facing</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter land facing direction"
                  onChange={(e) => setLandFacing(e.target.value)}
                  value={landFacing}
                />
              </div>

        
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 rounded border-gray-300"
                  checked={eligibleForClu}
                  onChange={(e) => setEligibleForClu(e.target.checked)}
                />
                <label className="ml-2 text-sm text-gray-700">Eligible for CLU</label>
              </div>
            </div>

            {/* Additional Text Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nearest Highways(Optional)</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                rows="2"
                placeholder="Enter nearest highways"
                onChange={(e) => setNearestHighways(e.target.value)}
                value={nearestHighways}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details(Optional)</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                rows="3"
                placeholder="Enter any additional details"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
              ></textarea>
            </div>

            {/* Image Uploads - Both Optional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Layout Image Upload */}
  <div className="flex flex-col justify-end">
    <label className="block text-sm font-medium text-gray-700 mb-2">Layout Image</label>
    <label className="flex flex-col w-full border-2 border-dashed rounded-lg hover:border-gray-400 transition-colors cursor-pointer">
      <div className="flex flex-col items-center justify-center py-6">
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="mt-2 text-sm text-gray-600">
          {layout ? layout.name : "Upload layout image"}
        </span>
      </div>
      <input
        type="file"
        onChange={(e) => setLayout(e.target.files[0])}
        className="hidden"
      />
    </label>
  </div>

  {/* Agent Field */}
  <div className="flex flex-col justify-end">
    <label className="block text-sm font-medium text-gray-700 mb-2">Agent</label>
    <input
      type="text"
      className="w-full px-4 py-3 border rounded-lg bg-gray-100"
      value={agent?.name || ""}
      readOnly
    />
  </div>
</div>


            {/* Availability & Agent Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 rounded border-gray-300"
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
                <label className="ml-2 text-sm text-gray-700">Currently Available</label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all"
            >
              Register Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandAdd;