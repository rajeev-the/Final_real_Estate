import React from 'react'
import { useParams } from 'react-router-dom'
import StateAgents from '../componets/StateAgents'

const StateAgenet = () => {
 
    const {state} = useParams()

  return (
    <div className=' w-full mt-[100px] py-5 bg-gray-100 sm:p-5 rounded-2xl   gap-[40px] flex  items-center sm:justify-start   justify-center   flex-wrap '>
    <StateAgents/>
    <StateAgents/>
    <StateAgents/>
    <StateAgents/>
    <StateAgents/>
    
    </div>
  )
}

export default StateAgenet