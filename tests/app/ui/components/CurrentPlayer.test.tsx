import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { describe } from "node:test";
import { expect, test } from "vitest";
import { CurrentPlayer } from '../../../../src/app/ui/components/CurrentPlayer';

describe('Pruebas en el componente CurrentPlayer', () => {
    test('Match snapshot', () => {
        const mockPlayer = 1;
        render(<CurrentPlayer currentPlayer={mockPlayer} />)
        expect(document.body).toMatchSnapshot();
    })
    test('Match snapshot', () => {
        const mockPlayer = 2;
        render(<CurrentPlayer currentPlayer={mockPlayer} />)
        expect(document.body).toMatchSnapshot();
    })

    test('Revisa el texto del componente', () => {
        const { getByText } = render(<CurrentPlayer currentPlayer={1} />)
        expect(getByText('Es el turno del Jugador:')).toBeInTheDocument();
    })
    test('Revisa la clase del componente', () => {
        const { getByText } = render(<CurrentPlayer currentPlayer={1} />)
        expect(getByText('Es el turno del Jugador:')).toHaveClass('current-player');
    })
    test('debe mostrar el turno del Jugador 1 con la clase correcta', () => {
        const { getByText } = render(<CurrentPlayer currentPlayer={1} />);
        expect(getByText('Es el turno del Jugador:')).toBeInTheDocument();
        const playerSpan = getByText('1');
        expect(playerSpan).toBeInTheDocument();
        expect(playerSpan).toHaveClass('current-player__player1');
    });

    test('debe mostrar el turno del Jugador 2 con la clase correcta', () => {
        const { getByText } = render(<CurrentPlayer currentPlayer={2} />);
        expect(getByText('Es el turno del Jugador:')).toBeInTheDocument();
        const playerSpan = getByText('2');
        expect(playerSpan).toBeInTheDocument();
        expect(playerSpan).toHaveClass('current-player__player2');
    });
});