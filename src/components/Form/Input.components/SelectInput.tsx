import React from 'react';

class SelectInput extends React.Component {
  render(): React.ReactNode {
    return (
      <label>
        Select country:
        <select name="select">
          <option value="russia">Russia</option>
          <option defaultChecked value="belarus">
            Belarus
          </option>
          <option value="ukraine">Ukraine</option>
          <option value="kazakhstan">Kazakhstan</option>
        </select>
      </label>
    );
  }
}

export default SelectInput;
