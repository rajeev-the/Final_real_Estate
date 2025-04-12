import React,{useEffect ,useState} from 'react'
import CustomCardDel  from "../../componets/CustomCardDel"
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';





const Holding = () => {

  const [data, setData] = useState([])
  const idData = JSON.parse(localStorage.getItem("Agent"))
  const url = "https://finalbackend111.pythonanywhere.com/api/"

  

  useEffect(() => {

    const fetchData = async()=>{
       
      try {

        const res = await axios.get(`${url}property/`)
        setData(res.data.filter((item)=>item.agent == idData.id))
        
        
      } catch (error) {
        console.log(error)
        
      }

     
       
    }

    fetchData()

  
  }, [])
 

  
  
  return (
    <div className=' sm:mt-[50px]'>
         
         <div className='flex flex-wrap gap-4   justify-center  items-center'>
         {
            data.map((item)=>(
              <Link
              to={`land/${item.id}`} 
              key={item.id}
              
              >
              <CustomCardDel item={item.id} key={item.id}   property_name={item.address} acre={item.acre}  acre_price={item.acre_price}
              />
             </Link>
            ))
         }
         </div>
    
    </div>
  )
}

export default Holding