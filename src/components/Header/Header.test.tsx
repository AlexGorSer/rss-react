import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from './Header';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Header.test', () => {
  it('Header.test is render', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getAllByText('Main')).toBeTruthy();
    expect(screen.getAllByText('About')).toBeTruthy();
    expect(screen.getAllByText('Contacts')).toBeTruthy();
    expect(screen.getAllByRole('link')).toBeTruthy();
  });

  it('link click', () => {
    render(<Header />, { wrapper: BrowserRouter });

    fireEvent.click(screen.getByText('About'));
    expect(screen.getAllByText('About')[0] as HTMLElement).toBeInTheDocument();

    fireEvent.click(screen.getByText('Contacts'));
    expect(screen.getAllByText('Contacts')[0] as HTMLElement).toBeInTheDocument();

    fireEvent.click(screen.getByText('Main'));
    expect(screen.getAllByText('Main')[0] as HTMLElement).toBeInTheDocument();
  });

  it('active class', () => {
    render(<Header />, { wrapper: BrowserRouter });

    fireEvent.click(screen.getByText('About'));

    expect(screen.getAllByRole('link')[1] as HTMLElement).toHaveClass('active');
    fireEvent.click(screen.getByText('Contacts'));
    expect(screen.getAllByRole('link')[3] as HTMLElement).toHaveClass('active');

    fireEvent.click(screen.getByText('Main'));
    expect(screen.getAllByRole('link')[0] as HTMLElement).toHaveClass('active');
  });

  it('active class', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')[1] as HTMLElement).toHaveClass('no_active');
    expect(screen.getAllByRole('link')[2] as HTMLElement).toHaveClass('no_active');
    expect(screen.getAllByRole('link')[0] as HTMLElement).toHaveClass('no_active');
  });
});
