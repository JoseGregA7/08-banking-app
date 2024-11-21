import { describe, expect, it } from "vitest";
import { checkWinner, handleDropPiece } from "../../../../src/app/core/utils/gameUtils";


describe('gameUtils', () => {

  describe('checkWinner', () => {
    it('debe detectar un ganador horizontal', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];

      const winner = checkWinner(board);

      expect(winner).toBe(1);
    });

    it('debe detectar un ganador vertical', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0]
      ];

      const winner = checkWinner(board);

      expect(winner).toBe(1);
    });

    it('debe detectar un ganador diagonal (bottom-left to top-right)', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0]
      ];

      const winner = checkWinner(board);

      expect(winner).toBe(1);
    });

    it('debe detectar un ganador diagonal (top-left to bottom-right)', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0]
      ];

      const winner = checkWinner(board);

      expect(winner).toBe(1);
    });

    it('debe devolver null si no hay ganador', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];

      const winner = checkWinner(board);

      expect(winner).toBeNull();
    });
  });

  describe('handleDropPiece', () => {
    it('debe colocar una ficha en la columna correcta', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];

      const newBoard = handleDropPiece(board, 3, 1);

      expect(newBoard[5][3]).toBe(1);
    });

    it('debe colocar la ficha en la fila más baja disponible', () => {
      const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0]
      ];

      const newBoard = handleDropPiece(board, 3, 2);

      expect(newBoard[4][3]).toBe(2);
    });

    it('debe mostrar un aviso si la columna está llena', () => {
      const board = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ];

      const newBoard = handleDropPiece(board, 3, 2);
      expect(newBoard).toEqual(board);
    });
  });
});
