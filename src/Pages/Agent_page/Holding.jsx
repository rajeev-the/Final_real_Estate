import React,{useEffect ,useState} from 'react'
import CustomCardDel  from "../../componets/CustomCardDel"
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';





const Holding = () => {

  const [data, setData] = useState([])
  const idData = JSON.parse(localStorage.getItem("Agent"))
  const [loading, setLoading] = useState(true); // loading state
  const url = "https://finalbackend111.pythonanywhere.com/api/"

  

  useEffect(() => {

    const fetchData = async()=>{
      setLoading(true);
       
      try {

        const res = await axios.get(`${url}property/`)
        setData(res.data.filter((item)=>item.agent == idData.id))
        
        
      } catch (error) {
        console.log(error)
        
      }
      finally {
        setLoading(false);
      }
      

     
       
    }

    fetchData()

  
  }, [])
 


  
  
  return (
    <div className='mt-[40px] mb-[100px]'>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {loading ? (
          <div className="text-center mt-[30px] text-gray-600 text-lg py-10 animate-pulse">Loading land listings...</div>
        ) : (
          data.map((item) => (
            <Link to={`land/${item.id}`} key={item.id}>
              <CustomCardDel
                item={item.id}
                property_name={item.address}
                acre={item.acre}
                acre_price={item.acre_price}
                available={item.isvaild}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Holding