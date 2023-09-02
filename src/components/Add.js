import React, { useState } from 'react'

function Add({onSubmitChange}) {
  const medals = ["wood", "bronze", "silver", "gold", "platinum", "diamond"];

  const [hogsDetails, setHogDetails] = useState({
    name: " ",
    specialty: " ",
    greased: "",
    weight: 0,
    medal: " ",
    image: " "
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setHogDetails({ ...hogsDetails, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitChange(hogsDetails);
    setHogDetails({
      name: " ",
      specialty: " ",
      greased: "",
      weight: 0,
      medal: " ",
      image: " "
    })
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="three fields">
        <div className='field'>
          <label>Name: </label>
          <input type="text" name="name" value={hogsDetails.name} onChange={handleInputChange} />
        </div>
        <div className="field">
          <label>Specialty: </label>
          <input type="text" name="specialty" value={hogsDetails.specialty} onChange={handleInputChange}/>
        </div>
        <div className='field'>
          <label>Weight (kg): </label>
          <input type="number" name="weight" value={hogsDetails.weight} onChange={handleInputChange}/>
        </div>
      </div>
      <div className='three fields'>
        <div className='field'>
          <label>Greased: </label>
          <select type="select" className='ui fluid dropdown' onChange={handleInputChange}>
            <option value = ''>Select</option>
            <option value = 'greased'>True</option>
            <option value = 'non-greased'>False</option>
          </select>
        </div>
        <div className='field'>
          <label>Highest Medal Achieved: </label>
          <select type="select" className='ui fluid dropdown' name="highest medal achieved" value={hogsDetails["highest medal achieved"]} onChange={handleInputChange} >
            <option value="">Select</option>
            {medals.map((medal,index)=>(
              <option value={medal} key={index}>{medal}</option>
            ))};
          </select>
        </div>
        <div className='field'>
          <label>Image URL: </label>
          <input type='text' name='image' value={hogsDetails.image} onChange={handleInputChange}/>
        </div>
      </div>
      <button className="ui button" >Submit</button>
    </form>
  )
}

export default Add;