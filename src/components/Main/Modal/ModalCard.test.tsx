import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { testData } from '../ProductsCards/ProductsCards.test';
import { ModalCard } from './ModalCard';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('ModalCard', () => {
  it('ModalCard is render', () => {
    render(
      <Provider store={store}>
        <ModalCard {...testData[0]} />
      </Provider>
    );

    expect(screen.getByText(`${testData[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(`Status: ${testData[0].status}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${testData[0].gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Species: ${testData[0].species}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${testData[0].location.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Origin: ${testData[0].origin.name}`)).toBeInTheDocument();
  });
});
