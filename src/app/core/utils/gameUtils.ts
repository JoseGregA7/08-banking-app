import { COLS, ROWS } from '../constants/gameDimensions';

export const checkWinner = (board: number[][]): number | null => {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const player = board[row][col];
      if (player !== 0) {

        // Horizontal
        if (col + 3 < COLS && player === board[row][col + 1] && player === board[row][col + 2] && player === board[row][col + 3]) {
          return player;
        }

        // Vertical
        if (row + 3 < ROWS && player === board[row + 1][col] && player === board[row + 2][col] && player === board[row + 3][col]) {
          return player;
        }

        // Diagonal (bottom-left to top-right)
        if (row + 3 < ROWS && col + 3 < COLS && player === board[row + 1][col + 1] && player === board[row + 2][col + 2] && player === board[row + 3][col + 3]) {
          return player;
        }

        // Diagonal (top-left to bottom-right)
        if (row - 3 >= 0 && col + 3 < COLS && player === board[row - 1][col + 1] && player === board[row - 2][col + 2] && player === board[row - 3][col + 3]) {
          return player;
        }
      }
    }
  }
  return null;
};

export const handleDropPiece = (board: number[][], column: number, player: number): number[][] => {
    const newBoard = board.map(row => [...row]); 
    for (let row = 5; row >= 0; row--) { 
        if (newBoard[row][column] === 0) { 
            newBoard[row][column] = player; 
            return newBoard;
        }
    }
    console.warn(`Columna ${column} está llena.`); 
    return newBoard; 
};
