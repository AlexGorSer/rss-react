import React from 'react';
import { IProducts } from '../IMain';
import './ProductsCards.scss';

export const ProductsCards: React.FC<IProducts> = ({ title, thumbnail, description }) => {
  return (
    <div className="card__container">
      <div className="card__text-container">
        <h5>{title}</h5>
        <img className="card__img" src={thumbnail} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
};
