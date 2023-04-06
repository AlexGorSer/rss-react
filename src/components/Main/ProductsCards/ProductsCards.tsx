import React from 'react';
import { IApi } from '../IMain';
import './ProductsCards.scss';

export const ProductsCards: React.FC<IApi> = ({ name, image, species, id, findCard }) => {
  return (
    <div className="card__container" onClick={() => findCard(id)}>
      <div className="card__text-container">
        <h5>{id}</h5>
        <h5>{name}</h5>
        <img className="card__img" src={image} alt={image} />
        <p>{species}</p>
      </div>
    </div>
  );
};
