import React from 'react';
import { validateName } from '../utility/input-valide';
import { IFormProps } from './IProps';

export const TextInput: React.FC<IFormProps> = ({ register, errors }) => {
  return (
    <div className="text__container">
      <label className="label__container">
        Input your name:
        <input
          {...register('text', {
            required: 'input name',
            validate: validateName,
          })}
          type="text"
          name="text"
          className={errors.text?.message ? 'no_validate' : 'validate'}
        />
        {errors.text && <span>{errors.text.message}</span>}
      </label>
    </div>
  );
};
