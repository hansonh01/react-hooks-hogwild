import React from 'react'
import Card from './Card';

function Lists({hogs}) {
  return (
    <div className="ui three stackable cards">
      {hogs.map((hog,index)=>(
        <Card key={index} hog={hog} />
      ))}
    </div>
  )
}

export default Lists;