import React from 'react';
import { IProps } from './IProps';

export const DateInput: React.FC<IProps> = ({ dateInput }) => {
  return (
    <div>
      <label className="label__container">
        Date:
        <input type="date" name="date" className={dateInput === '' ? 'validate' : 'no_validate'} />
        {dateInput && <span>{dateInput}</span>}
      </label>
    </div>
  );
};
