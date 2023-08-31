import React from 'react'

function FilterAndSort({ filters, sortOption, onFilterChange, onSortChange }) {
  return (
    <div className="filterWrapper">
      <label>
        <input
          type="checkbox"
          checked={filters.greased}
          onChange={() => onFilterChange("greased")}
        />
        Greased Only
      </label>
      <label>
        Sort by: 
        <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  )
}

export default FilterAndSort