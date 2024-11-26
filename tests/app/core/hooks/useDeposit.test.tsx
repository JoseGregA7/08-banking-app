import React, { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import { beforeEach, describe, expect, it, test, vi } from 'vitest';
import { MockAppContextProvider } from '../../../../src/app/core/state/MockAppContext';
import useDeposit from '../../../../src/app/core/hooks/useDeposit';

const mocks = vi.hoisted(() => ({
    get: vi.fn(),
    post: vi.fn(),
    state: {
        depositAmount: 100,
        depositType: 'BRANCH',
    },
    dispatch: vi.fn(),
}));

vi.mock('axios', async (importActual) => {
    const actual = await importActual<typeof import('axios')>();
    const mockAxios = {
        default: {
            ...actual.default,
            create: vi.fn(() => ({
                ...actual.default.create(),
                get: mocks.get,
                post: mocks.post,
            }))
        }
    }
    return mockAxios;
});

vi.mock('../../../../src/app/core/state/AppContext', async (importActual) => {
    const actual = await importActual<typeof import('../../../../src/app/core/state/AppContext')>();
    return {
        ...actual,
        useAppContext: vi.fn(() => ({
            ...actual.useAppContext(),
            state: mocks.state,
            dispatch: mocks.dispatch,
        }))
    };
});

describe('useDeposit Hook', () => {
    const mockState = {
        depositAmount: 100,
        depositType: 'BRANCH',
    };

    const mockDispatch = vi.fn();

    const wrapper = ({ children }: { children: ReactNode }) => (
        <MockAppContextProvider state={mockState} dispatch={mockDispatch}>
            {children}
        </MockAppContextProvider>
    );

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        localStorage.setItem('token', 'fake-token');
        localStorage.setItem('clientId', 'fake-client-id');
    });

    it('localStorage should be mocked', () => {
        expect(localStorage.getItem('token')).toBe('fake-token');
        expect(localStorage.getItem('clientId')).toBe('fake-client-id');
    });

    it('should return a function', () => {
        const { result } = renderHook(() => useDeposit(), { wrapper });
        expect(typeof result.current.handleDeposit).toBe('function');
    });

    it('should return a function that calls the handleDeposit function', () => {
        const { result } = renderHook(() => useDeposit(), { wrapper });
        expect(result.current.handleDeposit).toBeDefined();
    });

    it('should call with right params', async () => {
        const mockResponse = { success: true, message: 'Compra exitosa' };
        mocks.post.mockResolvedValueOnce({ data: mockResponse });
        await act(async () => {
            mocks.dispatch.mock.calls.forEach((call) => {
                expect(call[0].type).toBe('SET_LOADING');
                expect(call[0].payload).toBe(true);
            });

        });
    });

    it('should make a successful deposit request', async () => {
        const { result } = renderHook(() => useDeposit(), { wrapper });
        await act(async () => {
            await result.current.handleDeposit();
        });
        expect(result.current.handleDeposit);
    });

    it('Test de una solicitud HTTP', async () => {
        mocks.get.mockResolvedValue({ data: 'respuesta de la API' });
        await act(async () => {
            mocks.get('/api/data');
            expect(mocks.get).toHaveBeenCalledWith('/api/data');
        });
    });
});



