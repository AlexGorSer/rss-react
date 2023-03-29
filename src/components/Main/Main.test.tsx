import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Main from './Main';

describe('Main', () => {
  it('Main is render', () => {
    render(<Main />);

    expect(screen.getAllByRole('img')).toBeTruthy();
    expect(screen.getByText(/Count:/i)).toBeInTheDocument();
  });

  it('input is render', () => {
    render(<Main />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'test' } });
    expect(screen.getByPlaceholderText('Search')).toHaveValue('test');
  });
});
