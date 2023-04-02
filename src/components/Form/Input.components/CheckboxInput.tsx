import React from 'react';
import { IFormProps } from './IProps';

export const CheckboxInput: React.FC<IFormProps> = ({ register, errors }) => {
  return (
    <div className={errors.checkbox?.message === '' ? 'no_validate' : 'validate'}>
      <label className="label__container">
        I consent to my personal data :
        <input
          {...register('checkbox', {
            required: 'Agree consent to my personal data',
          })}
          type="checkbox"
          name="checkbox"
          defaultChecked={false}
          className="checkbox"
        />
        {errors.checkbox?.message && <span>{errors.checkbox?.message}</span>}
      </label>
    </div>
  );
};
