import React, { useState } from 'react';

const ProductFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProductFilter;
