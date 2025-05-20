import React, { useState } from 'react';
import {useAppContext}  from "../Context/Poperty_context"
import { useListFilterContext } from '../Context/ListFilter';


const Filter = ({filterdata , setRefreshFilter , iopen ,setIsopen }) => {
  const {  Listfilterlist, setListfilterlist } = useListFilterContext(); // Updated context usage
  const [landCategory, setLandCategory] = useState("");
  const [Blockmain, setBlockmain] = useState("");
  const { property ,maindata  } = useAppContext();
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
const [selectdumy, setSelectdumy] = useState("")

  const dummyData = [
    "Haryana", "New Delhi", "Delhi", "Punjab", "Uttar pradesh", 
    , "Faridabad", "Noida", "Ghaziabad", "Greater Noida", 
    "Sonipat", "Panipat", "Ambala", "Kurukshetra", "Sisana","Gurugram"
  ];

  const [suggestions, setSuggestions] = useState([]);

  const categories = [
  { value: "residential", name: "Residential" },
  { value: "commercial", name: "Commercial" },
  { value: "agricultural", name: "Industrial / Agricultural" },
  { value: "institutional", name: "Institutional" },
  { value: "mixed-use", name: "Mixed-Use" },
  { value: "recreational-green-zone", name: "Recreational / Green Zone" },
];



   const blockmain = [
    "Top Rated",
    "Featured Listing",

  ];


  const frontageUnits = ["ft", "mt"];

  const rangeOptions = (start, end, step) =>
    Array.from({ length: Math.ceil((end - start) / step + 1) }, (_, i) => start + i * step);

// const priceUnitToCrore = {
//   "Thousand": 0.0001,
//   "Lakh": 0.01,
//   "Crore": 1,
// };

// const landUnitToAcre = {
//   "Sq.ft": 0.0000229568,
//   "Sq.yards": 0.00020661157,
//   "Bigha": 0.625,
//   "Acre": 1,
//   "Hectare": 2.47,
// };









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
    const filtered = filterdata.filter((item ,index) => { 



      
      // Use originalList instead of filteredList
      const matchLocation = !locationInput || 
        (item.address && item.address.toLowerCase().includes(locationInput.trim().toLowerCase()));

      const matchCategory = !landCategory || 
        (item.land_category && item.land_category.toLowerCase() === landCategory.toLowerCase());

      const matchLandSize = 
        (!minLandSize || item.land_size >= parseFloat(minLandSize)) &&
        (!maxLandSize || item.land_size <= parseFloat(maxLandSize)) 
        

          


  const matchUnitOfLand = 
  !selectedLandUnit || 
  item.unit_of_land?.toLowerCase() === selectedLandUnit.toLowerCase();




       const matchPrice = 
    (!minPrice || item.land_price >= parseFloat(minPrice)) &&
    (!maxPrice || item.land_price <= parseFloat(maxPrice)) 


const matchUnitOfprice = 
  !selectedPriceUnit || 
  item.money_unit?.toLowerCase() === selectedPriceUnit.toLowerCase();


      const matchFrontage = 
        (!minFrontage || item.Frontage >= parseFloat(minFrontage)) &&
        (!maxFrontage || item.Frontage <= parseFloat(maxFrontage)) &&
        (!selectedFrontageUnit || 
          (item.unit_of_frontage && item.unit_of_frontage.toLowerCase() === selectedFrontageUnit.toLowerCase()));

      const matchRoadWidth = 
        (!minRoadWidth || item.road_width >= parseFloat(minRoadWidth)) &&
        (!maxRoadWidth || item.road_width <= parseFloat(maxRoadWidth));

    // REMOVE matchPrice and matchUnitOfPrice

   

 


      return  matchUnitOfprice  && matchPrice  && matchRoadWidth   && matchUnitOfLand  && matchLandSize  && matchLocation  && matchCategory &&  matchFrontage ;
    });

    setListfilterlist(filtered); // Update filteredList in context
    setIsopen(true)

  };


  const resetAllFilters = () => {
  setLocationInput("");
  setLandCategory("");
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
  setBlockmain("");
  setRefreshFilter(prev => !prev);
};

const resetFilters = () => {
  resetAllFilters();
};

