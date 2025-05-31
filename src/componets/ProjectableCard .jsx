// src/components/ProjectableCard.js
import React from 'react';
import logoo from '../assets/logoo -11.jpg'; // Adjust the path as necessary
import { FiCalendar } from 'react-icons/fi'; // from react-icons

const ProjectableCard = ({ data }) => {
  const { title, subtitle, content, date } = data;
  
  return (
     <div className="sm:w-[400px] w-[350px]   mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image */}
      <div className="w-full h-52 sm:h-64 md:h-60 overflow-hidden">
        <img
          src="https://www.aurumproptech.in/_next/image?url=https%3A%2F%2Fd1smx9vz40s2y3.cloudfront.net%2Fblog%2Fbanner_image%2F1748607286116-right-to-property-in-india.jpg&w=1920&q=75"
          alt="Blog visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Tag */}
        <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
          Real Estate Efficiency
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">
          Understanding the Right to Property in India
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-700">
          Did you know that the Right to Property in India was once a fundamental right but is now only a legal right? This shift happened with the 44th...
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-2">
          <img
            src={logoo}
            alt="Author"
            className="w-8 h-8   object-contaicdccd  rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">LandSathi</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <FiCalendar className="w-4 h-4" />
              <span>30th May 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectableCard;