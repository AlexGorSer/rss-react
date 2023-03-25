import React from 'react';

class DateInput extends React.Component {
  render(): React.ReactNode {
    return (
      <label>
        Date:
        <input type="date" name="date" />
      </label>
    );
  }
}

export default DateInput;
