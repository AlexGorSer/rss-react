import React from 'react';
import { IProps } from './IProps';

class SwitcherInput extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className={this.props.switcherInput === '' ? 'validate' : 'no_validate'}>
        <label className="label__container">
          Gender:
          <label>
            Male:
            <input type="radio" name="gander" value="Male" />
          </label>
          <label>
            Female:
            <input type="radio" name="gander" value="Female" />
          </label>
          {this.props.switcherInput && <span>{this.props.switcherInput}</span>}
        </label>
      </div>
    );
  }
}

export default SwitcherInput;
