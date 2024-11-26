import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OperationsDashboard from '../../../../src/app/ui/components/OperationsDashboard';
import { describe, expect, test, vitest } from 'vitest';

describe('OperationsDashboard', () => {
  const mockHandleWithdrawTypeChange = vitest.fn();
  const mockHandleWithdrawalAmountChange = vitest.fn();
  const mockHandleWithdrawalSubmit = vitest.fn();
  const mockHandleDepositTypeChange = vitest.fn();
  const mockHandleDepositAmountChange = vitest.fn();
  const mockHandleDepositSubmit = vitest.fn();
  const mockHandleBuySubmit = vitest.fn();
  const mockHandleBuyTypeChange = vitest.fn();
  const mockHandleBuyAmountChange = vitest.fn();
  const mockHandleOptionClick = vitest.fn();
  const mockHandleClose = vitest.fn();

  const accountInfo = { balance: 1000, currency: 'USD' };
  const selectedOption = 'withdraw';
  const state = { isLoading: false };

  test('should render the component with AccountStatus and AccountOptions', () => {
    const { getByText, getByRole } = render(
      <OperationsDashboard 
        accountInfo={accountInfo}
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        state={state}
        selectedOption={selectedOption}
        handleOptionClick={mockHandleOptionClick}
        handleClose={mockHandleClose}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuySubmit={mockHandleBuySubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
      />
    );
    expect(getByText(`Estado de la Cuenta`)).toBeInTheDocument();
    expect(getByText('Opciones de la Cuenta')).toBeInTheDocument(); 
  });

  test('should call handleOptionClick when an option is clicked', () => {
    const { getByText } = render(
      <OperationsDashboard 
        accountInfo={accountInfo}
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        state={state}
        selectedOption={selectedOption}
        handleOptionClick={mockHandleOptionClick}
        handleClose={mockHandleClose}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuySubmit={mockHandleBuySubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
      />
    );
    fireEvent.click(getByText('Depósitos'));
    expect(mockHandleOptionClick).toHaveBeenCalledTimes(1);
  });

  test('should call handleClose when close button is clicked', () => {
    const { getByRole } = render(
      <OperationsDashboard 
        accountInfo={accountInfo}
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        state={state}
        selectedOption={selectedOption}
        handleOptionClick={mockHandleOptionClick}
        handleClose={mockHandleClose}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuySubmit={mockHandleBuySubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
      />
    );
    fireEvent.click(getByRole('button', { name: /cerrar/i }));
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  test('should have correct classes applied to elements', () => {
    const { container } = render(
      <OperationsDashboard 
        accountInfo={accountInfo}
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        state={state}
        selectedOption={selectedOption}
        handleOptionClick={mockHandleOptionClick}
        handleClose={mockHandleClose}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuySubmit={mockHandleBuySubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
      />
    );
    expect(container.firstChild).toHaveClass('OperationsDashboard__wrapper');
  });

  test('should match snapshot', () => {
    const { asFragment } = render(
      <OperationsDashboard 
        accountInfo={accountInfo}
        handleWithdrawTypeChange={mockHandleWithdrawTypeChange}
        handleWithdrawalAmountChange={mockHandleWithdrawalAmountChange}
        handleWithdrawalSubmit={mockHandleWithdrawalSubmit}
        state={state}
        selectedOption={selectedOption}
        handleOptionClick={mockHandleOptionClick}
        handleClose={mockHandleClose}
        handleDepositTypeChange={mockHandleDepositTypeChange}
        handleDepositAmountChange={mockHandleDepositAmountChange}
        handleDepositSubmit={mockHandleDepositSubmit}
        handleBuySubmit={mockHandleBuySubmit}
        handleBuyTypeChange={mockHandleBuyTypeChange}
        handleBuyAmountChange={mockHandleBuyAmountChange}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
