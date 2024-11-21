import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { useGameLogic } from '../../../../src/app/core/hooks/useGameLogic';
import { AppProvider } from '../../../../src/app/core/state/AppContext';
import { setWinner, setDraw, dropPiece, changePlayer } from '../../../../src/app/core/state/cards/actions';
import { expect, test, vi } from 'vitest';
import { describe } from 'node:test';

vi.mock('../state/cards/actions', () => ({
    setWinner: vi.fn(),
    setDraw: vi.fn(),
    changePlayer: vi.fn(),
    resetGame: vi.fn()
}));

const mockDispatch = vi.fn();

describe('useGameLogic', () => {
    const Wrapper = ({ children }) => {
        const state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ],
            currentPlayer: 2,
            winner: null,
            draw: false
        };
        console.log('trerere', state.board)
        return <AppProvider value={{ state, dispatch: mockDispatch }}>{children}</AppProvider>;
    };
    test('debe disparar las acciones correspondientes al hacer una jugada', () => {
        const { result } = renderHook(() => useGameLogic(), { wrapper: Wrapper });
        act(() => {
            result.current.handleDropPiece(2);
            result.current.currentPlayer = 1;
        });
        expect(mockDispatch).toHaveBeenCalledWith(dropPiece(2));
        expect(mockDispatch).toHaveBeenCalledWith(changePlayer());
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(result.current.currentPlayer).toBe(1);
    });

    test('debe disparar la acción setWinner cuando haya un ganador', () => {
        const Wrapper = ({ children }) => {
            const state = {
                board: [
                    [1, 2, 3, 4, 5, 6, 7],
                    [1, 9, 10, 11, 12, 13, 14],
                    [1, 16, 17, 18, 19, 20, 21],
                    [1, 23, 24, 25, 26, 27, 28],
                    [2, 30, 31, 32, 33, 34, 35],
                    [1, 37, 38, 39, 40, 41, 42]
                ],
                currentPlayer: 1,
                winner: null,
                draw: false
            };
            return <AppProvider value={{ state, dispatch: mockDispatch }}>{children}</AppProvider>;
        };
        const { result } = renderHook(() => useGameLogic(), { wrapper: Wrapper });
        expect(mockDispatch).toHaveBeenCalledWith({ payload: 1, type: 'SET_WINNER' });
        expect(mockDispatch).toHaveBeenCalledWith(setWinner(1));
        expect(result.current.currentPlayer).toBe(1);
        expect(result.current.winner).toBe(null);
        act(() => {
            result.current.currentPlayer = 2;
            result.current.board = [
                [2, 2, 3, 4, 5, 6, 7],
                [1, 9, 10, 11, 12, 13, 14],
                [2, 16, 17, 18, 19, 20, 21],
                [1, 23, 24, 25, 26, 27, 28],
                [2, 30, 31, 32, 33, 34, 35],
                [1, 37, 38, 39, 40, 41, 42]
            ];
            result.current.handleDropPiece(1);
        });
        expect(result.current.board[0][0]).toBe(2);

    });

    test('debe disparar la acción de empate', () => {
        const Wrapper = ({ children }) => {
            const state = {
                board: [
                    [1, 2, 1, 1, 1, 2, 1],
                    [2, 1, 1, 2, 2, 1, 2],
                    [1, 2, 2, 1, 2, 1, 2],
                    [2, 1, 1, 2, 2, 1, 2],
                    [1, 2, 2, 2, 1, 2, 1],
                    [2, 1, 2, 1, 2, 1, 1]

                ],
                currentPlayer: 1,
                winner: null,
                draw: false
            };
            console.log('trerere', state.board)
            return <AppProvider value={{ state, dispatch: mockDispatch }}>{children}</AppProvider>;
        };
        const { result } = renderHook(() => useGameLogic(), { wrapper: Wrapper });
        act(() => {
            result.current.draw = true;
        });
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_DRAW' });
        expect(mockDispatch).toHaveBeenCalledWith(setDraw());
        expect(result.current.draw).toBe(true);

    });
});

