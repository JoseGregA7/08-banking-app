import { CHANGE_PLAYER, DROP_PIECE, RESET_GAME, SET_WINNER } from "../state/status/actions";

export interface IGameState {
  board: number[][];
  currentPlayer: number;
  winner: number | null;
  draw: boolean;
}

export type GameAction =
  | { type: typeof DROP_PIECE; payload: number }
  | { type: typeof CHANGE_PLAYER; payload: number }
  | { type: typeof SET_WINNER; payload: number }
  | { type: typeof RESET_GAME; payload: number }

export interface IAppContextProps {
  state: IGameState;
  dispatch: React.Dispatch<any>;
}