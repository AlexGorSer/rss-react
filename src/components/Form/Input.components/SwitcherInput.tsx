import React from 'react';

class SwitcherInput extends React.Component {
  render(): React.ReactNode {
    return (
      <label>
        Gender:
        <label>
          Male:
          <input type="radio" name="gander" value="male" />
        </label>
        <label>
          Female:
          <input type="radio" name="gander" value="female" />
        </label>
      </label>
    );
  }
}

export default SwitcherInput;
