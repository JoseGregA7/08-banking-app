import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import AccountStatus from '../../../../src/app/ui/components/AccountStatus';

describe('AccountStatus', () => {
  const accountInfo = {
    id: 12,
    name: 'John Doe',
    amount: 4000,
  };

  test('should render account status details when accountInfo is provided', () => {
    const { getByTestId, getByText } = render(
      <AccountStatus accountInfo={accountInfo} />
    );
    expect(getByTestId('account-status-wrapper')).toBeInTheDocument();
    expect(getByTestId('account-status-title')).toHaveTextContent('Estado de la Cuenta');
    expect(getByText('12')).toBeInTheDocument();
    expect(getByText('Saldo Actual:')).toBeInTheDocument();
    expect(getByText('4000')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { asFragment } = render(
      <AccountStatus accountInfo={accountInfo} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

});
