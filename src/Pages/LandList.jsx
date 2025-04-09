import React, { useState ,useEffect } from 'react'
import { Input, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import CustomCard  from '../componets/CustomCard'
import { Typography } from 'antd';
const { Title } = Typography;

import LandCard from '../componets/LandCard';

import { Link } from 'react-router-dom';
import { ArrowRightOutlined ,SearchOutlined } from '@ant-design/icons';
import xx2 from "../assets/mmm.jpg"
import {useAppContext } from "../Context/Poperty_context"






const LandList = () => {

  const [data, setData] = useState(); // ✅ Initialize as empty array
  const [dumy , setDumy] = useState()
    const { property ,maindata  } = useAppContext();
      const [selectedLocation, setSelectedLocation] = useState("Haryana");
    

  useEffect(() => {
   

    
    setData(property.filter((et)=>et.state == selectedLocation))
    setDumy(maindata)

  }, [property,maindata ,selectedLocation]);


  const groupedProperties = (data || []).reduce((acc, property) => {
    if (property?.state) {  // Ensure state exists
      if (!acc[property.state]) {
        acc[property.state] = [];
      }
      acc[property.state].push(property);
    }
    return acc;
  }, {});
  

  
  const locations = ["Haryana", "Delhi", "Punjab", "Uttar pradesh"];

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
              <div className="w-16 h-px bg-amber-600"></div>
              <span className="text-amber-600 uppercase tracking-widest text-sm">
              Landsathi
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
      style={{ backgroundColor: '#826CB0' }}
    ></div>
    <Title 
      level={3} 
      className='text-2xl md:text-3xl font-serif !mb-0 !text-slate-800 !font-medium'
      style={{ borderLeft: '4px solid #826CB0', paddingLeft: '1rem' }}
    >
      Top Rated Estates
      <span className='ml-4' style={{ color: '#826CB0' }}>✦✦✦</span>
    </Title>
  </div>

  {/* Land Cards Carousel */}
  <div className="overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden">
    <div className="grid grid-cols-2 sm:gap-4 gap-1  sm:p-4 md:flex md:flex-nowrap md:gap-6 md:justify-start md:items-center min-w-min">
      {dumy?.top_rate.map((f, i) => (
        <Link 
          to={`/Land/${f?.id}`} 
          key={f?.id}
          className="md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"  
        >  
          <LandCard 
            acre={f?.acre} 
            address={f?.address} 
            acre_price={f?.acre_price}  
            img={"https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"}  
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
        style={{ borderLeft: '4px solid #826CB0', paddingLeft: '1rem' }}
      >
        Featured Properties
      </Title>
    </div>
    <Button 
      type="text" 
      style={{ 
        color: '#826CB0',
        border: '2px solid #826CB0',
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        background: 'transparent',
        transition: 'all 0.3s ease'
      }}
      className='flex items-center gap-2 hover:!bg-[#826CB0] hover:!text-white'
    >
      View All
      <ArrowRightOutlined style={{ color: 'inherit' }} />
    </Button>
  </div>




  <div  className='overflow-x-auto w-full scrollbar-none [&::-webkit-scrollbar]:hidden'>
  <div className="grid grid-cols-2 sm:gap-4 gap-1  sm:p-4 md:flex md:flex-nowrap md:gap-6 md:justify-start md:items-center min-w-min">
    {dumy?.featured.map((f, i) => (
    <Link 
    to={`/Land/${f?.id}`} 
    key={f?.id}
    className="md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"  
  >  
    <LandCard 
      acre={f?.acre} 
      address={f?.address} 
      acre_price={f?.acre_price}  
      img={"https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"}  
    /> 
  </Link>
    ))}
  </div>
  </div>
</div>

{/* Premium Search Filter */}
<section id='topage' className="mx-auto max-w-4xl px-4 mb-16">
  <div className="relative group">
    <Input
      placeholder="Search luxury properties..."
      prefix={<SearchOutlined className="text-slate-400 !text-lg" />}
      suffix={
        <Button
          type="primary"
          shape="circle"
          icon={<FilterOutlined className="!text-white" />}
          className="!bg-amber-600 !border-none !shadow-lg hover:!bg-amber-700"
        />
      }
      className="h-14 !pl-12 !pr-24 !rounded-2xl !border !border-slate-200 focus:!border-amber-500 hover:!border-amber-400 !text-lg"
    />
    <span className="absolute right-28 top-1/2 -translate-y-1/2 text-slate-400">
      Press <kbd className="ml-1 px-2 py-1 bg-slate-100 rounded">⌘</kbd> + <kbd className="px-2 py-1 bg-slate-100 rounded">K</kbd>
    </span>
  </div>
</section>

{/* State Listings Section - Preserved as requested */}

  {/* ... existing state listings content ... */}
  <section 
  
  
  className='bg-white border border-slate-100 py-8 md:py-12 sm:px-6 md:px-12 rounded-3xl mb-8 mx-4 shadow-xl hover:shadow-2xl transition-shadow duration-300'>

  <div className="flex flex-wrap justify-center gap-3 md:gap-8 lg:gap-20 mb-6">
  {locations.map((name, index) => (
    <button
   
      key={index}
      onClick={() => setSelectedLocation(name)}
      className={`  text-sm md:text-lg font-medium py-1  px-3   md:px-8 rounded-full transition-all duration-300 
        ${
          selectedLocation === name
            ? "bg-[#4B2E83] text-white shadow-lg scale-105"
            : "  bg-[#000000]    hover:text-xl text-[white]   "
        }`}
    >
      {name}
    </button>
  ))}
</div>

  <div className='flex flex-col gap-8 md:gap-12'>
    {Object.keys(groupedProperties).map(stateId => (
      <div key={stateId} className='flex flex-col group'>
        <div className='flex items-center gap-4 mb-6 md:mb-8'>
          <div className='hidden md:block w-12 h-px bg-[#826CB0]'></div>
          <Title level={3} 
            className='text-xl md:text-2xl font-serif !mb-0 !text-slate-800 !font-medium'
            style={{
              borderLeft: '4px solid #826CB0',
              paddingLeft: '1rem',
              letterSpacing: '0.05em'
            }}>
            {groupedProperties[stateId][0].state}
            <span className='ml-3 text-[#826CB0] text-lg'>✧</span>
          </Title>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6  gap-1.5 '>
          {groupedProperties[stateId].map(property => (
                <Link 
                to={`/Land/${property.id}`} 
                key={property.id}
                className="md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-start"  
              >  
                <LandCard 
                  acre={property.acre} 
                  address={property.address} 
                  acre_price={property.acre_price}  
                  img={"https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"}  
                /> 
              </Link>
          ))}
        </div>
        
        <div className='mt-8 md:mt-12 border-t border-slate-100 group-last:border-0'></div>
      </div>
    ))}
  </div>
</section>
</div>

  )
}

export default LandList