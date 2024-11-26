import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import BuyOptions from '../../../../src/app/ui/components/BuyOptions';

describe('BuyOptions', () => {
  const mockHandleBuyTypeChange = vitest.fn();
  const mockHandleBuyAmountChange = vitest.fn();
  const mockHandleBuySubmit = vitest.fn();
  const state = {
    buyType: 'PHYSICAL_ESTABLISHMENT',
    buyAmount: 100,
  };

  test('should call handleBuySubmit when submit button is clicked', () => {
    const { getByTestId } = render(
      <BuyOptions
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    const formElement = getByTestId('buy-options-wrapper');
    expect(formElement).toBeInTheDocument(); 

    fireEvent.click(getByTestId('buy-submit-button'));

    expect(mockHandleBuySubmit).toHaveBeenCalledTimes(1);
  });

  test('should call handleBuyTypeChange when buy type is selected', () => {
    const { getByTestId } = render(
      <BuyOptions
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    fireEvent.change(getByTestId('buy-type-select'), {
      target: { value: 'WEB_PAGE' },
    });

    expect(mockHandleBuyTypeChange).toHaveBeenCalledTimes(1);
  });

  test('should call handleBuyAmountChange when amount is entered', () => {
    const { getByTestId } = render(
      <BuyOptions
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    fireEvent.change(getByTestId('buy-amount-input'), {
      target: { value: '200' },
    });

    expect(mockHandleBuyAmountChange).toHaveBeenCalledTimes(1);
  });

  test('should match snapshot', () => {
    const { asFragment } = render(
      <BuyOptions
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
