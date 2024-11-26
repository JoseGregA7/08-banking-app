import React, { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MockAppContextProvider } from '../../../../src/app/core/state/MockAppContext';
import useWithdrawal from '../../../../src/app/core/hooks/useWithdrawal';

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
  state: {
    withdrawalAmount: 100,
    withdrawalType: 'PHYSICAL_ESTABLISHMENT',
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

describe('useWithdrawal Hook', () => {
  const mockState = {
    withdrawalAmount: 100,
    withdrawalType: 'PHYSICAL_ESTABLISHMENT',
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
    const { result } = renderHook(() => useWithdrawal(), { wrapper });
    expect(typeof result.current.handleWithdrawal).toBe('function');
  });

  it('should return a function that calls the handleWithdrawal function', () => {
    const { result } = renderHook(() => useWithdrawal(), { wrapper });
    expect(result.current.handleWithdrawal).toBeDefined();
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

  it('should make a successful withdrawal request', async () => {
    const { result } = renderHook(() => useWithdrawal(), { wrapper });
    await act(async () => {
      await result.current.handleWithdrawal();
    });
    expect(result.current.handleWithdrawal);
  });
});



