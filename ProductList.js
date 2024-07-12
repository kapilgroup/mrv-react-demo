import React, { useState } from 'react';
import ProductFilter from './ProductFilter';

const ProductList = () => {
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Clothing' },
    { id: 3, name: 'Mobile Phone', category: 'Electronics' },
    { id: 4, name: 'Jeans', category: 'Clothing' },
    { id: 5, name: 'Headphones', category: 'Electronics' },
    {id: 6,  name:  'Maybelline',category:'Beauty' },
  ]);

  
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <ProductFilter onSearch={handleSearch} />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
