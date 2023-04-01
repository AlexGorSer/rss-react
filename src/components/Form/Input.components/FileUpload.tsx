import React from 'react';
import { IProps } from './IProps';

export const FileUpload: React.FC<IProps> = ({ fileUpload }) => {
  return (
    <label className="label__container">
      Upload file
      <input
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        className={fileUpload === '' ? 'validate' : 'no_validate'}
      />
      {fileUpload && <span>{fileUpload}</span>}
    </label>
  );
};
