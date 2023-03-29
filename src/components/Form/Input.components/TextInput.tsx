import React from 'react';
import { IProps } from './IProps';

class TextInput extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className="text__container">
        <label className="label__container">
          Input your name:
          <input
            type="text"
            name="text"
            className={this.props.textInputMessage == '' ? 'validate' : 'no_validate'}
          />
          {this.props.textInputMessage && <span>{this.props.textInputMessage}</span>}
        </label>
      </div>
    );
  }
}

export default TextInput;
