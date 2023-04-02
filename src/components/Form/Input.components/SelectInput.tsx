import React from 'react';
import { validateSelect } from '../utility/input-valide';
import { IFormProps } from './IProps';

export const SelectInput: React.FC<IFormProps> = ({ register, errors }) => {
  return (
    <label className="label__container">
      Select country:
      <select
        {...register('select', {
          required: 'input select',
          validate: validateSelect,
        })}
        name="select"
        defaultValue={'select'}
        className={errors.select?.message ? 'no_validate' : 'validate'}
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
      {errors.select?.message && <span>{errors.select?.message}</span>}
    </label>
  );
};
