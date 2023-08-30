import React, { useState } from 'react'

function HogTiles({ hog }) {
  const [showDetails,setDetails] = useState(false);
  const toggleDetails = () => setDetails(!showDetails);
  console.log(toggleDetails);
  return (
    <div className='indexWrapper'>
      <div className='pigTile' onClick={toggleDetails}>
          <h3>{hog.name}</h3>
          <img src={hog.image} alt={hog.name}/>
          {showDetails && (
            <div className='hoggyText'>
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight} kg</p>
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>
              <p className='achievementText'>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
    </div>
  )
}

export default HogTiles;