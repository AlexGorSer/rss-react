import { products } from '../../data/products';
import React, { useEffect, useRef, useState } from 'react';
import { ProductsCards } from './ProductsCards/ProductsCards';
import './Main.scss';

export const Main: React.FC = () => {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('input_text') || '');

  const searchInputRef = useRef<string>();

  useEffect(() => {
    searchInputRef.current = searchInput;
  }, [searchInput]);

  useEffect(() => {
    return () => localStorage.setItem('input_text', searchInputRef.current || '');
  }, []);

  return (
    <main className="container main__container">
      <div className="input__container">
        <form>
          <input
            className="input__search"
            id="input"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        <h3>Count: {products.length}</h3>
      </div>
      <div className="cards__container">
        {products.map((element) => (
          <ProductsCards key={element.id} {...element} />
        ))}
      </div>
    </main>
  );
};
