import React,{useState , useEffect} from 'react'
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons
import backgoundImage from '../assets/xlblogbanner.jpg'; // Adjust the path as necessary
import ProjectableCard from "../componets/ProjectableCard ";
import { Link } from 'react-router-dom';
import property from '../assets/property.png'; // Adjust the path as necessary
import money  from '../assets/money (1).png'; // Adjust the path as necessary
import SipCalculator from '../componets/SipCalculator';
import RERAProjectFinder from '../componets/RERAProjectFinder';

import axios from 'axios';

const BlogPage = () => {
     
     const [blogData, setBlogData] = useState([]);
     const [Value, setValue] = useState("main1"); // State to manage loading state
     

      // Fetch blog data from API when the component mounts
    
      useEffect(() => {
            
    
        const fetchData = async () => {
          try {
            const response = await axios.get("https://finalbackend111.pythonanywhere.com/api/blogs/"); // Replace with your API endpoint
            setBlogData(response.data);
            // Process the data as needed
          } catch (error) {
            console.error("Error fetching blog data:", error);
          }
        }
    
        fetchData();
        
    
      }, []);


  return (
 <>
  <div
    style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}
    className="min-h-screen mt-[80px] bg-gray-50 rounded-sm"
  >
    {/* Background Image */}
    <img src={backgoundImage} alt="Background" className="w-full h-auto object-cover" />

    {/* Main Content Container */}
    <div className="px-2 sm:px-8 md:px-[120px] sm:mt-10  mt-5">
      {/* Header */}
      <div  className="border-t border-b border-yellow-400 py-4 px-0 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4">
        <button onClick={()=>  setValue("main1")} className="text-xl sm:text-xl  text-[#1C2B2D]">
          Infographics
        </button>
     <div className="relative group inline-block">
  <div  className="text-xl sm:text-xl  text-[#1C2B2D] cursor-pointer">
    Tools
  </div>

  {/* Dropdown Panel */}
  <div className="absolute left-0  w-[360px] sm:w-[400px] bg-white border border-gray-200 shadow-xl rounded-xl p-4 space-y-4 hidden group-hover:block z-50">
    
    {/* Tool 1 */}
    <div onClick={()=> setValue("main3") } className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition">
      <img src={property} alt="RERA" className="w-8 h-8" />
      <div onClick={()=> setValue("main2") } >
        <h4 className="font-semibold text-sm text-gray-900">RERA Search</h4>
        <p className="text-sm text-gray-500">
          Access detailed information about real estate projects registered under the Real Estate Regulatory Authority (RERA).
        </p>
      </div>
    </div>

    {/* Tool 2 */}
    <div  onClick={()=> setValue("main2") } className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition">
      <img src={money} alt="SIP" className="w-8 h-8" />
      <div >
        <h4 className="font-semibold text-sm text-gray-900">SIP Calculator</h4>
        <p className="text-sm text-gray-500">
          Systematic Investment Plan calculator tool helps investors estimate the potential returns of their SIP investments.
        </p>
      </div>
    </div>

  </div>
</div>

      </div>
      {
           
         Value === "main1" ?   <div className="flex flex-wrap justify-start  mb-6   sm:space-y-[50px] sm:space-x-[105px] mt-6">
        {blogData.map((item, index) => (
          <Link
            key={index}
            to={"/blog/" + item.id} // Assuming each blog has a unique ID
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProjectableCard  key={index} img={item.img} title={item.title}   content={item.content} date={item.date} />
          </Link>
        ))}
      </div>  : Value === "main2" ?   <SipCalculator/> : Value === "main3" ? <RERAProjectFinder/> : ""
        



      }

      {/* Blog Cards Section */}

    


    
    </div>
  </div>
</>

  )
}

export default BlogPage