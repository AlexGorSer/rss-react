import React from 'react';
import { IProps } from './IProps';

export const SwitcherInput: React.FC<IProps> = ({ switcherInput }) => {
  return (
    <div className={switcherInput === '' ? 'validate' : 'no_validate'}>
      <label className="label__container">
        Gender:
        <label>
          Male:
          <input type="radio" name="gander" value="Male" />
        </label>
        <label>
          Female:
          <input type="radio" name="gander" value="Female" />
        </label>
        {switcherInput && <span>{switcherInput}</span>}
      </label>
    </div>
  );
};
