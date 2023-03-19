import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('Footer is render', () => {
    render(<Footer />);
    expect(screen.getByText(/AlexGorSer/i)).toBeInTheDocument();
  });
});
