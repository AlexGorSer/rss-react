import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('PageNotFound is render', () => {
    render(<PageNotFound />);
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
