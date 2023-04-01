import React from 'react';
import { IProps } from './IProps';

export const TextInput: React.FC<IProps> = ({ textInputMessage }) => {
  return (
    <div className="text__container">
      <label className="label__container">
        Input your name:
        <input
          type="text"
          name="text"
          className={textInputMessage == '' ? 'validate' : 'no_validate'}
        />
        {textInputMessage && <span>{textInputMessage}</span>}
      </label>
    </div>
  );
};
