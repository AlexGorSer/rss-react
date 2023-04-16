import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Form } from './Form';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Form', () => {
  it('Form is render', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
