import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import WithdrawOptions from '../../../../src/app/ui/components/WithdrawalOptions';

describe('WithdrawOptions', () => {
    const mockHandleWithdrawTypeChange = vitest.fn();
    const mockHandleWithdrawalAmountChange = vitest.fn();
    const mockHandleWithdrawalSubmit = vitest.fn();
    const state = {
        withdrawalType: 'ATM_WITHDRAWAL',
        withdrawalAmount: 100,
    };

    test('should call handleWithdrawalSubmit when submit button is clicked', () => {
        const { getByTestId } = render(
            <WithdrawOptions
                handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
                handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
                handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
                state={state}
            />
        );

        const formElement = getByTestId('withdraw-options-wrapper');
        expect(formElement).toBeInTheDocument();

        fireEvent.click(getByTestId('withdraw-submit-button'));

        expect(mockHandleWithdrawalSubmit).toHaveBeenCalledTimes(1);
    });

    test('should call handleWithdrawTypeChange when withdrawal type is selected', () => {
        const { getByTestId } = render(
            <WithdrawOptions
                handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
                handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
                handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
                state={state}
            />
        );

        fireEvent.change(getByTestId('withdraw-type-select'), {
            target: { value: 'OTHER_WITHDRAWAL' },
        });

        expect(mockHandleWithdrawTypeChange).toHaveBeenCalledTimes(1);
    });

    test('should call handleWithdrawalAmountChange when amount is entered', () => {
        const { getByTestId } = render(
            <WithdrawOptions
                handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
                handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
                handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
                state={state}
            />
        );

        fireEvent.change(getByTestId('withdraw-amount-input'), {
            target: { value: '200' },
        });

        expect(mockHandleWithdrawalAmountChange).toHaveBeenCalledTimes(1);
    });

    test('should match snapshot', () => {
        const { asFragment } = render(
            <WithdrawOptions
                handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
                handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
                handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
                state={state}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
