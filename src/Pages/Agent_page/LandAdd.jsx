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
  const [file, setFile] = useState(null);
  const [roadWidth, setRoadWidth] = useState("");
  const [category, setCategory] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [address, setAddress] = useState("");
  const [tehsilName, setTehsilName] = useState("");
  const [locationsLink, setLocationsLink] = useState("");

  // Additional Fields
  const [saleOrLease, setSaleOrLease] = useState('sale');
  const [eligibleForClu, setEligibleForClu] = useState(true);
  const [villageName, setVillageName] = useState("");
  const [distanceBetweenDelhi, setDistanceBetweenDelhi] = useState("");
  const [zone, setZone] = useState("");
  const [landFacing, setLandFacing] = useState("");
  const [nearestHighways, setNearestHighways] = useState("");
  const [details, setDetails] = useState("");
  const [layout, setLayout] = useState(null);

  const navigate = useNavigate();
  const agent = JSON.parse(localStorage.getItem("Agent"));
  const url = "https://finalbackend111.pythonanywhere.com/api/";

  // Helper functions for derived fields
  const calculateSizeRange = (acreValue) => {
    const acreNum = parseFloat(acreValue) || 0;
    if (acreNum < 1) return '0-1 acre';
    if (acreNum < 5) return '1-5 acres';
    if (acreNum < 10) return '5-10 acres';
    return '10+ acres';
  };

  const calculatePriceRange = (priceValue) => {
    const priceNum = parseInt(priceValue) || 0;
    if (priceNum < 1000000) return 'Under ₹1M';
    if (priceNum < 5000000) return '₹1M-5M';
    if (priceNum < 10000000) return '₹5M-10M';
    return 'Over ₹10M';
  };

  const calculateRoadWidthFilter = (widthValue) => {
    const widthNum = parseInt(widthValue) || 0;
    if (widthNum < 20) return 'Narrow (<20ft)';
    if (widthNum < 40) return 'Medium (20-40ft)';
    if (widthNum < 60) return 'Wide (40-60ft)';
    return 'Very Wide (60ft+)';
  };

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
    
    // Validate required fields
    if (!districtName) {
      showErrorToast("District name is required");
      return;
    }

    // Validate URL format
    if (locationsLink && !locationsLink.startsWith('http')) {
      showErrorToast("Please enter a valid URL starting with http:// or https://");
      return;
    }

    // Validate numeric fields
    if (isNaN(parseInt(roadWidth))) {
      showErrorToast("Road width must be a valid number");
      return;
    }

    // Calculate derived fields
    const sizeRange = calculateSizeRange(acre).slice(0, 120);
    const priceRange = calculatePriceRange(acrePrice).slice(0, 120);
    const roadWidthFilter = calculateRoadWidthFilter(roadWidth).slice(0, 120);

    const formData = new FormData();
    
    // Append all form fields
    formData.append("state", state ? JSON.stringify(state) : null);
    formData.append("address", address);
    formData.append("acre_price", acrePrice || 0);
    formData.append("acre", acre || 0);
    formData.append("available", available);
    formData.append("road_width", parseInt(roadWidth) || 0);
    formData.append("land_category", category);
    formData.append("district_name", districtName);
    formData.append("tehsil_name", tehsilName);
    formData.append("locations_link", locationsLink);
    formData.append("size_range", sizeRange);
    formData.append("price_range", priceRange);
    formData.append("road_width_filter", roadWidthFilter);
    formData.append("village_name", villageName);
    formData.append("sale_or_lease", saleOrLease);
    formData.append("eligible_for_clu", eligibleForClu);
    formData.append("zone", zone);
    formData.append("land_facing", landFacing);
    formData.append("nearest_highways", nearestHighways);
    formData.append("details", details);
    formData.append("distance_between_delhi", distanceBetweenDelhi || 0);
    formData.append("agent", agent?.id);
    
    // Append images only if they exist
    if (file) {
      formData.append("img", file);
    }
    if (layout) {
      formData.append("layout", layout);
    }

    try {
      const res = await axios.post(`${url}property/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        showSuccessToast("Property added successfully");
        // Reset form
        setState("");
        setAddress("");
        setAcrePrice("");
        setAcre("");
        setAvailable(false);
        setRoadWidth("");
        setCategory("");
        setDistrictName("");
        setTehsilName("");
        setLocationsLink("");
        setFile(null);
        setLayout(null);
        navigate("/agent/holding");
      }
    } catch (error) {
      console.error("Error details:", error.response?.data);
      showErrorToast("Error in adding property: " + 
        (error.response?.data?.message || "Please check all fields"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price per Acre (₹)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter price per acre"
                  onChange={(e) => setAcrePrice(e.target.value)}
                  value={acrePrice}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Acreage</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter total acres"
                  onChange={(e) => setAcre(e.target.value)}
                  value={acre}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Road Width (feet)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter road width"
                  onChange={(e) => setRoadWidth(e.target.value)}
                  value={roadWidth}
                  required
                />
              </div>

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
                  <option value="Noida">Noida, UP</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Ghaziabad">Ghaziabad</option>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance from Delhi (km)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter distance"
                  onChange={(e) => setDistanceBetweenDelhi(e.target.value)}
                  value={distanceBetweenDelhi}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Nearest Highways</label>
              <textarea
                className="w-full px-4 py-3 border rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                rows="2"
                placeholder="Enter nearest highways"
                onChange={(e) => setNearestHighways(e.target.value)}
                value={nearestHighways}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Image</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full border-2 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                    <div className="flex flex-col items-center justify-center py-4 sm:py-6">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span className="mt-2 text-sm text-gray-600">{file ? file.name : "Upload property image (optional)"}</span>
                    </div>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Layout Image</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full border-2 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                    <div className="flex flex-col items-center justify-center py-4 sm:py-6">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span className="mt-2 text-sm text-gray-600">{layout ? layout.name : "Upload layout image (optional)"}</span>
                    </div>
                    <input
                      type="file"
                      onChange={(e) => setLayout(e.target.files[0])}
                      className="hidden"
                    />
                  </label>
                </div>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Agent</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg bg-gray-100"
                  value={agent?.name || ""}
                  readOnly
                />
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