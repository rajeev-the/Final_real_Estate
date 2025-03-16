import React from 'react'
import img1 from '../assets/hary.png'
import img2 from '../assets/Noida.png'
import img3 from '../assets/gurgram.png'
import img4 from '../assets/gz.png'
import BoxAgent from '../componets/BoxAgent'


const Agents = () => {
    const data = [
        { image: img1, text: "Harayana" },
        { image: img3, text: "Gurugram" },
        { image: img2, text: "Noida" },
        { image: img4, text: "Ghaziabad" },
      ];
  return (
    <div className='w-full mt-[100px] bg-gray-100 sm:p-5 rounded-2xl'>
    <h1 style={{ fontFamily: "Krub, sans-serif" }} className='text-2xl font-bold text-start m-3'>Real Estate Agents</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((item, index) => (
        <BoxAgent key={index} image={item.image} text={item.text} />
      ))}
    </div>
  </div>
  )
}

export default Agents