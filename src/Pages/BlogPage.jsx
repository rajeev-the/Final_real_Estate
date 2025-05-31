import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons
import backgoundImage from '../assets/xlblogbanner.jpg'; // Adjust the path as necessary
import ProjectableCard from "../componets/ProjectableCard ";

const BlogPage = () => {
     const blogData = [
    {
      title: "Real Estate Efficiency",
      subtitle: "Understanding the Right to Property in India",
      content: "Did you know that the Right to Property in India was once a fundamental right but is now only a legal right? This shift happened with the 44L."
    },
    {
      title: "Home Loans",
      subtitle: "Types of Mortgages in India: Know Your Loan Options",
      content: "What is a Mortgage Loan? A mortgage loan is a secured loan that enables you to use your property, a house, a shop, and/or land ..."
    },
    {
      title: "Investment Opportunities",
      subtitle: "Investment Property Loans: How to Finance Real Estate Investments",
      content: "What is an Investment Property Loan? People use investment property loans to buy real estate that makes money, like rental houses, apartments..."
    },
       {
      title: "Investment Opportunities",
      subtitle: "Investment Property Loans: How to Finance Real Estate Investments",
      content: "What is an Investment Property Loan? People use investment property loans to buy real estate that makes money, like rental houses, apartments..."
    },
     
   
  ];
  return (
 <>
  <div
    style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }}
    className="min-h-screen mt-[100px] bg-gray-50 rounded-sm"
  >
    {/* Background Image */}
    <img src={backgoundImage} alt="Background" className="w-full h-auto object-cover" />

    {/* Main Content Container */}
    <div className="px-2 sm:px-8 md:px-[120px] sm:mt-10  mt-5">
      {/* Header */}
      <div className="border-t border-b border-yellow-400 py-4 px-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B2D]">
          Insight Pulse
        </h2>
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-wrap justify-start  mb-6  sm:space-x-[105px] mt-6">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <ProjectableCard data={item} />
          </div>
        ))}
      </div>
    </div>
  </div>
</>

  )
}

export default BlogPage