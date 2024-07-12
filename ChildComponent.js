import React, { useState } from 'react';

const ChildComponent = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue); 
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ChildComponent;
