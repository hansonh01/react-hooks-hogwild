import React, { useState } from 'react'

function AddHogForm({onAddHog}) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false || true,
    weight: 0,
    medal: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleInput = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: "",
      specialty: "",
      greased: false || true,
      weight: 0,
      medal: "",
      image: "",
    });
  };
  return (
    <div className='add-hog-form search-container'>
      <h2>Add New Hog</h2>
      <form onSubmit={handleInput}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Specialty:
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Greased:
          <input
            type="checkbox"
            name="greased"
            value={formData.greased}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Highest Medal achieved:
          <input
            type="text"
            name="medal"
            value={formData.medal}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL: 
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Hog</button>
      </form>
    </div>
  )
}

export default AddHogForm

