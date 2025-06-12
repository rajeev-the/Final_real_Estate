// src/components/Blogs.js
import React,{useState, useEffect} from 'react';
import ProjectableCard from "./ProjectableCard ";
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  
  const [blogData, setBlogData] = useState([]);
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

    <div className="mt-2 p-5">                                    

   <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="flex flex-wrap justify-start  mb-6  sm:space-x-[105px] space-y-5 ">
        {blogData.slice(0, 3).map((item, index) => (
          <Link 
          to={`/blog/${item.id}`} // Assuming each blog has a unique I`
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProjectableCard key={index} img={item.img} title={item.title}   content={item.content} date={item.date} />
          </Link>
        ))}
      </div>
    </div>


  );
};

export default Blogs;