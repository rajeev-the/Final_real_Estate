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
    <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="bg-gray-50 min-h-screen  mt-[50px]  md:px-[420px] py-12 font-sans">
      {/* Tag */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <span className="inline-block  text-gray-500   px-4 py-1 rounded-full text-sm font-normal border border-green-400">
          Real Estate Efficiency
        </span>

        {/* WhatsApp Button */}
        
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
       {blogDetails ? blogDetails.title : "Loading..."}
      </h1>

      {/* Author & Meta */}
      <div className="mt-4 flex  px-2   justify-between   sm:items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-4"> 
        <div className="flex items-center gap-2">
          <img
            src={authorImg}
            alt="Author"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-semibold text-gray-500">
            LandSathi.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>•</span>
          <span>{formatISODate(blogDetails?.date)}</span>
         
          
        </div>

        </div>
        <div className="sm:block hidden">
           <a
          href="#"
          className="flex items-center gap-2 text-green-600 border border-green-500 px-4 py-2 rounded-full hover:bg-green-50 transition"
        >
          <FaWhatsapp />
          Join Channel
        </a>
        </div>
      <button

  className=" md:hidden bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1ebd5a] transition-colors"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.3.062 12 .062c3.181 0 6.167 1.24 8.413 3.488a11.822 11.822 0 013.49 8.409c-.003 6.627-5.376 12-12 12a11.9 11.9 0 01-6.001-1.623L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.591 5.464 0 9.906-4.437 9.91-9.898.003-5.476-4.436-9.91-9.912-9.91-5.462 0-9.899 4.435-9.899 9.91 0 2.221.729 3.891 1.938 5.522l-.999 3.648 3.616-.963zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
</button>



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

        
        

    <div className="text-gray-700  text-xl" dangerouslySetInnerHTML={{ __html:blogDetails?.content}} />
      

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
