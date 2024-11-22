// interfaces/state.ts
export interface IAccountInfo {
  id: number;
  name: string;
  amount: number;  
}


export interface IAppState {
  accountInfo: IAccountInfo | null;
  error: string | null;
  loading: boolean;
}

export interface AppAction {
  type: string;
  payload?: any;
}

export interface IAppContextProps {
  state: IAppState;
  dispatch: React.Dispatch<any>; // El dispatch es la función que dispara las acciones
}

// types.ts
export type AccountActionTypes = 'SET_ACCOUNT_INFO' | 'SET_ERROR' | 'SET_LOADING';

// Define las acciones
export interface AccountAction {
    type: AccountActionTypes;
    payload?: any; // Puedes ser más específico dependiendo de la acción
}
