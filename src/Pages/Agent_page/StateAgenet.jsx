import React from 'react'
import { useParams } from 'react-router-dom'
import StateAgents from '../../componets/StateAgents'
import AgentBox from '../../componets/AgentBox'

const StateAgenet = () => {
 
    const {state} = useParams()

  return (
    <div className='w-full mt-[100px] py-8 bg-gray-50 sm:px-8 rounded-3xl shadow-sm border border-gray-100'>
    {/* Section Heading */}
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6'>Top Real Estate Agents in {state}</h2>
      <p className='text-gray-600 text-lg mb-8'>
        Connect with certified and experienced real estate agents to find your dream property.
      </p>
  
      {/* Agent List */}
      <div className='w-full flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap gap-8 px-4'>
        <AgentBox />
        <AgentBox />
        < AgentBox/>
      </div>
      {/* Call to Action */}
      <div className='mt-10 text-center'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'>
          View All Agents
        </button>
      </div>
    </div>
  </div>
  )
}

export default StateAgenet