import React from 'react';
import { IProps } from './IProps';

class CheckboxInput extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className={this.props.checkboxInput === '' ? 'validate' : 'no_validate '}>
        <label className="label__container">
          I consent to my personal data :
          <input type="checkbox" name="checkbox" defaultChecked={false} className="checkbox" />
          {this.props.checkboxInput && <span>{this.props.checkboxInput}</span>}
        </label>
      </div>
    );
  }
}

export default CheckboxInput;
