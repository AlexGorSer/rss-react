import React from 'react';
import { IFormProps } from './IProps';

export const SwitcherInput: React.FC<IFormProps> = ({ register, errors }) => {
  return (
    <div className={errors.gender?.message ? 'no_validate' : 'validate'}>
      <label className="label__container">
        Gender:
        <label>
          Male:
          <input
            {...register('gender', {
              required: 'Select gender',
            })}
            type="radio"
            value="Male"
          />
        </label>
        <label>
          Female:
          <input
            {...register('gender', {
              required: 'Select gender',
            })}
            type="radio"
            value="Female"
          />
        </label>
        {errors.gender?.message && <span>{errors.gender?.message}</span>}
      </label>
    </div>
  );
};
