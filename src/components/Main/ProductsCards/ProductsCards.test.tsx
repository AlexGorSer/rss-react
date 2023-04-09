import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { ProductsCards } from './ProductsCards';

export const testData = [
  {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  },
];

describe('ProductsCards', () => {
  it('ProductsCards is render', () => {
    const findCard = vi.fn();
    render(<ProductsCards {...testData[0]} findCard={findCard} />);

    expect(screen.getByText(`${testData[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(`${testData[0].status}`)).toBeInTheDocument();
    expect(screen.getByText(`${testData[0].gender}`)).toBeInTheDocument();
    expect(screen.getByText(`${testData[0].species}`)).toBeInTheDocument();
  });
});
