import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MainLayout } from './MainLayout';
import { BrowserRouter } from 'react-router-dom';

describe('PageNotFound', () => {
  it('PageNotFound is render', () => {
    render(<MainLayout />, { wrapper: BrowserRouter });
    expect(screen.getAllByText('Main')).toBeTruthy();
    expect(screen.getAllByText('About')).toBeTruthy();
    expect(screen.getAllByText('Contacts')).toBeTruthy();
  });
});
