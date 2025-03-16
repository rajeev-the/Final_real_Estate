import React, { useState ,useEffect } from 'react'
import { Input, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import CustomCard  from '../componets/CustomCard '
import { Typography } from 'antd';
const { Title } = Typography;
import xx1 from "../assets/xx1.jpg"
import axios from 'axios';



const LandList = () => {

  const [data, setData] = useState([]); // ✅ Initialize as empty array

  useEffect(() => {
    const getvalue = async () => {
      try {
        const res = await axios.get("https://realesatate11.pythonanywhere.com/api/properties/");
        setData(res.data); // ✅ Ensure correct data assignment
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    getvalue();
  }, []);

  // ✅ Prevent issues when data is undefined
  const groupedProperties = data?.reduce((acc, property) => {
    if (!acc[property.state]) {
      acc[property.state] = [];
    }
    acc[property.state].push(property);
    return acc;
  }, {});

  
         
 

  return (
    <div className='mt-[100px] p-[15px] h-full w-full    '>

{/* --->  This is  Image  section  */}
<div className='Top-sections  mb-3  px-8 
'
>
 <img src={xx1} alt="Image"  style={{
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
}}
 className='rounded-2xl' />

</div>


{/* --->  This is  first section  */}

<div className='  border-2 border-gray-100 py-6 px-8 rounded-xl mb-3  ml-[18px]  mr-[18px] shadow-sm '  style={{
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
}}
>
 
 <div  className='First Section is Top Rate  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
   mb-[50px]'>

<Title level={3} style={{ 
    marginLeft: '50px',  
    fontWeight: '700',  
    color: '#1a1a1a',  
    letterSpacing: '1.5px',  
    textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", // Stylish modern font
}}>
    Top Rate ⭐️⭐️⭐️ 
</Title>

<div className='flex gap-2  justify-evenly'>
   <CustomCard />
   <CustomCard />
   <CustomCard />
   <CustomCard />


    </div>   

</div>


<div className='Second Sections of Features '>

<Title level={3} style={{ 
    marginLeft: '50px',  
    fontWeight: '700',  
    color: '#1a1a1a',  
    letterSpacing: '1.5px',  
    textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", // Stylish modern font
}}>
    Featured  🏅
</Title>

<div className='flex gap-2  justify-evenly'>
   <CustomCard />
   <CustomCard />
   <CustomCard />
   <CustomCard />


    </div>   

</div>



</div>



   {/* Third Sections of the Filtering according to state  */}
   <div className="relative m-[10px] flex gap-3 items-center w-full  justify-end p-4">
      <Input
      style={{
 width:"400px",
  border: '0.6px solid grey'
      }
       
      }
        placeholder="Search..."
        className="pl-2 pr-2 py-3 rounded-full   border-6 border-gray-500  shadow-md focus:ring-2 focus:ring-blue-500"
      />
      <Button
        type="primary"
        shape="circle"
        icon={<FilterOutlined />}
        className="absolute left-2 bg-blue-500 hover:bg-blue-600 border-none text-white"
      />
    </div>


   {/* this the section of state under the land  */}

   <div className='  border-2 border-gray-100 py-6 px-8 rounded-xl mb-3  ml-[18px]  mr-[18px] shadow-sm '  style={{
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
}}
>
 
 <div  className='First Section is Top Rate   flex flex-col gap-10 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
   mb-[50px]'>

    {/* {

      data?.map((e)=>
        <>
        <Title level={3} style={{ 
          marginLeft: '50px',  
          fontWeight: '700',  
          color: '#1a1a1a',  
          letterSpacing: '1.5px',  
          textTransform: 'uppercase',
          fontFamily: "'Poppins', sans-serif", // Stylish modern font
      }}>
          {e?.state_name}  
      </Title>
      
      <div className='flex gap-2    justify-evenly'>
        
      <CustomCard 
    property_name={e?.property_name} 
    acre={e?.acre} 
    acre_price={e?.acre_price} 
/>

    
      
      
          </div>   
          </>
      
      )
    } */}



{Object.keys(groupedProperties).map(stateId => (
        <div key={stateId} className='flex flex-col'>
          <Title level={3} style={{ 
          marginLeft: '10px',  
          fontWeight: '700',  
          color: '#1a1a1a',  
          letterSpacing: '1.5px',  
          textTransform: 'uppercase',
          fontFamily: "'Poppins', sans-serif", // Stylish modern font
      }}>
          {groupedProperties[stateId][0].state_name}  
      </Title>
          <div className='flex gap-[60px]'>
            {groupedProperties[stateId].map(property => (
              <CustomCard 
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