import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import BasicWrapper from '../../../../src/app/ui/components/BasicWrapper';

describe('BasicWrapper', () => {
    const mockHandleGoBack = vitest.fn();
    const mockHandleEndSession = vitest.fn();

    test('should call handleGoBack when back button is clicked', () => {
        const { getByTestId } = render(
            <BasicWrapper handleGoBack={mockHandleGoBack} handleEndSession={mockHandleEndSession}>
                <div>Test Content</div>
            </BasicWrapper>
        );
        fireEvent.click(getByTestId('back-button'));

        expect(mockHandleGoBack).toHaveBeenCalledTimes(1);
    });

    test('should call handleEndSession when AvatarLogout is interacted with', () => {
        const { getByTestId } = render(
            <BasicWrapper handleGoBack={mockHandleGoBack} handleEndSession={mockHandleEndSession}>
                <div>Test Content</div>
            </BasicWrapper>
        );

        fireEvent.click(getByTestId('avatar-logout-button'));

        expect(mockHandleEndSession).toHaveBeenCalledTimes(2);
    });

    test('should render the logo', () => {
        const { getByTestId } = render(
            <BasicWrapper handleGoBack={mockHandleGoBack} handleEndSession={mockHandleEndSession}>
                <div>Test Content</div>
            </BasicWrapper>
        );
        const logoElement = getByTestId('bank-logo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('alt', 'Logo de GregBank, banco en línea');
    });

    test('should render children correctly', () => {
        const { getByText } = render(
            <BasicWrapper handleGoBack={mockHandleGoBack} handleEndSession={mockHandleEndSession}>
                <div>Test Content</div>
            </BasicWrapper>
        );

        expect(getByText('Test Content')).toBeInTheDocument();
    });

    test('should render TermsAndConditions in footer', () => {
        const { getByTestId } = render(
            <BasicWrapper handleGoBack={mockHandleGoBack} handleEndSession={mockHandleEndSession}>
                <div>Test Content</div>
            </BasicWrapper>
        );

        const termsElement = getByTestId('terms-conditions');
        expect(termsElement).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const { asFragment } = render(
            <BasicWrapper handleGoBack={mockHandleGoBack} handleEndSession={mockHandleEndSession}>
                <div>Test Content</div>
            </BasicWrapper>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
