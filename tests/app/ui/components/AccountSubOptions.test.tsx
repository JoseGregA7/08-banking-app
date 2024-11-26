import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import SubOptions from '../../../../src/app/ui/components/AccountSubOptions';

describe('SubOptions', () => {
  const mockHandleWithdrawTypeChange = vitest.fn();
  const mockHandleWithdrawalAmountChange = vitest.fn();
  const mockHandleWithdrawalSubmit = vitest.fn();
  const mockHandleDepositTypeChange = vitest.fn();
  const mockHandleDepositAmountChange = vitest.fn();
  const mockHandleDepositSubmit = vitest.fn();
  const mockHandleBuyTypeChange = vitest.fn();
  const mockHandleBuyAmountChange = vitest.fn();
  const mockHandleBuySubmit = vitest.fn();

  const state = {
    depositType: 'BRANCH',
    depositAmount: 100,
    withdrawalType: 'ATM_WITHDRAWAL',
    withdrawalAmount: 200,
    buyType: 'PHYSICAL_ESTABLISHMENT',
    buyAmount: 150,
  };

  test('should render DepositOptions when option is "depositos"', () => {
    const { getByTestId } = render(
      <SubOptions
        option="depositos"
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    expect(getByTestId('deposit-form')).toBeInTheDocument();
  });

  test('should render WithdrawalOptions when option is "retiros"', () => {
    const { getByTestId } = render(
      <SubOptions
        option="retiros"
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    expect(getByTestId('withdraw-options-wrapper')).toBeInTheDocument();
  });

  test('should render BuyOptions when option is "compras"', () => {
    const { getByTestId } = render(
      <SubOptions
        option="compras"
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );

    expect(getByTestId('buy-options-wrapper')).toBeInTheDocument();
  });

  test('should render nothing when option is not recognized', () => {
    const { queryByTestId } = render(
      <SubOptions
        option="unknown"
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
        handleBuySubmit={mockHandleBuySubmit}
        state={state}
      />
    );
    expect(queryByTestId('deposit-form')).toBeNull();
    expect(queryByTestId('withdraw-options-wrapper')).toBeNull();
    expect(queryByTestId('buy-options-wrapper')).toBeNull();
  });
});
