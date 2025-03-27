import React, { useState ,useEffect } from 'react'
import { Input, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import CustomCard  from '../componets/CustomCard'
import { Typography } from 'antd';
const { Title } = Typography;
import xx1 from "../assets/xx1.jpg"
import axios from 'axios';
import { Link } from 'react-router-dom';



const LandList = () => {

  const [data, setData] = useState([]); // ✅ Initialize as empty array

  useEffect(() => {
    const getvalue = async () => {
      try {
        const res = await axios.get("https://finalbackend111.pythonanywhere.com/api/property/");
        setData(res.data); // ✅ Ensure correct data assignment
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    getvalue();
  }, []);

  const groupedProperties = (data || []).reduce((acc, property) => {
    if (property?.state) {  // Ensure state exists
      if (!acc[property.state]) {
        acc[property.state] = [];
      }
      acc[property.state].push(property);
    }
    return acc;
  }, {});
  

  
 

  return (
    <div className='mt-[50px] md:mt-[100px] p-2 md:p-[15px] w-full'>

  {/* Image Section */}
  <div className='px-2 md:px-8 mb-3'>
    <img 
      src={xx1} 
      alt="Image" 
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
      className='rounded-2xl w-full'
    />
  </div>

  {/* Top Rated Section */}
  <div className='bg-gray-100 border-2 border-gray-100 py-4 md:py-6 px-4 md:px-8 rounded-xl mb-3 mx-2 md:mx-[18px] shadow-sm' 
       style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
    
    <Title level={3} className='text-lg md:text-xl mb-4 md:mb-[50px] text-center md:text-left md:ml-[50px]'
      style={{ 
        fontWeight: '700',  
        color: '#1a1a1a',  
        letterSpacing: '1.5px',  
        textTransform: 'uppercase',
        fontFamily: "'Poppins', sans-serif",
      }}>
      Top Rate ⭐️⭐️⭐️ 
    </Title>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {[1,2,3,4].map((_, i) => (
        <Link key={i} to={"/Land/1"} className='w-full'>
          <CustomCard />
        </Link>
      ))}
    </div>
  </div>

  {/* Featured Section */}
  <div className='bg-gray-100 border-2 border-gray-100 py-4 md:py-6 px-4 md:px-8 rounded-xl mb-3 mx-2 md:mx-[18px] shadow-sm' 
       style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
    
    <Title level={3} className='text-lg md:text-xl mb-4 md:mb-[50px] text-center md:text-left md:ml-[50px]'
      style={{ 
        fontWeight: '700',  
        color: '#1a1a1a',  
        letterSpacing: '1.5px',  
        textTransform: 'uppercase',
        fontFamily: "'Poppins', sans-serif",
      }}>
      Featured 🏅
    </Title>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {[1,2,3,4].map((_, i) => (
        <CustomCard key={i} />
      ))}
    </div>
  </div>

  {/* Search Filter Section */}
  <div className="relative mx-2 md:mx-[10px] flex flex-col md:flex-row gap-3 items-center w-full p-2 md:p-4">
    <Input
      style={{
        width: "100%",
        maxWidth: "400px",
        border: '0.6px solid grey'
      }}
      placeholder="Search..."
      className="pl-2 pr-2 py-3 rounded-full shadow-md focus:ring-2 focus:ring-blue-500"
    />
    <Button
      type="primary"
      shape="circle"
      icon={<FilterOutlined />}
      className="md:absolute md:left-2 bg-blue-500 hover:bg-blue-600 border-none text-white"
    />
  </div>

  {/* State Listings Section */}
  <div className='bg-gray-100 border-2 border-gray-100 py-4 md:py-6 px-4 md:px-8 rounded-xl mb-3 mx-2 md:mx-[18px] shadow-sm' 
       style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
    
    <div className='flex flex-col gap-4 md:gap-10'>
      {Object.keys(groupedProperties).map(stateId => (
        <div key={stateId} className='flex flex-col'>
          <Title level={3} className='text-lg md:text-xl mb-4 text-center md:text-left md:ml-[10px]'
            style={{ 
              fontWeight: '700',  
              color: '#1a1a1a',  
              letterSpacing: '1.5px',  
              textTransform: 'uppercase',
              fontFamily: "'Poppins', sans-serif",
            }}>
            {groupedProperties[stateId][0].state}  
          </Title>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {groupedProperties[stateId].map(property => (
              <CustomCard 
                key={property.id}
                property_name={property?.property_name} 
                acre={property?.acre} 
                acre_price={property?.acre_price} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default LandList