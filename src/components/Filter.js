import React, { useState } from 'react';
import Add from './Add';

function Filter({isGreased, setIsGreased, sortOptions, setSortOption, onSubmitChange}) {

  const handleIsGreased = (e) => setIsGreased(e.target.checked);
  const handleSortOptions = (e) => setSortOption(e.target.value);

  const [displayForm, setDisplayForm] = useState(false);
  const handleDisplayForm = () => setDisplayForm(!displayForm)

  return (
    <div className="filterWrapper">
      <div className='ui menu'>
        <div className='ui item'>
          <label>Sort By </label>
        </div>
        <div className="ui item">
          <select
            className="ui selection dropdown"
            name="sort"
            onChange={handleSortOptions}
            value={sortOptions}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="ui item">
          <label>Select Greased Pigs Only</label>
          <div className='ui item'>
            <input
                className="ui toggle checkbox"
                checked={isGreased}
                onChange={handleIsGreased}
                type="checkbox"
            />
          </div>
        </div>
        <div className='ui item button' onClick={handleDisplayForm}>
          {displayForm ? 'Add Pig' : 'Close Menu'}
        </div>
      </div>
      {displayForm ? null : <Add onSubmitChange={onSubmitChange} />}
    </div>
  )
}

export default Filter