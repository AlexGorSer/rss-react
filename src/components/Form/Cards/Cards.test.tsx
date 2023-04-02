import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Cards } from './Cards';
import img from '../../../assets/github.svg';

const testData = {
  text: 'Alice',
  gender: 'Female',
  select: 'Russian',
  date: '10.10.1010',
  file: `${img}`,
  checkbox: true,
};

describe('Cards', () => {
  it('Cards is render', () => {
    render(<Cards {...testData} />);

    expect(screen.getByText(/Alice/i)).toBeInTheDocument();
  });
});
