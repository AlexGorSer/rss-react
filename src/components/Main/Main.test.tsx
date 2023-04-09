import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Main } from './Main';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { testData } from './ProductsCards/ProductsCards.test';

const testAPI = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: testData,
};

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', async (_, res, ctx) => {
    return res(ctx.json(testAPI));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Main', () => {
  it('Main is render', () => {
    render(<Main />);

    expect(screen.getAllByRole('heading')).toBeTruthy();
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });

  it('input is render', () => {
    render(<Main />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'test' } });
    expect(screen.getByPlaceholderText('Search')).toHaveValue('test');
  });

  it('Api test render', async () => {
    render(<Main />);
    expect(await screen.findByText('Toxic Rick')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'test' } });
    fireEvent.submit(screen.getByPlaceholderText('Search'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: '' } });
    fireEvent.submit(screen.getByPlaceholderText('Search'));
    expect(await screen.findByText('Toxic Rick')).toBeInTheDocument();
  });
});
