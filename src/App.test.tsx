import React from 'react';
import { render, screen } from '@testing-library/react';
// import { describe } from 'vitest';
import App from './App';

describe('App', () => {
  it('Render', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('React');
  });
  test('test', () => {
    render(<App />);
    screen.debug();

    expect(screen.getByRole('heading')).toHaveTextContent('React');
  });
});
