import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test, vitest } from 'vitest';
import AvatarLogout from '../../../../src/app/ui/components/AvatarComponent';

describe('AvatarLogout', () => {
    const mockHandleEndSession = vitest.fn();

    test('should call handleEndSession when the avatar image is clicked', () => {
        const { getByTestId } = render(
            <AvatarLogout handleEndSession={mockHandleEndSession} />
        );

        fireEvent.click(getByTestId('avatar-logout-button'));

        expect(mockHandleEndSession).toHaveBeenCalledTimes(2);
    });

    test('should render the avatar image correctly', () => {
        const { getByTestId } = render(
            <AvatarLogout handleEndSession={mockHandleEndSession} />
        );

        const avatarImage = getByTestId('avatar-logout-button');
        expect(avatarImage).toBeInTheDocument();
        expect(avatarImage).toHaveAttribute('alt', 'Avatar de usuario - Cerrar sesión');
    });

    test('should match snapshot', () => {
        const { asFragment } = render(
            <AvatarLogout handleEndSession={mockHandleEndSession} />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
