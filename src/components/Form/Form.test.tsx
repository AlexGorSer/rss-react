import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Form } from './Form';

describe('Form', () => {
  it('Form is render', () => {
    render(<Form />);

    screen.debug();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
