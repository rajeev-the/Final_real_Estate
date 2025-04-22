import React,{useState} from 'react'
import { useFilterContext } from '../Context/FilterContext'
import { useAppContext } from '../Context/Poperty_context'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate ,Link } from 'react-router-dom'

import { Listbox } from '@headlessui/react'



const SerachFilter = ({searchcart}) => {

  const showSuccessToast = (data1) => {
    toast.success(data1, {
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
  
  const price = [
    { label: "Price Range", value: null },
    { label: "0-5 Cr", value: [0, 5] },
    { label: "5-7 Cr", value: [5, 7] },
    { label: "7-12 Cr", value: [7, 12] },
    { label: "12+ Cr", value: [12, null] },
  ];
  
  const { property } = useAppContext();
  const navigate = useNavigate();
  
  const Zone = [
    { label: "Zone Area", value: null },
    { label: "Orange", value: "Orange" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];
  
  const propertyTypes = [
    { label: "Land Type", value: null },
    { label: "Residential", value: "Residential" },
    { label: "Industrial", value: "Industrial" },
    { label: "Agricultural", value: "Agricultural" },
    { label: "Institutional", value: "Institutional" },
  ];
  
  const [selected, setSelected] = useState(propertyTypes[0]);
  const [selected2, setSelected2] = useState(price[0]);
  const [selected3, setSelected3] = useState(Zone[0]);
  const [searchlist, setsearchlist] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  const buydata = [
    { label: "Buy", value: "sale" },
    { label: "Lenses", value: "lease" },
  ];
  
  const [buyorlesese, setbuyorlesese] = useState(buydata[0]);
  const { filterlist, setfilterlist } = useFilterContext();
  
  const dummyData = [
    "Haryana",
    "New Delhi",
    "Delhi",
    "Punjab",
    "Uttar pradesh",
    "Gurgaon",
    "Faridabad",
    "Noida",
    "Ghaziabad",
    "Greater Noida",
    "Sonipat",
    "Panipat",
    "Ambala",
    "Kurukshetra",
    "Sisana"
  ];
  
  const getfilterdata = (land_category, acre_price, zone, address, sale_or_lease) => {
    const matchLandCategory =
      !selected?.value ||
      (land_category && land_category.toLowerCase() === selected.value.toLowerCase());
  
    const matchZone =
      !selected3?.value ||
      (zone && zone.toLowerCase() === selected3.value.toLowerCase());
  
    const matchPrice =
      !selected2?.value || (
        acre_price !== undefined &&
        acre_price >= selected2.value[0] &&
        (selected2.value[1] === null || acre_price <= selected2.value[1])
      );
  
    const matchAddress = !searchlist || (
      address && address.toLowerCase().split(" ").some(word =>
        word.includes(searchlist.toLowerCase())
      )
    );
  
    const matchBuyorlease =
      !buyorlesese?.value ||
      (sale_or_lease && sale_or_lease.toLowerCase().includes(buyorlesese.value.toLowerCase()));
  
    return matchLandCategory && matchZone && matchPrice && matchAddress && matchBuyorlease;
  };
  
  const handleFilterChange = () => {
    setfilterlist([]);
  
    try {
      if (!property || !Array.isArray(property)) {
        console.error('Property data is invalid:', property);
        return;
      }
  
      const filteredData = property.filter((item) =>
        getfilterdata(item.land_category, item.acre_price, item.zone, item.address, item.sale_or_lease)
      );
  
      if (!setfilterlist) {
        console.error('setfilterlist is undefined');
        return;
      }
  
      setfilterlist(filteredData);
  
      setTimeout(() => {
        navigate('search');
      }, 0);
  
      setsearchlist('');
      setSuggestions([]);
      setSelected(propertyTypes[0]);
      setSelected2(price[0]);
      setSelected3(Zone[0]);
      setbuyorlesese(buydata[0]);
    } catch (error) {
      console.error('Error in handleFilterChange:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const input = e.target.value;
    setsearchlist(input);
  
    if (input.length > 0) {
      const filtered = dummyData.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setsearchlist(suggestion);
    setSuggestions([]);
  };
  
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationData = await getCityCountryFromCoords(latitude, longitude);
          const { city, state } = locationData;
  
          const match = dummyData.find(item =>
            item.toLowerCase() === city?.toLowerCase() ||
            item.toLowerCase() === state?.toLowerCase()
          );
  
          if (match) {
            const filteredData = property.filter((item) =>
              item.address.toLowerCase().includes(match.toLowerCase())
            );
  
            if (!setfilterlist) {
              console.error('setfilterlist is undefined');
              return;
            }
  
            setfilterlist(filteredData);
            showSuccessToast(`Exploring Land in ${match}`);
  
            setTimeout(() => {
              navigate('search');
            }, 0);
          } else {
            console.log("No match found in dummyData ❌");
          }
        },
        (err) => {
          console.log("Location access denied or unavailable.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  
  const getCityCountryFromCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
  
      const cityName =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        data.address.state;
  
      return {
        city: cityName,
        state: data.address.state,
      };
    } catch (err) {
      console.log("Failed to reverse geocode location.");
      return {};
    }
  };
  

  return (
    <>
    {/* Search Container - Adjusted positioning and padding for mobile */}
    <div
      ref={searchcart}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 sm:px-6 z-10"
    >
      {/* Tabs Navigation - Made scrollable on mobile */}
      <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto scrollbar-hide">
        {['Buy', 'Lease', 'New Launch'].map((tab) => (
          <button
            key={tab}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
              tab === buyorlesese
                ? 'bg-[#D65F00] text-white shadow-md'
                : 'bg-white/80 text-gray-800 hover:bg-white shadow-sm'
            }`}
            onClick={() => setbuyorlesese(tab)}
          >
            {tab}
          </button>
        ))}
        <Link  to={'/agents'}   className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-200 bg-white/80 text-gray-800 hover:bg-white shadow-sm">
        Partners
        </Link>
      </div>

      {/* Main Search Card - Adjusted padding and layout for mobile */}
      <div className="bg-black/50 backdrop-blur-md rounded-xl sm:rounded-3xl p-4 sm:p-6">
        {/* Search Input */}
        <div className="flex flex-col gap-4 mb-4 sm:mb-6">
          <div className="relative w-full">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center bg-white rounded-xl p-2">
              <input
                type="text"
                onChange={handleInputChange}
                value={searchlist}
                placeholder="Enter location, landmark or city"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 border-none bg-transparent outline-none"
              />
              <button 
                onClick={handleFilterChange}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D65F00] to-[#FF8C42] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base hover:bg-[#3A1F6B] transition-colors"
              >
                Search
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-gray-200 rounded-xl shadow-md max-h-48 sm:max-h-60 overflow-y-auto">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-[#f2f2ff] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Advanced Filters - Stacked on mobile */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Property Type Dropdown */}
          <Listbox value={selected} onChange={setSelected}>
  {({ open }) => (
    <div className="relative">
      <Listbox.Button className="w-full rounded-xl border border-gray-300 bg-white sm:py-3  py-2 px-4 text-left text-[#1C2B2D] shadow-sm focus:outline-none flex items-center justify-between">
      <span className="text-[10px] sm:text-[11px] md:text-base">{selected.label}</span>

        <span className="pointer-events-none flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-y-auto rounded-xl bg-white shadow-lg z-[999] text-[10px] sm:text-[11px] md:text-base scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {propertyTypes.map((type, index) => (
          <Listbox.Option
            key={index}
            value={type}
            className={({ active, selected }) =>
              `cursor-pointer select-none sm:py-2  sm:px-4  px-2 py-1  ${
                active ? 'bg-[#D65F00] text-white' : 'text-gray-700'
              } ${selected ? 'font-semibold' : ''}`
            }
          >
            {type.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  )}
</Listbox>               

          {/* Price Range Dropdown */}
          <Listbox value={selected2} onChange={setSelected2}>
  <div className="relative">
    <Listbox.Button className="w-full rounded-xl border border-gray-300 bg-white sm:py-3 py-2  px-4 text-left text-[#1C2B2D] shadow-sm focus:outline-none flex-row    justify-center  items-center">
       <span className= 'text-[10px] sm:text-[11px] md:text-base  '>{selected2.label}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3   ">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className={`
    h-4 w-4 
    sm:h-5 sm:w-5 
    text-[#D65F00] 
    transform transition-transform duration-200 
    ${open ? 'rotate-180' : ''}
  `}
  viewBox="0 0 20 20"
  fill="currentColor"
  aria-hidden="true"
>
  <path
    fillRule="evenodd"
    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    clipRule="evenodd"
  />
</svg>

      </span>
    </Listbox.Button>
    <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-y-auto rounded-xl bg-white shadow-lg z-[999] text-[10px] sm:text-[11px] md:text-base scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
  {price.map((type, index) => (
    <Listbox.Option
      key={index}
      value={type}
      className={({ active }) =>
        `cursor-pointer select-none px-2 py-1 sm:px-4 sm:py-2 transition-colors duration-150 ${
          active ? 'bg-[#D65F00] text-white' : 'text-gray-700'
        }`
      }
    >
      {type.label}
    </Listbox.Option>
  ))}
</Listbox.Options>


  </div>
</Listbox>

          {/* Near Me and Zone Selection - Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-2    ">
          <button className="hidden sm:flex flex-1 items-center justify-center gap-2 sm:gap-4 bg-gradient-to-r from-[#D65F00] to-[#FF8C42]
 text-white py-3 sm:py-4 px-2 rounded-xl text-xs sm:text-sm">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 sm:h-5 sm:w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
  <span className="font-semibold tracking-wide">Near Me</span>
</button>


            <Listbox value={selected3} onChange={setSelected3}>
  {({ open }) => (
    <div className="relative">
      <Listbox.Button className="w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-left text-[#1C2B2D] shadow-sm focus:outline-none flex items-center justify-between">
        <span className=' text-[10px] sm:text-[11px] md:text-base'>{selected3.label}</span>
        <span className="pointer-events-none flex items-center ">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className={`
    h-4 w-4 
    sm:h-5 sm:w-5 
    text-[#D65F00] 
    transform transition-transform duration-200 
    ${open ? 'rotate-180' : ''}
  `}
  viewBox="0 0 20 20"
  fill="currentColor"
  aria-hidden="true"
>
  <path
    fillRule="evenodd"
    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    clipRule="evenodd"
  />
</svg>

        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-y-auto rounded-xl bg-white shadow-lg z-[999] text-[10px] sm:text-[11px] md:text-base scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {Zone.map((type, index) => (
          <Listbox.Option
            key={index}
            value={type}
            className={({ active, selected }) =>
              `cursor-pointer select-none sm:py-3  sm:px-6  px-2  py-1 text-[#1C2B2D] transition-colors ${
                active || selected ? 'bg-[#D65F00]/10' : 'hover:bg-gray-50'
              } ${selected ? 'font-semibold text-[#D65F00]' : ''}`
            }
          >
            {type.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  )}
</Listbox>

          </div>
          

        </div>
        <button   onClick={getCurrentLocation} className="w-full mt-2 flex items-center justify-center gap-1 bg-gradient-to-r from-[#D65F00] to-[#FF8C42] text-white rounded-xl text-xs py-2 px-3 sm:hidden">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
  <span className="font-semibold tracking-wide">Near Me</span>
</button>


      </div>
    </div>
  </>
  )
}

export default SerachFilter