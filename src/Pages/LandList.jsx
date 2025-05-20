import React, { useState ,useEffect } from 'react'



import { Typography } from 'antd';
const { Title } = Typography;
import { useListFilterContext } from '../Context/ListFilter';
import LandCard from '../componets/LandCard';

import { Link } from 'react-router-dom';
import { ArrowRightOutlined ,CloseOutlined  ,FilterOutlined  } from '@ant-design/icons';
import xx2 from "../assets/mmm.jpg"
import {useAppContext } from "../Context/Poperty_context"
import Filter from '../componets/Filter';
import SortDropdown from '../componets/SortDropdown ';







const LandList = () => {

  const [dumy , setDumy] = useState()
    const { property ,maindata  } = useAppContext();
      const [selectedLocation, setSelectedLocation] = useState("Haryana");
        const { Listfilterlist, setListfilterlist } = useListFilterContext();
        const [refreshFilter, setRefreshFilter] = useState(false);
        const [isopen , setIsopen] = useState(true)

 
   

  useEffect(() => {
   

    
    setListfilterlist(property.filter((et)=>et.state == selectedLocation))
    setDumy(maindata)

  }, [property,maindata ,selectedLocation,refreshFilter ]);



  
  
  
  const locations = ["Haryana", "Delhi", "Punjab", "Uttar Pradesh" ,"Rajasthan" ];

  return (
    <div className='mt-[90px] md:mt-[50px] sm:p-2 md:p-[15px] w-full'>


<div className='flex   justify-between     items-center'>
     
     <button 
  className="block md:hidden text-[16px] font-bold  mx-3 py-1 px-3 bg-white border rounded hover:bg-[#D65F00] hover:text-white"
onClick={() => setIsopen(!isopen)}
>
  {
    isopen ? <FilterOutlined/>:<CloseOutlined />
  }
 
</button>

        <div className='block md:hidden'>
  <SortDropdown  margin={0} margin1={10} />
</div>




</div>


  
  <section 
  
  
  className='bg-white border relative z-0 border-slate-100 py-2 md:py-12 sm:px-6 md:px-0 rounded-3xl mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300  flex    justify-around  '>

<div className="sticky top-4 self-start max-h-[100vh]  ">
  <Filter 
    filterdata={Listfilterlist}  
    setRefreshFilter={setRefreshFilter}  
    iopen={isopen}  
    setIsopen={setIsopen} 
  />
</div>


   
    <div className='w-full '>

  <div className="flex flex-wrap justify-center gap-3 md:gap-2 lg:gap-20 mb-6 sm:p-5">
  {locations.map((name, index) => (
    <button
   
      key={index}
      onClick={() => setSelectedLocation(name)}
      className={`  text-sm md:text-lg font-medium py-1  px-3   md:px-8 rounded-full transition-all duration-300 
        ${
          selectedLocation === name
            ? "bg-[#D65F00] text-white shadow-lg scale-105"
            : "  bg-[#36383D]    hover:text-xl text-[white]   "
        }`}
    >
      {name}
    </button>
  ))}
</div>

  <div className='flex flex-col gap-8 md:gap-12'>
   
      <div  className='flex flex-col group'>
        <div className='flex items-center   justify-between   gap-4 mb-6 md:mb-8'>
          <div className='flex items-center  gap-4'>
            <div className='hidden md:block w-12 h-px bg-[#826CB0]'></div>
          <Title level={3} 
            className='text-xl md:text-2xl font-serif !mb-0 !text-slate-800 !font-medium'
            style={{
              borderLeft: '4px solid #826CB0',
              paddingLeft: '1rem',
              letterSpacing: '0.05em'
            }}>
            {selectedLocation}
            <span className='ml-3 text-[#826CB0] text-lg'>✧</span>
          </Title>


          </div>
          
        <div className='hidden md:block'>
  <SortDropdown  margin={60} margin1={0} />
</div>

        


        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3  w-full max-w-screen-2xl mx-auto px-4">


  {Listfilterlist.map(property => (
    <Link 
      to={`/Land/${property.id}`} 
      key={property.id}
      className="w-full min-w-0 hover:scale-[99%] transition-transform"  
    >  
      <LandCard 
        acre={property.land_size} 
        address={property.address} 
        acre_price={property.land_price}  
        img={property.img}  
        Unit_of_land={property.unit_of_land}
        Money_unit={property.money_unit}
        className="w-full h-full"

      /> 
    </Link>
  ))}
</div>



        
        <div className='mt-8 md:mt-12 border-t border-slate-100 group-last:border-0'></div>
      </div>

  </div>
  </div>



</section>
</div>

  )
}

export default LandList