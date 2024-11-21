import { useEffect } from 'react';
import { useAppContext } from '../state/AppContext';
import { checkWinner } from '../utils/gameUtils';
import { changePlayer, dropPiece, resetGame, setDraw, setWinner } from '../state/status/actions';

export function useGameLogic() {
    const { state, dispatch } = useAppContext();
    const { board, currentPlayer, winner, draw } = state;

    useEffect(() => {
        if (winner) {
            return;
        }

        const winnerPlayer = checkWinner(board);
        if (winnerPlayer) {
            dispatch(setWinner(winnerPlayer));
        } else {
            checkDraw(board);
        }
    }, [board, winner, dispatch]);

    const checkDraw = (board: number[][]) => {
        const isFull = board.every(row => row.every(cell => cell !== 0));
        if (isFull && !winner) {
            dispatch(setDraw());
        }
    };

    const handleDropPiece = (column: number) => {
        if (winner || draw) return;
        dispatch(dropPiece(column));
        dispatch(changePlayer());
    };

    const onResetGame = () => dispatch(resetGame());

    return {
        board,
        currentPlayer,
        winner,
        draw,
        handleDropPiece,
        onResetGame
    };
}
