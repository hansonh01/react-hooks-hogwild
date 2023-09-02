import React from 'react';

function Details({hog}) {
  return (
    <div className='description'>
      <strong>{hog.greased ? 'Greased' : 'Nongreased'}</strong>
      <p>
        <strong>Weight: </strong> {hog.weight} kg
      </p>
      <p className="achievementText">
        <strong>Highest Medal Achieved: </strong> {hog['highest medal achieved']}
      </p>
    </div>
  )
}

export default Details;