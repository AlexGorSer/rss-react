import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { App } from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe('App', () => {
  it('Render', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText(/About/i)).toBeInTheDocument();
  });

  it('not-fount page', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/page-not-found']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(getAllByText(/Page Not Found/i)).toBeTruthy();
  });
});
