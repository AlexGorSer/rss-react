import { App } from './App';
import React from 'react';
import './index.scss';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Html } from './Html';

export function render(url: string, opts) {
  const html = renderToPipeableStream(
    <Html>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    opts
  );
  return { html };
}
