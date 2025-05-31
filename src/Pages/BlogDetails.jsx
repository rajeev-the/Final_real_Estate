import React, { useEffect } from "react";
import { FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons
import { Link,useParams  } from "react-router-dom";
import Blogs from "../componets/Blogs ";
import authorImg from "../assets/logoo -11.jpg"; // adjust path



const BlogDetails = () => {
    const { id } = useParams(); // Get the blog ID from the URL params
    const [blogDetails, setBlogDetails] = React.useState(null); // State to hold blog details
   function formatISODate(isoDateStr) {
  const date = new Date(isoDateStr);

  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
   
  };

  return date.toLocaleString('en-US', options);
}
    useEffect(() => {

        const fetchBlogDetails = async () => {
            try {
                const response = await fetch(`https://finalbackend111.pythonanywhere.com/api/blogs/${id}/`); // Fetch blog details by ID
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setBlogDetails(data); // Set the fetched blog details to state
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        }
        fetchBlogDetails(); // Call the function to fetch blog details

    }, [id]); // Effect to run when the component mounts or id changes


  return (

    <>
    <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="bg-gray-50 min-h-screen  mt-[50px] px-4 md:px-[150px] py-12 font-sans">
      {/* Tag */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <span className="inline-block bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-medium border border-green-400">
          Real Estate Efficiency
        </span>

        {/* WhatsApp Button */}
        <a
          href="#"
          className="flex items-center gap-2 text-green-600 border border-green-500 px-4 py-2 rounded-full hover:bg-green-50 transition"
        >
          <FaWhatsapp />
          Join Channel
        </a>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
       {blogDetails ? blogDetails.title : "Loading..."}
      </h1>

      {/* Author & Meta */}
      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <img
            src={authorImg}
            alt="Author"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-medium text-gray-800">
            LandSathi.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>•</span>
          <span>{formatISODate(blogDetails?.date)}</span>
         
          
        </div>
      </div>

      {/* Main Image */}
      <div className="mt-6 w-full overflow-hidden rounded-lg">
        <img
          src={blogDetails ? blogDetails.img : "https://via.placeholder.com/800x400"} // Fallback image
          alt="Blog Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-10 text-base leading-7 text-gray-800 space-y-6">
        <p className="text-gray-700  text-2xl  font-bold  ">
          {blogDetails ? blogDetails.subtitle : "Loading content..."}
        </p>

        
        

    <div className="text-gray-700  text-2xl" dangerouslySetInnerHTML={{ __html:blogDetails?.content}} />
      

      </div>
       <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="min-h-screen   mt-[50px]  rounded-sm  bg-gray-50  ">
         <div className="border-t border-b border-yellow-400 py-4 px-6 flex justify-between items-center">
      <h2 className="sm:text-3xl  text-2xl    font-bold text-[#1C2B2D] ">Read More</h2>
      <Link to={"/blog"} className="flex items-center gap-2 border border-blue-900 text-blue-900 px-4 py-2 rounded-full hover:bg-blue-50 transition">
        View More
        <FiArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
    
      <Blogs />
    </div>
    </div>
    

    </>
  );
};

export default BlogDetails;
