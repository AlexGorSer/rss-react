import React from 'react';
import { IProductsCards } from '../IMain';
import './ProductsCards.scss';

export const ProductsCards: React.FC<IProductsCards> = ({
  name,
  image,
  species,
  id,
  findCard,
  status,
  gender,
}) => {
  return (
    <div className="card__container" onClick={() => findCard(id)}>
      <div className="card__text-container">
        <h5>{name}</h5>
        <img className="card__img" src={image} alt={name} />
        <p>{species}</p>
        <p>{gender}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};
