import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Render', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText(/About/i)).toBeInTheDocument();
  });

  it('not-fount page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/page-not-found']}>
        <App />
      </MemoryRouter>
    );
    expect(getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
