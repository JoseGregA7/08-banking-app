import React from 'react';
import { TermsAndConditions } from '../../../../src/app/ui/components/TermsAndConditions';
import { describe, expect, it, test } from 'vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';


describe('TermAndConditions', () => {
  test('should render the component', () => {
    render(<TermsAndConditions />);
    expect(document.body).toHaveTextContent('Términos y Condiciones');
  });
  test('match snapshot', () => {
    const { asFragment } = render(<TermsAndConditions />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should have a link to the terms and conditions', () => {
    const { getByText } = render(<TermsAndConditions />);
    expect(getByText('Términos y Condiciones')).toBeInTheDocument();
  });
  test('Shouñd have a className of home__terms-conditions', () => {
    const { getByText } = render(<TermsAndConditions />);
    expect(getByText('Términos y Condiciones')).toHaveClass('home__terms-conditions');
  });
});