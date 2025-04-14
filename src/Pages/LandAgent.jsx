import React,{useState ,useEffect} from 'react'
import { useParams ,Link } from 'react-router-dom'
import axios from 'axios'
import CustomCard  from '../componets/CustomCard'


const LandAgent = () => {
  
  const[data,setData] = useState()
  const url = "https://finalbackend111.pythonanywhere.com/api/"

  const {id} = useParams()
  useEffect(() => {

    const fetchData = async()=>{
       
      try {

        const res = await axios.get(`${url}property/`)
        setData(res.data.filter((item)=>item.agent == id))
        
        
      } catch (error) {
        console.log(error)
        
      }

     
       
    }

    fetchData()

  
  }, [])

  
  
  
  
  return (
    <div className='  p-10 sm:mt-[100px] flex  justify-center  items-center w-full '>
      <div className='w-full flex-wrap    justify-start   items-center flex gap-[30px]'>

        {
          data?.map((item,i)=>(
            
            <Link key={i} to={`/Land/${item.id}`} >
         <CustomCard acre={item.acre} property_name={item.address} acre_price={item.acre_price} img={item.img}/>
          </Link>
          ))
        }



      </div>

    </div>
  )
}

export default LandAgent