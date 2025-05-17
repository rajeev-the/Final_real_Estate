import { useState } from 'react';

const SortDropdown = () => {
  const [selectedSort, setSelectedSort] = useState('Relevance');
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { label: 'Price: Low to High', value: 'price_low_high' },
    { label: 'Price: High to Low', value: 'price_high_low' },
    { label: 'Land Size: Low to High', value: 'landsize_low_high' },
    { label: 'Land Size: High to Low', value: 'landsize_high_low' },
  ];

  return (
    <div className="flex  mr-[60px] items-center gap-2 font-medium text-gray-700">

      <div className="relative group">
        <div className="relative inline-block">
  <button
    onMouseEnter={() => setIsOpen(true)}
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