const resetfilterinmobile = () => {
  resetAllFilters();
  setIsopen(!iopen);
};

 


  return (
  <>
      
 <div className="hidden md:block w-full max-w-xl  ">
    <div
      style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}
      className="sticky top-4 max-h-[98vh] overflow-y-auto text-[#1c2b2d] bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100"
    >
      {/* Header */}
      <div className="flex justify-between items-center gap-5 mb-6 pb-4 border-b-2 border-gray-100">
        <h2 className="text-xl font-black tracking-tight">FILTERS</h2>
        <div className="flex gap-2">
          <button
            onClick={resetFilters}
            className="text-sm font-bold py-2 px-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-[#D65F00] hover:text-white hover:border-transparent transition-colors"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="bg-[#1c2b2d] text-sm font-bold py-2 px-4 text-white rounded-lg hover:bg-[#D65F00] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Blockmain Buttons */}
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-2">
          {blockmain.map((category) => (
            <button
              key={category}
              onClick={() => {
                setBlockmain(category);
                if (category === "Top Rated") {
                  setListfilterlist(maindata.top_rate);
                } else {
                  setListfilterlist(maindata.featured);
                }
              }}
              className={`text-sm px-4 py-2 rounded-lg border-2 transition-colors ${
                Blockmain === category
                  ? "bg-[#D65F00] text-white border-[#D65F00]"
                  : "bg-white text-[#1c2b2d] border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      

      {/* Location Input */}
      <div className="mb-6 relative">
        <label className="block text-sm font-bold mb-2">Location</label>
        <input
          type="text"
          placeholder="All listed lands"
          value={locationInput}
          onChange={handleLocationChange}
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1c2b2d] focus:ring-0"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 mt-2 z-50 w-full bg-white border-2 border-[#1c2b2d] rounded-lg shadow-xl max-h-48 overflow-y-auto">
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item)}
                className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer border-b last:border-b-0 border-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

     <div className="mb-6 pb-4 border-b-2 border-gray-100">
  <label className="block text-sm font-bold mb-3">Land Size</label>
  <select
    value={selectedLandUnit}
    onChange={(e) => setSelectedLandUnit(e.target.value)}
    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 text-sm mb-4 focus:border-[#1c2b2d]"
  >
   <option value="">Select Unit</option>
  <option value="Sq. Yd.">Sq. Yd.</option>
  <option value="Acre">Acre</option>
  <option value="Hectare">Hectare</option>
    {/* Add or remove units as needed */}
  </select>
  <div className="grid grid-cols-2 gap-3">
    {renderSelect(landSizeOptions, "Min", minLandSize, setMinLandSize, true)}
    {renderSelect(landSizeOptions, "Max", maxLandSize, setMaxLandSize, true)}
  </div>
</div>

{/* Price Section */}
<div className="mb-6 pb-4 border-b-2 border-gray-100">
  <label className="block text-sm font-bold mb-3">Price</label>
  <select
    value={selectedPriceUnit}
    onChange={(e) => setSelectedPriceUnit(e.target.value)}
    className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 text-sm mb-4 focus:border-[#1c2b2d]"
  >
    <option value="">Select Unit</option>
    <option value="Thousand">Thousand</option>
    <option value="Lakh">Lakh</option>
    <option value="Crore">Crore</option>

    {/* Add or remove currency units as needed */}
  </select>
  <div className="grid grid-cols-2 gap-3">
    {renderSelect(priceOptions, "Min", minPrice, setMinPrice, true)}
    {renderSelect(priceOptions, "Max", maxPrice, setMaxPrice, true)}
  </div>
</div>


      {/* Road Width */}
      <div className="mb-6 pb-4 border-b-2 border-gray-100">
        <label className="block text-sm font-bold mb-3">Road Width (ft)</label>
        <div className="grid grid-cols-2 gap-3">
          {renderSelect(roadWidthOptions, "Min", minRoadWidth, setMinRoadWidth, true)}
          {renderSelect(roadWidthOptions, "Max", maxRoadWidth, setMaxRoadWidth, true)}
        </div>
      </div>

      {/* Frontage */}
      <div className="mb-6">
        <label className="block text-sm font-bold mb-3">Frontage</label>
        <select
          value={selectedFrontageUnit}
          onChange={(e) => setSelectedFrontageUnit(e.target.value)}
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 text-sm mb-4 focus:border-[#1c2b2d]"
        >
          <option value="">Select Unit</option>
          {frontageUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-2 gap-3">
          {renderSelect(frontageOptions, "Min", minFrontage, setMinFrontage, true)}
          {renderSelect(frontageOptions, "Max", maxFrontage, setMaxFrontage, true)}
        </div>
      </div>

      {/* Land Category */}
      <div className="mb-2">
        <label className="block text-sm font-bold mb-3">Land Category</label>
      <div className="grid grid-cols-2 gap-2">
  {categories.map((category) => (
    <button
      key={category.value}
      onClick={() => {
        setLandCategory(category.value);     // still used for filters
        setSelectdumy(category.name);        // still available if needed for UI
      }}
      className={`text-sm px-4 py-2 rounded-lg border-2 transition-colors ${
        landCategory === category.value       // <-- tracking by value now
          ? "bg-[#D65F00] text-white border-[#D65F00]"
          : "bg-white text-[#1c2b2d] border-gray-200 hover:bg-gray-50"
      }`}
    >
      {category.name}
    </button>
  ))}
</div>

      </div>
          <div className= "flex  items-end  justify-end gap-3  mt-2">
          <button
            onClick={resetFilters}
            className="text-sm font-bold py-2 px-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-[#D65F00] hover:text-white hover:border-transparent transition-colors"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="bg-[#1c2b2d] text-sm font-bold py-2 px-4 text-white rounded-lg hover:bg-[#D65F00] transition-colors"
          >
            Apply
          </button>
        </div>
    </div>
  
  </div>

{

!iopen ? 
<div  style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className=" absolute  left-0 top-0 z-[999] w-full text-[#1c2b2d] bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
    <h2 className="text-xl font-black tracking-tight">FILTERS</h2>
    <div className="flex gap-2">
      <button 
        onClick={resetFilters}
        className="text-sm font-bold py-2 px-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-[#D65F00] hover:text-white hover:border-transparent transition-colors"
      >
        Reset
      </button>
      <button
        onClick={applyFilters}
        className="bg-[#1c2b2d] text-sm font-bold py-2 px-4 text-white rounded-lg hover:bg-[#D65F00] transition-colors"
      >
        Apply
      </button>
    </div>
  </div>

  {/* Location Input */}
  <div className="mb-6 relative">
    <label className="block text-sm font-bold mb-2">Location</label>
    <input
      type="text"
      placeholder="All listed lands"
      value={locationInput}
      onChange={handleLocationChange}
      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1c2b2d] focus:ring-0"
    />
    {suggestions.length > 0 && (
      <ul className="absolute top-full left-0 mt-2 z-50 w-full bg-white border-2 border-[#1c2b2d] rounded-lg shadow-xl max-h-48 overflow-y-auto">
        {suggestions.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(item)}
            className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer border-b last:border-b-0 border-gray-100"
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Filter Sections */}
  {[
    { 
      label: "Land Size", 
      unit: selectedLandUnit, 
      setUnit: setSelectedLandUnit,
      units: landUnits,
      min: minLandSize,
      setMin: setMinLandSize,
      max: maxLandSize,
      setMax: setMaxLandSize,
      options: landSizeOptions
    },
    {
      label: "Price",
      unit: selectedPriceUnit,
      setUnit: setSelectedPriceUnit,
      units: priceUnits,
      min: minPrice,
      setMin: setMinPrice,
      max: maxPrice,
      setMax: setMaxPrice,
      options: priceOptions
    }
  ].map((section, idx) => (
    <div key={idx} className="mb-6 pb-4 border-b-2 border-gray-100">
      <label className="block text-sm font-bold mb-3">{section.label}</label>
      <select
        value={section.unit}
        onChange={(e) => section.setUnit(e.target.value)}
        className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 text-sm mb-4 focus:border-[#1c2b2d]"
      >
        <option value="">Select Unit</option>
        {section.units.map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
      <div className="grid grid-cols-2 gap-3">
        {renderSelect(section.options, "Min", section.min, section.setMin, true)}
        {renderSelect(section.options, "Max", section.max, section.setMax, true)}
      </div>
    </div>
  ))}

  {/* Road Width Filter */}
  <div className="mb-6 pb-4 border-b-2 border-gray-100">
    <label className="block text-sm font-bold mb-3">Road Width (ft)</label>
    <div className="grid grid-cols-2 gap-3">
      {renderSelect(roadWidthOptions, "Min", minRoadWidth, setMinRoadWidth, true)}
      {renderSelect(roadWidthOptions, "Max", maxRoadWidth, setMaxRoadWidth, true)}
    </div>
  </div>

  {/* Frontage Filter */}
  <div className="mb-6">
    <label className="block text-sm font-bold mb-3">Frontage</label>
    <select
      value={selectedFrontageUnit}
      onChange={(e) => setSelectedFrontageUnit(e.target.value)}
      className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 text-sm mb-4 focus:border-[#1c2b2d]"
    >
      <option value="">Select Unit</option>
      {frontageUnits.map(unit => (
        <option key={unit} value={unit}>{unit}</option>
      ))}
    </select>
    <div className="grid grid-cols-2 gap-3">
      {renderSelect(frontageOptions, "Min", minFrontage, setMinFrontage, true)}
      {renderSelect(frontageOptions, "Max", maxFrontage, setMaxFrontage, true)}
    </div>
  </div>

  {/* Land Category Filter */}
  <div className="mb-2">
    <label className="block text-sm font-bold mb-3">Land Category</label>
    <div className="grid grid-cols-2 gap-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setLandCategory(category)}
          className={`text-sm px-4 py-2 rounded-lg border-2 transition-colors
            ${landCategory === category 
              ? "bg-[#D65F00] text-white border-[#D65F00]"
              : "bg-white text-[#1c2b2d] border-gray-200 hover:bg-gray-50"}`}
        >
          {category}
        </button>
      ))}
    </div>
  </div> 
    </div>   :""
 


}
    






    </>

  );
};

export default Filter;