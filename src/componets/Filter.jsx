import React, { useState } from 'react';
import { useListFilterContext } from '../Context/ListFilter';


const Filter = ({filterdata , setRefreshFilter , iopen ,setIsopen }) => {
  const {  ListfilteredList, setListfilterlist } = useListFilterContext(); // Updated context usage
  const [landCategory, setLandCategory] = useState("Residential");
  const [locationInput, setLocationInput] = useState("");
  const [selectedLandUnit, setSelectedLandUnit] = useState("");
  const [minLandSize, setMinLandSize] = useState("");
  const [maxLandSize, setMaxLandSize] = useState("");
  const [selectedPriceUnit, setSelectedPriceUnit] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minFrontage, setMinFrontage] = useState("");
  const [maxFrontage, setMaxFrontage] = useState("");
  const [selectedFrontageUnit, setSelectedFrontageUnit] = useState("");
  const [minRoadWidth, setMinRoadWidth] = useState("");
  const [maxRoadWidth, setMaxRoadWidth] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const dummyData = [
    "Haryana", "New Delhi", "Delhi", "Punjab", "Uttar pradesh", 
    "Gurgaon", "Faridabad", "Noida", "Ghaziabad", "Greater Noida", 
    "Sonipat", "Panipat", "Ambala", "Kurukshetra", "Sisana"
  ];

  const [suggestions, setSuggestions] = useState([]);

  const categories = [
    "Residential",
    "Commercial",
    "Industrial",
    "Agricultural",
    "Institutional",
    "Mixed-Use",
    "Recreational / Green Zone",
  ];

  const landUnits = ["Acre", "Sq. Ft", "Sq. Yd", "Sq. Mtr."];
  const priceUnits = ["Crore", "Lakh", "Thousand"];
  const frontageUnits = ["ft", "mt"];

  const rangeOptions = (start, end, step) =>
    Array.from({ length: Math.ceil((end - start) / step + 1) }, (_, i) => start + i * step);

  const landSizeOptions = rangeOptions(1, 100, 5);
  const priceOptions = rangeOptions(1, 50, 3);
  const frontageOptions = rangeOptions(100, 1500, 200);
  const roadWidthOptions = rangeOptions(100, 1500, 200);

  const renderSelect = (options, placeholder, value, onChange) => (
    <select
      className="w-full border rounded px-2 py-1 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((val) => (
        <option key={val} value={val}>{val}</option>
      ))}
    </select>
  );

  const handleLocationChange = (e) => {
    const input = e.target.value;
    setLocationInput(input);
    const filtered = dummyData.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    setSuggestions(input ? filtered : []);
  };

  const handleSuggestionClick = (value) => {
    setLocationInput(value);
    setSuggestions([]);
  };

  const applyFilters = () => {
    const filtered = filterdata.filter((item) => { // Use originalList instead of filteredList
      const matchLocation = !locationInput || 
        (item.address && item.address.toLowerCase().includes(locationInput.trim().toLowerCase()));

      const matchCategory = !landCategory || 
        (item.land_category && item.land_category.toLowerCase() === landCategory.toLowerCase());

      const matchLandSize = 
        (!minLandSize || item.land_size >= parseFloat(minLandSize)) &&
        (!maxLandSize || item.land_size <= parseFloat(maxLandSize)) &&
        (!selectedLandUnit || 
          (item.unit_of_land && item.unit_of_land.toLowerCase() === selectedLandUnit.toLowerCase()));

      const matchPrice = 
        (!minPrice || item.land_price >= parseFloat(minPrice)) &&
        (!maxPrice || item.land_price <= parseFloat(maxPrice)) &&
        (!selectedPriceUnit || 
          (item.money_unit && item.money_unit.toLowerCase() === selectedPriceUnit.toLowerCase()));

      const matchFrontage = 
        (!minFrontage || item.Frontage >= parseFloat(minFrontage)) &&
        (!maxFrontage || item.Frontage <= parseFloat(maxFrontage)) &&
        (!selectedFrontageUnit || 
          (item.unit_of_frontage && item.unit_of_frontage.toLowerCase() === selectedFrontageUnit.toLowerCase()));

      const matchRoadWidth = 
        (!minRoadWidth || item.road_width >= parseFloat(minRoadWidth)) &&
        (!maxRoadWidth || item.road_width <= parseFloat(maxRoadWidth));

      return matchLocation && matchCategory && matchLandSize && matchPrice && matchFrontage && matchRoadWidth;
    });

    setListfilterlist(filtered); // Update filteredList in context

  };


  const resetFilters = () => {
    setLocationInput("");
    setLandCategory("Residential");
    setSelectedLandUnit("");
    setMinLandSize("");
    setMaxLandSize("");
    setSelectedPriceUnit("");
    setMinPrice("");
    setMaxPrice("");
    setMinFrontage("");
    setMaxFrontage("");
    setSelectedFrontageUnit("");
    setMinRoadWidth("");
    setMaxRoadWidth("");
    setRefreshFilter(prev => !prev); // Trigger refresh in parent component
    

  
 
  };
