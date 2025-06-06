import React, { useState, useEffect } from "react";
import { FiBookmark, FiFileText } from "react-icons/fi";

const projects = [
  {
    name: "SHANKAR VIHAR PHASE I",
    developer: "SHANKAR VIHAR ASSOCIATES PHASE I",
    location: "Nandurbar Shahade Nashik",
    area: "72028.80",
    fsi: "70047",
    date: "Jun 2022",
  },
  {
    name: "Chhoriya Residency Nandurbar Phase - 2",
    developer: "Chhoriya and Kela Developers",
    location: "Nandurbar Nandurbar Nashik",
    area: "2454.12",
    fsi: "2454.12",
    date: "Dec 2018",
  },
  {
    name: "BHANUDHAN PLAZA",
    developer: "SHAH ENTERPRISES",
    location: "Nandurbar Nandurbar Nashik",
    area: "5467.95",
    fsi: "4231.24",
    date: "Dec 2023",
  },
  {
    name: "K R SUNCITY",
    developer: "KREATIONS ENTERPRISES PRIVATE LIMITED",
    location: "Nandurbar Nandurbar Nashik",
    area: "854.59",
    fsi: "854.59",
    date: "Jul 2018",
  },
  {
    name: "Chhoriya Residency Nandurbar Phase -4",
    developer: "Chhoriya and Kela Developers",
    location: "Nandurbar Nandurbar Nashik",
    area: "1173.83",
    fsi: "1173.83",
    date: "Mar 2023",
  },
  {
    name: "MADHUBAN RESIDENCY",
    developer: "INFINITY HEIGHTS PVT LIMITED",
    location: "Nandurbar Nandurbar Nashik",
    area: "7128.79",
    fsi: "7128.79",
    date: "Dec 2022",
  },
  {
    name: "SWARUPA GOKULDHAM RESIDENCY",
    developer: "TRINITY BUILDPRO",
    location: "Nandurbar Nandurbar Nashik",
    area: "3060.00",
    fsi: "1004",
    date: "Dec 2024",
  },
];

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
        <div className="w-1/5 min-w-[150px]">{project.name}</div>
        <div className="w-1/5 min-w-[150px]">{project.developer}</div>
        <div className="w-1/5 min-w-[150px]">{project.location}</div>
        <div className="w-1/5 min-w-[150px]">
          {project.area}
          <div className="text-gray-500 text-xs">FSI: {project.fsi}</div>
        </div>
        <div className="w-1/5 min-w-[100px]">{project.date}</div>
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
