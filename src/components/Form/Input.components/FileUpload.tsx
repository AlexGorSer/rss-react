import React from 'react';
import { IProps } from './IProps';

class FileUpload extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <label className="label__container">
        Upload file
        <input
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          className={this.props.fileUpload === '' ? 'validate' : 'no_validate '}
        />
        {this.props.fileUpload && <span>{this.props.fileUpload}</span>}
      </label>
    );
  }
}

export default FileUpload;
