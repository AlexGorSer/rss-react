import React from 'react';
import { ISubmitData } from '../IForm';

export const Cards: React.FC<ISubmitData> = ({ file, text, gender, select, date }) => {
  return (
    <div className="card__container">
      <div className="card__text-container">
        <img src={file} alt="" className="card__img" />
        <p>Name: {text}</p>
        <p>Gender {gender}</p>
        <p>Country: {select}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};
