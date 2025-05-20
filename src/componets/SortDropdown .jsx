import { useState } from 'react';
import { useListFilterContext } from '../Context/ListFilter';

const SortDropdown = ({margin,margin1}) => {
const [selectedSort, setSelectedSort] = useState('Relevance');
const [isOpen, setIsOpen] = useState(false);
 const { Listfilterlist, setListfilterlist } = useListFilterContext();

 const unitMultiplier = {
  Crore: 10000000,
  Lakh: 100000,
  Thousand: 1000,
  // Add more units if needed
};


  const handelchange = (sortValue) => {
    let sortedList = [...Listfilterlist]; // Clone the array to avoid mutating state directly
     const getNumericPrice = (item) => {
    const unitMultiplier = {
      Crore: 10000000,
      Lakh: 100000,
      Thousand: 1000,
      Rupee: 1, // default
    };
    const multiplier = unitMultiplier[item.money_unit] || 1;
    return item.land_price * multiplier;
  };

    if (sortValue === 'price_low_high') {
 

   sortedList.sort((a, b) => getNumericPrice(a) - getNumericPrice(b));

    } else if (sortValue === 'price_high_low') {
    sortedList.sort((a, b) => getNumericPrice(b) - getNumericPrice(a));
    } else if (sortValue === 'landsize_low_high') {
      sortedList.sort((a, b) => a.land_size - b.land_size);
    } else if (sortValue === 'landsize_high_low') {
      sortedList.sort((a, b) => b.land_size - a.land_size);
    }

    setListfilterlist(sortedList);
  };

  const sortOptions = [

    { label: 'Price: Low to High', value: 'price_low_high' },
    { label: 'Price: High to Low', value: 'price_high_low' },
    { label: 'Land Size: Low to High', value: 'landsize_low_high' },
    { label: 'Land Size: High to Low', value: 'landsize_high_low' },
  ];

  return (
    <div className={`flex  mr-[${margin}px]   mr-[${margin1}px]  items-center gap-2 font-medium text-gray-700 `}>

      <div className="relative group">
        <div className="relative inline-block">
  <button
    onMouseEnter={() =>  {
        setIsOpen(true)

    }}
    onMouseLeave={() => setIsOpen(false)}
    className="px-4 py-2 border rounded-md bg-white hover:border-gray-400 transition-colors"
  >
    {selectedSort}
  </button>
  
  <span
    className="absolute -top-2 left-2 bg-white text-gray-600 text-[10px] px-1"
    style={{ pointerEvents: 'none' }} // optional: makes sure it doesn't block hover
  >
    Sort By
  </span>
</div>

        {/* Dropdown */}
        <div 
          className={`absolute top-full right-0  z-30  w-48 bg-white border rounded-md shadow-lg 
            transition-opacity duration-200 ${isOpen ? 'visible' : 'invisible'}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {sortOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelectedSort(option.label);
                setIsOpen(false);
                 handelchange(option.value);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;