import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ProductsCards from './ProductsCards';
import { products } from '../../../data/products';

describe('PageNotFound', () => {
  it('PageNotFound is render', () => {
    render(<ProductsCards {...products[0]} />);

    expect(screen.getByText(`${products[0].title}`)).toBeInTheDocument();
    expect(screen.getByText(`${products[0].description}`)).toBeInTheDocument();
  });
});
