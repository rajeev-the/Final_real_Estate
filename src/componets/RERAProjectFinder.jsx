import React from "react";
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

const Header = () => (
  <div className=" text-black p-4 text-center text-2xl font-bold">
    RERA Project Finder
  </div>
);

const SearchBar = () => (
  <div className="flex justify-center p-4">
    <input
      type="text"
      placeholder="Search by RERA ID, Project Name, Developer Name..."
      className="w-full max-w-3xl border border-gray-300 rounded-full px-4 py-2"
    />
  </div>
);

const TableHeader = () => (
  <div className="grid grid-cols-5 bg-gray-100 font-semibold text-sm p-3">
    <div>RERA Project Name</div>
    <div>Developer</div>
    <div>Location</div>
    <div>Project Area</div>
    <div>Proposed Post</div>
    
  </div>
);

const ProjectRow = ({ project }) => (
  <div className="grid grid-cols-5 space-x-3 border-b p-3 text-sm items-center">
    <div>{project.name}</div>
    <div>{project.developer}</div>
    <div>{project.location}</div>
    <div>
      {project.area}
      <br />
      <span className="text-xs text-gray-500">FSI: {project.fsi}</span>
    </div>
    <div>{project.date}</div>
    
  </div>
);

const ProjectTable = () => (
  <div className="mx-4">
    <TableHeader />
    {projects.map((project, index) => (
      <ProjectRow key={index} project={project} />
    ))}
  </div>
);

const RERAProjectFinder = () => (
  <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="min-h-screen p-6 bg-white">
    <Header />
   
    <ProjectTable />
  </div>
);

export default RERAProjectFinder;
