// src/components/Blogs.js
import React from 'react';
import ProjectableCard from "./ProjectableCard ";
import { FiArrowUpRight } from 'react-icons/fi'; // from react-icons

const Blogs = () => {
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
    
   
  ];

  return (

    <div className="mt-10 ">                                    

  <div className="flex   space-x-5 ">
    {blogData.map((item, index) => (
      <ProjectableCard key={index} data={item} />
    ))}
  </div>
    </div>


  );
};

export default Blogs;