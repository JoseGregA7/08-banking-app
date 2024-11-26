import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import DepositOptions from '../../../../src/app/ui/components/DepositOptions';

describe('DepositOptions', () => {
    const mockHandleDepositTypeChange = vitest.fn();
    const mockHandleDepositAmountChange = vitest.fn();
    const mockHandleDepositSubmit = vitest.fn();
    const state = {
        depositType: 'BRANCH',
        depositAmount: 100,
    };

    test('should call handleDepositSubmit when submit button is clicked', () => {
        const { getByTestId } = render(
          <DepositOptions
            handleDepositTypeChange={mockHandleDepositTypeChange}
            handleDepositAmountChange={mockHandleDepositAmountChange}
            handleDepositSubmit={mockHandleDepositSubmit}
            state={state}
          />
        );
        const formElement = getByTestId('deposit-form');
        expect(formElement).toBeInTheDocument();
        fireEvent.click(getByTestId('deposit-submit-button'));
        expect(mockHandleDepositSubmit).toHaveBeenCalledTimes(1);
      });
      
    test('should call handleDepositTypeChange when deposit type is selected', () => {
        const { getByTestId } = render(
            <DepositOptions
                handleDepositTypeChange={mockHandleDepositTypeChange}
                handleDepositAmountChange={mockHandleDepositAmountChange}
                handleDepositSubmit={mockHandleDepositSubmit}
                state={state}
            />
        );

        fireEvent.change(getByTestId('deposit-type-select'), {
            target: { value: 'ATM' },
        });

        expect(mockHandleDepositTypeChange).toHaveBeenCalledTimes(1);
        expect(mockHandleDepositTypeChange).toHaveBeenCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({ value: 'BRANCH' })
            })
        );
    });

    test('should call handleDepositAmountChange when amount is entered', () => {
        const { getByTestId } = render(
            <DepositOptions
                handleDepositTypeChange={mockHandleDepositTypeChange}
                handleDepositAmountChange={mockHandleDepositAmountChange}
                handleDepositSubmit={mockHandleDepositSubmit}
                state={state}
            />
        );

        fireEvent.change(getByTestId('deposit-amount-input'), {
            target: { value: '150' },
        });

        expect(mockHandleDepositAmountChange).toHaveBeenCalledTimes(1);
    });
    test('should call handleDepositSubmit when submit button is clicked', () => {
        const { getByTestId } = render(
            <DepositOptions
                handleDepositTypeChange={mockHandleDepositTypeChange}
                handleDepositAmountChange={mockHandleDepositAmountChange}
                handleDepositSubmit={mockHandleDepositSubmit}
                state={state}
            />
        );
        fireEvent.click(getByTestId('deposit-submit-button'));
        expect(mockHandleDepositSubmit).toHaveBeenCalledTimes(2);

    });

    test('should match snapshot', () => {
        const { asFragment } = render(
            <DepositOptions
                handleDepositTypeChange={mockHandleDepositTypeChange}
                handleDepositAmountChange={mockHandleDepositAmountChange}
                handleDepositSubmit={mockHandleDepositSubmit}
                state={state}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
