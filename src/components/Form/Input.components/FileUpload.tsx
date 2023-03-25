import React from 'react';

class FileUpload extends React.Component {
  render(): React.ReactNode {
    return (
      <label>
        Upload file
        <input type="file" name="file" accept="image/png, image/jpeg" />
      </label>
    );
  }
}

export default FileUpload;
