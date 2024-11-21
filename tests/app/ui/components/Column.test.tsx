import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import React from "react";
import Column from "../../../../src/app/ui/components/Column";

describe('Pruebas en el componente Column', () => {
    test('Match snapshot', () => {
        render(<Column columnIndex={1} dropPiece={() => { }} columnData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />)
        expect(document.body).toMatchSnapshot();
    })
    test('Match snapshot', () => {
        render(<Column columnIndex={2} dropPiece={() => { }} columnData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />)
        expect(document.body).toMatchSnapshot();
    })
    test('debe tener un data-testid único para la columna', () => {
        const mockBoard = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];

        const handleDropPiece = vi.fn();
        const { getByTestId } = render(
            <Column columnIndex={0} dropPiece={handleDropPiece} columnData={mockBoard[0]} />
        );

        const columnElement = getByTestId('column-0');
        expect(columnElement).toBeInTheDocument();
    });

    test('debe tener las clases correctas para cada celda dependiendo de su valor', () => {
        const mockBoard = [
            [1, 2, 0, 0, 0, 0, 0],
        ];

        const handleDropPiece = vi.fn();
        const { getByTestId } = render(
            <Column columnIndex={0} dropPiece={handleDropPiece} columnData={mockBoard[0]} />
        );

        const cell0 = getByTestId('cell-0-0');
        const cell1 = getByTestId('cell-0-1');
        const cell2 = getByTestId('cell-0-2');

        expect(cell0).toHaveClass('cell--player1');
        expect(cell1).toHaveClass('cell--player2');
        expect(cell2).not.toHaveClass('cell--player1');
        expect(cell2).not.toHaveClass('cell--player2');
    });

});