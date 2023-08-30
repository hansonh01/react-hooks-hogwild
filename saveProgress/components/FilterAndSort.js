import React, { useState } from 'react'

function FilterAndSort({hogs}) {
  const [greased,setGreased] =useState(false);
  const toggleGreaseFilter = () => setGreased(greased);
  const filterGrease = greased ? hogs.filter(hog => hog.greased === true):greased;
  return (
    <div className='filterWrapper'>
      <button onClick={()=>toggleGreaseFilter}>{greased ? "Show All" : "Show Greased"}</button>
    </div>
  )
}

export default FilterAndSort;