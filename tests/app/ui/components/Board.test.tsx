import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from '../../../../src/app/ui/components/Board';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('Pruebas en el componente Board', () => {
  it('debe coincidir con el snapshot', () => {
    const mockBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];

    render(<Board board={mockBoard} handleDropPiece={() => {}} />);
    expect(document.body).toMatchSnapshot();
  });
  it('debe llamar al handleDropPiece al hacer clic en la columna', () => {
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
      <Board board={mockBoard} handleDropPiece={handleDropPiece} />
    );

    const column = getByTestId('column-0');
    expect(column).toBeInTheDocument();

    fireEvent.click(column);

    expect(handleDropPiece).toHaveBeenCalled(); 
  });

  it('debe llamar al handleDropPiece con el índice correcto', () => {
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
      <Board board={mockBoard} handleDropPiece={handleDropPiece} />
    );

    const column = getByTestId('column-0');
    fireEvent.click(column);

    expect(handleDropPiece).toHaveBeenCalledWith(0);
  });
});