const applyFiltersinmobile =()=>{
  setLocationInput("");
  setLandCategory("Residential");
  setSelectedLandUnit("");
  setMinLandSize("");
  setMaxLandSize("");
  setSelectedPriceUnit("");
  setMinPrice("");
  setMaxPrice("");
  setMinFrontage("");
  setMaxFrontage("");
  setSelectedFrontageUnit("");
  setMinRoadWidth("");
  setMaxRoadWidth("");
  setIsopen(!iopen)
}


  return (
<>
      

<div className="hidden md:block w-full max-w-xs text-[#1c2b2d] bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">FILTERS</h2>
        <div className="flex gap-3">
        <button 
        onClick={resetFilters}
        className="text-[16px] font-bold py-1 px-3 bg-white border rounded hover:bg-[#D65F00] hover:text-white"
      >
        Reset
      </button>
          <button
            onClick={applyFilters}
            className="bg-[#1c2b2d] text-white font-bold py-1 text-sm px-2 rounded hover:bg-[#D65F00]"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Location Input */}
      <div className="mb-4 relative">
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          placeholder="All listed lands"
          value={locationInput}
          onChange={handleLocationChange}
          className="w-full border rounded px-3 py-2 text-sm"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-[#1c2b2d] rounded-xl shadow-md max-h-48 overflow-y-auto">
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item)}
                className="px-4 py-2 text-sm hover:bg-[#f2f2ff] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Land Size Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Land Size</label>
        <select
          value={selectedLandUnit}
          onChange={(e) => setSelectedLandUnit(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Select Unit</option>
          {landUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-3">
          {renderSelect(landSizeOptions, "Min", minLandSize, setMinLandSize)}
          {renderSelect(landSizeOptions, "Max", maxLandSize, setMaxLandSize)}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mt-1">Price / Acre</label>
        <select
          value={selectedPriceUnit}
          onChange={(e) => setSelectedPriceUnit(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Select Currency</option>
          {priceUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-3">
          {renderSelect(priceOptions, "Min", minPrice, setMinPrice)}
          {renderSelect(priceOptions, "Max", maxPrice, setMaxPrice)}
        </div>
      </div>

      {/* Road Width Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Road Width (ft)</label>
        <div className="flex gap-2">
          {renderSelect(roadWidthOptions, "Min", minRoadWidth, setMinRoadWidth)}
          {renderSelect(roadWidthOptions, "Max", maxRoadWidth, setMaxRoadWidth)}
        </div>
      </div>

      {/* Frontage Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Frontage</label>
        <select
          value={selectedFrontageUnit}
          onChange={(e) => setSelectedFrontageUnit(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Select Unit</option>
          {frontageUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-3">
          {renderSelect(frontageOptions, "Min", minFrontage, setMinFrontage)}
          {renderSelect(frontageOptions, "Max", maxFrontage, setMaxFrontage)}
        </div>
      </div>

      {/* Land Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Land Category</label>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setLandCategory(category)}
              className={`text-sm px-2 py-1 rounded border ${
                landCategory === category
                  ? "bg-[#D65F00] text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>

{

!iopen ? 
<div className=" absolute left-0 top-0 z-[999] w-full text-[#1c2b2d] bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">FILTERS</h2>
        <div className="flex gap-3">
        <button 
        onClick={resetFilters}
        className="text-[16px] font-bold py-1 px-3 bg-white border rounded hover:bg-[#D65F00] hover:text-white"
      >
        Reset
      </button>
          <button
            onClick={applyFiltersinmobile}
            className="bg-[#1c2b2d] text-white font-bold py-1 text-sm px-2 rounded hover:bg-[#D65F00]"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Location Input */}
      <div className="mb-4 relative">
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          placeholder="All listed lands"
          value={locationInput}
          onChange={handleLocationChange}
          className="w-full border rounded px-3 py-2 text-sm"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-[#1c2b2d] rounded-xl shadow-md max-h-48 overflow-y-auto">
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item)}
                className="px-4 py-2 text-sm hover:bg-[#f2f2ff] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Land Size Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Land Size</label>
        <select
          value={selectedLandUnit}
          onChange={(e) => setSelectedLandUnit(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Select Unit</option>
          {landUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-3">
          {renderSelect(landSizeOptions, "Min", minLandSize, setMinLandSize)}
          {renderSelect(landSizeOptions, "Max", maxLandSize, setMaxLandSize)}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mt-1">Price / Acre</label>
        <select
          value={selectedPriceUnit}
          onChange={(e) => setSelectedPriceUnit(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Select Currency</option>
          {priceUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-3">
          {renderSelect(priceOptions, "Min", minPrice, setMinPrice)}
          {renderSelect(priceOptions, "Max", maxPrice, setMaxPrice)}
        </div>
      </div>

      {/* Road Width Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Road Width (ft)</label>
        <div className="flex gap-2">
          {renderSelect(roadWidthOptions, "Min", minRoadWidth, setMinRoadWidth)}
          {renderSelect(roadWidthOptions, "Max", maxRoadWidth, setMaxRoadWidth)}
        </div>
      </div>

      {/* Frontage Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Frontage</label>
        <select
          value={selectedFrontageUnit}
          onChange={(e) => setSelectedFrontageUnit(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
        >
          <option value="">Select Unit</option>
          {frontageUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-3">
          {renderSelect(frontageOptions, "Min", minFrontage, setMinFrontage)}
          {renderSelect(frontageOptions, "Max", maxFrontage, setMaxFrontage)}
        </div>
      </div>

      {/* Land Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Land Category</label>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setLandCategory(category)}
              className={`text-sm px-2 py-1 rounded border ${
                landCategory === category
                  ? "bg-[#D65F00] text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>:""
 


}
    






    </>

  );
};

export default Filter;