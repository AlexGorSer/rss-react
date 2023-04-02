import React from 'react';
import { validateDate } from '../utility/input-valide';
import { IFormProps } from './IProps';

export const DateInput: React.FC<IFormProps> = ({ register, errors }) => {
  return (
    <div>
      <label className="label__container">
        Date:
        <input
          {...register('date', {
            required: 'input date',
            validate: validateDate,
          })}
          type="date"
          name="date"
          className={errors.date?.message ? 'no_validate' : 'validate'}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </label>
    </div>
  );
};
