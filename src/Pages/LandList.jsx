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
    <div className='mt-[50px] md:mt-[100px] sm:p-2 md:p-[15px] w-full'>
{/* Hero Image Section */}
<div className="relative h-[70vh] mb-16 overflow-hidden   rounded-xl">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent z-10">
        <div className="container mx-auto h-full flex items-center px-8">
          <div className="max-w-2xl space-y-6">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px  bg-white "></div>
              <span className="text-white uppercase tracking-widest text-sm">
              Landsathi.com
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl font-serif text-white leading-tight mb-4">
            Your Gateway to <br />
              <span className="text-amber-600"> Verified Land Opportunitiese</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-xl text-slate-200 font-light mb-8 max-w-xl">
              Discover timeless estates with unmatched legacy 
            </p>

            {/* CTA Button */}

            <a href="#topage">
            <button
         
              className="bg-amber-600 hover:bg-amber-700 h-14 px-10 rounded-lg flex items-center gap-3 text-lg shadow-xl"
            >
              <span>Explore </span>
              <ArrowRightOutlined />
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img src={xx2} alt="" className=' h-full w-full  object-cover  ' />
     
      {/* Decorative Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 mix-blend-soft-light opacity-20"
        style={{ backgroundImage: "url('/subtle-pattern.png')" }}
      ></div>
    </div>

    
{/* Top Rated Section */}
<div className='bg-white border border-slate-100 py-8  md:py-12 sm:px-6 px-2   md:px-12 rounded-3xl mb-8 sm:mx-4 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
  <div className='flex items-center gap-4 mb-8 md:mb-12'>
    <div 
      className='h-px w-16 hidden md:block'
      style={{ backgroundColor: '#D65F00' }}
    ></div>
    <Title 
      level={3} 
      className='text-2xl md:text-3xl font-serif !mb-0 !text-slate-800 !font-medium'
      style={{ borderLeft: '4px solid #D65F00', paddingLeft: '1rem' }}
    >
      Top Rated 
      <span className='ml-4' style={{ color: '#D65F00' }}>✦✦✦</span>
    </Title>
  </div>

  {/* Land Cards Carousel */}
  <div className="overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden">
  <div className="flex gap-2 sm:gap-4 sm:p-4 md:gap-6 md:justify-start md:items-center snap-x snap-mandatory">
    {dumy?.top_rate.map((f, i) => (
      <Link 
        to={`/Land/${f?.id}`} 
        key={f?.id}
        className="w-1/2 sm:w-[250px] md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"
      >
        <LandCard 
          acre={f?.land_size} 
          address={f?.address} 
          acre_price={f?.land_price}  
          img={f?.img}  
        /> 
      </Link>
    ))}
  </div>
</div>

</div>
{/* Featured Section */}
<div className='bg-slate-50 border border-slate-100 py-8 md:py-12 sm:px-6  md:px-12 rounded-3xl mb-8 mx-4 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
  <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12'>
    <div className='space-y-2'>

      <Title 
        level={3} 
        className='text-2xl md:text-3xl font-serif !text-slate-800 !font-medium'
        style={{ borderLeft: '4px solid #D65F00', paddingLeft: '1rem' }}
      >
        Featured Listing
      </Title>
    </div>
 
  </div>




  <div  className='overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden'>
  <div className="flex gap-2 sm:gap-4 sm:p-4 md:gap-6 md:justify-start md:items-center snap-x snap-mandatory">
    {dumy?.featured.map((f, i) => (
    <Link 
    to={`/Land/${f?.id}`} 
    key={f?.id}
    className="w-1/2 sm:w-[250px] md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"  
  >  
    <LandCard 
      acre={f?.land_size} 
      address={f?.address} 
      acre_price={f?.land_price}  
      img={f?.img}  
    /> 
  </Link>
    ))}
  </div>
  </div>
</div>

{/* serach section */}

<button 
  className="block md:hidden text-[16px] font-bold  mx-3 py-1 px-3 bg-white border rounded hover:bg-[#D65F00] hover:text-white"
onClick={() => setIsopen(!isopen)}
>
  {
    isopen ? <FilterOutlined/>:<CloseOutlined />
  }
 
</button>
  
  <section 
  
  
  className='bg-white border relative z-0 border-slate-100 py-8 md:py-12 sm:px-6 md:px-0 rounded-3xl mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300  flex   justify-around  '>
    <Filter filterdata={Listfilterlist}  setRefreshFilter={setRefreshFilter}  iopen={isopen}  setIsopen={setIsopen} />
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
        <div className='flex items-center gap-4 mb-6 md:mb-8'>
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