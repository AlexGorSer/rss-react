import React from 'react';

class TextInput extends React.Component {
  render(): React.ReactNode {
    return (
      <label>
        Input your text:
        <input type="text" name="text" />
      </label>
    );
  }
}

export default TextInput;
