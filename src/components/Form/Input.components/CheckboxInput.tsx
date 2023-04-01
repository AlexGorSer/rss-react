import React from 'react';
import { IProps } from './IProps';

export const CheckboxInput: React.FC<IProps> = ({ checkboxInput }) => {
  return (
    <div className={checkboxInput === '' ? 'validate' : 'no_validate'}>
      <label className="label__container">
        I consent to my personal data :
        <input type="checkbox" name="checkbox" defaultChecked={false} className="checkbox" />
        {checkboxInput && <span>{checkboxInput}</span>}
      </label>
    </div>
  );
};
