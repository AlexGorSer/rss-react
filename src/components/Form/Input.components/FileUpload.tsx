import React from 'react';
import { validateFile } from '../utility/input-valide';
import { IFormProps } from './IProps';

export const FileUpload: React.FC<IFormProps> = ({ register, errors }) => {
  return (
    <label className="label__container">
      Upload file
      <input
        {...register('file', {
          required: 'Select file',
          validate: validateFile,
        })}
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        className={errors.file?.message ? 'no_validate' : 'validate'}
      />
      {errors.file?.message && <span>{errors.file?.message}</span>}
    </label>
  );
};
