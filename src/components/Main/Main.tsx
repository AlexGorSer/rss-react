import React, { useEffect, useRef } from 'react';
import { ProductsCards } from './ProductsCards/ProductsCards';
import './Main.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { inputSearch, setModal } from '../../store/slice/Main.slice';
import { useLazyGetCardsByNameQuery } from '../../store/service/DataService';
import { ModalCard } from './Modal/ModalCard';

export const Main: React.FC = () => {
  const { search, modal } = useSelector((state: RootState) => state.main);
  const [bySubmit, { data, isLoading, error }] = useLazyGetCardsByNameQuery();
  const dispatch = useDispatch();

  const searchInputRef = useRef<string>();

  useEffect(() => {
    searchInputRef.current = search;
  }, [search]);

  const searchData = async (e: React.FormEvent) => {
    e.preventDefault();
    await bySubmit(search);
  };

  useEffect(() => {
    bySubmit(searchInputRef.current!);
  }, [bySubmit]);

  const findCard = async (index: number) => {
    const arr = data?.results.filter((data) => data.id === index);
    if (arr) {
      dispatch(setModal(arr[0]));
    }
  };

  return (
    <main className="container main__container">
      {modal.length ? <ModalCard {...modal[0]} /> : ''}
      <div className="input__container">
        <form onSubmit={(e) => searchData(e)}>
          <input
            className="input__search"
            id="input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => dispatch(inputSearch(e.target.value))}
          />
        </form>
        {isLoading ? (
          <h3>Not found</h3>
        ) : error ? (
          <h3>Count: 0</h3>
        ) : (
          <h3>Count: {data?.results.length}</h3>
        )}
      </div>
      <div className="cards__container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Not Found</h1>
        ) : (
          data?.results.map((element) => (
            <ProductsCards key={element.id} {...element} findCard={findCard} />
          ))
        )}
      </div>
    </main>
  );
};
