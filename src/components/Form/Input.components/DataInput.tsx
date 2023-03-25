import React from 'react';
import { IProps } from './IProps';

class DateInput extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div>
        <label className="label__container">
          Date:
          <input
            type="date"
            name="date"
            className={this.props.dateInput === '' ? 'validate' : 'no_validate '}
          />
          {this.props.dateInput && <span>{this.props.dateInput}</span>}
        </label>
      </div>
    );
  }
}

export default DateInput;
