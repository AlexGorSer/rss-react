import React from 'react';
import { IProducts } from '../IMain';
import './ProductsCards.scss';

class ProductsCards extends React.Component<IProducts> {
  render() {
    return (
      <div className="card__container">
        <div className="card__text-container">
          <h5>{this.props.title}</h5>
          <img className="card__img" src={this.props.thumbnail} alt={this.props.title} />
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ProductsCards;
