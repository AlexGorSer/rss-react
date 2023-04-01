import React from 'react';
import { IFormData } from '../IForm';

export const Cards: React.FC<IFormData> = ({ file, text, gender, country, date }) => {
  return (
    <div className="card__container">
      <div className="card__text-container">
        <img src={file} alt="" className="card__img" />
        <p>Name: {text}</p>
        <p>Gender {gender}</p>
        <p>Country: {country}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};
