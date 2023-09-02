import React, { useState } from 'react';
import Details from './Details';

function Card({hog}) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const handleDisplayDetails = () => setDisplayDetails(!displayDetails);

  const [isHidden, setIsHidden] = useState(false);
  if(isHidden) return null;

  return (
    <div className='ui card eight wide column pigTile'>
      <div className='image'>
        <img src={hog.image} alt={hog.name}/>
      </div>
      <div className='content'>
        <h3>{hog.name}</h3>
        <div className='description'>
          Specialty: {hog.specialty}
        </div>
      </div>
      <div className='extra content'>
        {displayDetails ? <Details hog={hog} /> : null}
        <div className="ui basic pink button" onClick={handleDisplayDetails}>{displayDetails ? 'Less Info' : 'More Info'}</div>
        <div className="ui button" onClick={()=>setIsHidden(true)}>
          Hide Me 🐷
        </div>
      </div>
    </div>
  )
}

export default Card;