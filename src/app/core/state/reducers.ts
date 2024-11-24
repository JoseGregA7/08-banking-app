import { AccountAction, IAppState } from "../interfaces/state";
import { accountCases } from "./status";

export const initialAppState: IAppState = {
    accountInfo: null,
    error: null,
    loading: false,
    withdrawalAmount: 0,
    withdrawalType: 'ATM_WITHDRAWAL',
    buyType: 'PHYSICAL_ESTABLISHMENT',
    buyAmount: 0,
    depositType: 'BRANCH',
    depositAmount: 0,
};

export const appReducer = (state: IAppState = initialAppState, action: AccountAction): IAppState => {
    const caseFunction = accountCases[action.type];
    return caseFunction ? caseFunction(state, action.payload) : state;
};
