import React from 'react';
import { IProps } from './IProps';

export const SelectInput: React.FC<IProps> = ({ selectInput }) => {
  return (
    <label className="label__container">
      Select country:
      <select
        name="select"
        defaultValue={'select'}
        className={selectInput === '' ? 'validate' : 'no_validate'}
      >
        <option defaultChecked value="select">
          Select your country
        </option>
        <option defaultChecked value="Belarus">
          Belarus
        </option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Kazakhstan">Kazakhstan</option>
      </select>
      {selectInput && <span>{selectInput}</span>}
    </label>
  );
};
