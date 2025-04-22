import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'

import AgentBox from '../../componets/AgentBox'
import axios from "axios"

const StateAgenet = () => {
 
    const {state} = useParams()
    const[value,setvalue] = useState();
    const url = "https://finalbackend111.pythonanywhere.com/api/"
    
       
    useEffect(() => {
      window.scrollTo(0, 0);
      const getdata = async()=>{
        try {
          const res =await axios.get(`${url}agent/`)
          if(res.status ==200){
          setvalue(res.data?.filter((p)=>p.state ===  state))

          }
          
         
          
        } catch (error) {
          console.log(error)
          
        }       
        
      }

      getdata()
     
      
    }, [state])
    
  

  return (
    <div className='w-full mt-[100px] py-8 bg-gray-50 sm:px-8 rounded-3xl shadow-sm border border-gray-100'>
    {/* Section Heading */}
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6'>Top Real Estate Professionals in {state}</h2>
      <p className='text-gray-600 text-lg mb-8'>
        Connect with certified and experienced real estate Professionals to find your dream property.
      </p>
  
      {/* Agent List */}
      
      <div className='w-full flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap gap-8 px-4'>
        {
          value?.map((mp,i)=>
               <AgentBox  key={i} phone_number ={mp.phone_number} clickurl={`/landagent/${mp.id}`}  estate_name={mp.estate_name} language={mp.language}  rating={mp.rating} name={mp.name} img={mp.img} state={mp.state} /> 
          )
        }
     
        
      
      </div>

    </div>
  </div>
 
  )
}

export default StateAgenet