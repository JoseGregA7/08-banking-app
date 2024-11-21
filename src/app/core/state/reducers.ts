import { GameAction, IGameState } from "../interfaces/state";
import { gameCases } from "./status";

export const gameInitialState: IGameState = {
    board: Array.from({ length: 6 }, () => Array(7).fill(0)),
    currentPlayer: 1,
    winner: null,
    draw: false,
};

export const gameReducer = (state: IGameState = gameInitialState, action: GameAction): IGameState => {
    const caseFunction = gameCases[action.type];
    return caseFunction ? caseFunction(state, action.payload) : state;
};