import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { testData } from '../ProductsCards/ProductsCards.test';
import { ModalCard } from './ModalCard';

describe('ModalCard', () => {
  it('ModalCard is render', () => {
    const setModal = vi.fn();
    render(<ModalCard {...testData[0]} setModal={setModal} />);

    expect(screen.getByText(`${testData[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(`Status: ${testData[0].status}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${testData[0].gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Species: ${testData[0].species}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${testData[0].location.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Origin: ${testData[0].origin.name}`)).toBeInTheDocument();
  });
});
