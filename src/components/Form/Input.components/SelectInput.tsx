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
          className={this.props.selectInput === '' ? 'validate' : 'no_validate'}
        >
          <option defaultChecked value="select">
            Select your country
          </option>
          <option defaultChecked value="Belarus">
            Belarus
          </option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Kazakhstan">Kazakhstan</option>
        </select>
        {this.props.selectInput && <span>{this.props.selectInput}</span>}
      </label>
    );
  }
}

export default SelectInput;
