import { IGameState } from "../../interfaces/state";
import { handleDropPiece } from "../../utils/gameUtils";
import { gameInitialState } from "../reducers";
import { CHANGE_PLAYER, DROP_PIECE, RESET_GAME, SET_DRAW, SET_WINNER } from "./actions";

export const gameCases = {
    [DROP_PIECE]: (state: IGameState, payload: number) => {
        return {
            ...state,
            board: handleDropPiece(state.board, payload, state.currentPlayer),
        };
    },
    [CHANGE_PLAYER]: (state: IGameState) => {
        return {
            ...state,
            currentPlayer: state.currentPlayer === 1 ? 2 : 1, 
        };
    },
    [SET_WINNER]: (state: IGameState, payload: number) => {
        return {
            ...state,
            winner: payload, 
        };
    },
    [SET_DRAW]: (state: IGameState) => {
      return {
          ...state,
          draw: true, 
      };
  },
    [RESET_GAME]: () => {
        return {
            ...gameInitialState, 
        };
    },
};

