import { useEffect, useMemo, useState } from 'react';
import { categories, products } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Products';
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (selectedCategory === 'All' || product.category === selectedCategory),
      ),
    [searchText, selectedCategory],
  );

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}
