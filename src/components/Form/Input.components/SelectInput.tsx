import React from 'react';
import { IProps } from './IProps';

class SelectInput extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <label className="label__container">
        Select country:
        <select
          name="select"
          defaultValue={'select'}
          className={this.props.selectInput === '' ? 'validate' : 'no_validate '}
        >
          <option defaultChecked value="select">
            Select your country
          </option>
          <option defaultChecked value="belarus">
            Belarus
          </option>
          <option value="russia">Russia</option>
          <option value="ukraine">Ukraine</option>
          <option value="kazakhstan">Kazakhstan</option>
        </select>
        {this.props.selectInput && <span>{this.props.selectInput}</span>}
      </label>
    );
  }
}

export default SelectInput;
