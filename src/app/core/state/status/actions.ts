export const DROP_PIECE = 'DROP_PIECE';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';
export const SET_WINNER = 'SET_WINNER';
export const RESET_GAME = 'RESET_GAME';
export const SET_DRAW = 'SET_DRAW';

export const setDraw = () => ({
    type: SET_DRAW,
});

export const dropPiece = (column: number) => ({
    type: DROP_PIECE,
    payload: column,
});

export const changePlayer = () => ({
    type: CHANGE_PLAYER,
});

export const setWinner = (player: number) => ({
    type: SET_WINNER,
    payload: player,
});

export const resetGame = () => ({
    type: RESET_GAME,
});
