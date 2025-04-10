import React, { useEffect } from 'react'
import { useFilterContext } from '../Context/FilterContext'
import LandCard from '../componets/LandCard'
import { Link } from 'react-router-dom' 

const SerachPage = () => {
  const { filterlist } = useFilterContext()

 

  return (
    <section className="container mx-auto px-4 mt-25">
      <h2 className="text-2xl font-semibold mb-4 text-[#1C2B2D]">
        Search Results ({filterlist?.length || 0} properties found)
      </h2>
  
      {!filterlist ? (
        <div className="text-center py-8">Loading...</div>
      ) : filterlist.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No matching properties found.</p>
          <p className="text-gray-400 mt-2">Try adjusting your search filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterlist.map((item) => (
               <Link
               to={`/land/${item.id}`}
               className="block"  // Ensure Link is block-level but doesn't interfere with layout
               key={item.id || Math.random()}
             >
               <LandCard
                 acre={item.acre}
                 address={item.address}
                 acre_price={item.acre_price}
                 img={item.img}
               />
             </Link>
          ))}
        </div>
      )}
     
    </section>
  )
}

export default SerachPage