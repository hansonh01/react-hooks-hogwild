import React, { useState } from 'react'

function HogTile({hog}) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);
  return (
    <div className='pigTile' onClick={toggleDetails}>
      <h3 className='hog-name'>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} className='hog-image'/>
      {showDetails && (
        <div className="hog-details">
          <p className="hog-specialty">Specialty: {hog.specialty}</p>
          <p className="hog-weight">Weight: {hog.weight} kg</p>
          <p className="hog-greased">Greased: {hog.greased ? "Yes" : "No"}</p>
          <p className="achievementText">Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
};

export default HogTile;