import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Html } from './Html';
import { PageNotFound } from './components/404/PageNotFound';

describe('App', () => {
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

  it('HTML render', () => {
    const { getAllByText } = render(
      <Html>
        <PageNotFound />
      </Html>
    );
    expect(getAllByText(/Page Not Found/i)).toBeTruthy();
  });
});
