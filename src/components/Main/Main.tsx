import React, { useEffect, useRef, useState } from 'react';
import { ProductsCards } from './ProductsCards/ProductsCards';
import './Main.scss';
import { IApi } from './IMain';
import { getData } from '../../components/API/Api';
import { ModalCard } from './Modal/ModalCard';

export const Main: React.FC = () => {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('input_text') || '');
  const [inputArr, setInputArr] = useState<IApi[]>([]);
  const [modal, setModal] = useState<IApi[]>([]);
  const searchInputRef = useRef<string>();

  useEffect(() => {
    searchInputRef.current = searchInput;
  }, [searchInput]);

  const searchData = async (e: React.FormEvent) => {
    e.preventDefault();
    await getData(setInputArr, searchInputRef.current!);
  };

  useEffect(() => {
    getData(setInputArr, searchInputRef.current!);
    return () => localStorage.setItem('input_text', searchInputRef.current || '');
  }, []);

  const findCard = async (index: number) => {
    const arr = inputArr.filter((data) => data.id === index);
    await getData(setModal, arr[0].id);
  };

  return (
    <main className="container main__container">
      {modal.length ? <ModalCard {...modal[0]} setModal={setModal} /> : ''}
      <div className="input__container">
        <form onSubmit={(e) => searchData(e)}>
          <input
            className="input__search"
            id="input"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        {inputArr.length ? <h3>Count: {inputArr.length}</h3> : <h3>Not found</h3>}
      </div>
      <div className="cards__container">
        {inputArr.length ? (
          inputArr.map((element) => (
            <ProductsCards key={element.id} {...element} findCard={findCard} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </main>
  );
};
