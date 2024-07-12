import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  
  const [items, setItems] = useState([]);

  
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ChildComponent addItem={addItem} />
    </div>
  );
};

export default ParentComponent;
