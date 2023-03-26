import React from 'react';
import { IFormData } from '../IForm';

class Cards extends React.Component<IFormData> {
  render() {
    return (
      <div className="card__container">
        <div className="card__text-container">
          <img src={this.props.file} alt="" className="card__img" />
          <p>Name: {this.props.text}</p>
          <p>Gender {this.props.gender}</p>
          <p>Country: {this.props.country}</p>
          <p>Date: {this.props.date}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
