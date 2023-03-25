import React from 'react';

class CheckboxInput extends React.Component {
  render(): React.ReactNode {
    return (
      <label>
        I consent to my personal data :
        <input type="checkbox" name="checkbox" defaultChecked={false} />
      </label>
    );
  }
}

export default CheckboxInput;
