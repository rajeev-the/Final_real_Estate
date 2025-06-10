import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiBookmark, FiFileText } from "react-icons/fi";



const SearchBar = () => (
  <div className="flex justify-center p-4">
    <input
      type="text"
      placeholder="Search by RERA ID, Project Name, Developer Name..."
      className="w-full max-w-3xl border border-gray-300 rounded-full px-4 py-2"
    />
  </div>
);

const RERAProjectFinder = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);
 const [projects,setProjects] = useState([])

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setShowScrollHint(true);
      const timer = setTimeout(() => {
        setShowScrollHint(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  
   

  }, []);

useEffect(() => {
   const getdata = async()=>{
          try {

            const res = await axios.get('https://finalbackend111.pythonanywhere.com/api/rerap/')
            setProjects(res.data)
            
            
          } catch (error) {
            console.log(error)
            
          }        

    }

    getdata()
 
}, [])
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}


  return (
    <>
      <SearchBar />
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Grid Header */}
       

        {/* Scrollable Table Content */}
     <div className="overflow-x-auto">
  {/* Header row */}
  <div className="min-w-[800px] flex justify-between p-4 text-gray-700 font-semibold text-sm bg-gray-100">
    <div className="w-1/5 min-w-[150px]">Project Name</div>
    <div className="w-1/5 min-w-[150px]">Developer</div>
    <div className="w-1/5 min-w-[150px]">Location</div>
    <div className="w-1/5 min-w-[150px]">Area & FSI</div>
    <div className="w-1/5 min-w-[100px]">Date</div>
  </div>

  {/* Data rows */}
  <div className="min-w-[800px]">
    {projects.map((project, index) => (
      <div
        key={index}
        className="flex justify-between p-4 text-sm border-b hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="w-1/5 min-w-[150px]">{project.RERA_Project_Name}</div>
        <div className="w-1/5 min-w-[150px]">{project.Developer}</div>
        <div className="w-1/5 min-w-[150px]">{project.Location}</div>
        <div className="w-1/5 min-w-[150px]">
          {project.Project_Area}
          <div className="text-gray-500 text-xs">FSI: {project.Proposed_Post}</div>
        </div>
        <div className="w-1/5 min-w-[100px]">{ project.date_field ?  formatDate(project.date_field):""}</div>
      </div>
    ))}
  </div>
</div>

        {/* Mobile scroll hint */}
        {showScrollHint && (
          <div className="md:hidden py-3 text-center text-sm text-blue-600 bg-blue-50 animate-pulse">
            <span className="mr-2">👉</span> Scroll sideways to see all columns
          </div>
        )}
      </div>
    </>
  );
};

export default RERAProjectFinder;
