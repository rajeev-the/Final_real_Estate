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
    <div className='p-4 sm:p-10 sm:mt-[100px] flex justify-center items-center w-full'>
      <div className='w-full max-w-[1400px] flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 md:gap-[30px]'>
        {
          !data ? (
            <p className="text-lg sm:text-xl font-semibold text-gray-600">Loading, please wait...</p>
          ) : data.length === 0 ? (
            <p className="text-lg sm:text-xl font-semibold text-gray-600  mb-[100px]">No properties available at the moment.</p>
          ) : (
            data.map((item, i) => (
              <Link key={i} to={`/Land/${item.id}`} className="w-full sm:w-[48%] lg:w-[31%]">
                <CustomCard 
                  acre={item.acre}
                  property_name={item.address}
                  acre_price={item.acre_price}
                  img={item.img}
                />
              </Link>
            ))
          )
        }
      </div>
    </div>
  )
}

export default LandAgent