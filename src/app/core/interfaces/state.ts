export interface IAccountInfo {
  id: number;
  name: string;
  amount: number;  
}

export interface IAppState {
  accountInfo: IAccountInfo | null;
  error: string | null;
  loading: boolean;
  withdrawalAmount: number;
  withdrawalType: string;
  buyType: string;
  buyAmount: number;
  depositType: string;
  depositAmount: number;
}

export interface AppAction {
  type: string;
  payload?: any;
}

export interface IAppContextProps {
  state: IAppState;
  dispatch: React.Dispatch<any>;
}

export type AccountActionTypes = 'SET_ACCOUNT_INFO' | 'SET_ERROR' | 'SET_LOADING' | 'SET_WITHDRAWAL_AMOUNT' | 'SET_WITHDRAWAL_TYPE';

export interface AccountAction {
    type: AccountActionTypes;
    payload?: any;
}
