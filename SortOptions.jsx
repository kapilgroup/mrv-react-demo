

import React from 'react';

const SortOptions = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="sort-options">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="title">Title</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortOptions;
