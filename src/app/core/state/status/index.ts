
import { IAppState } from "../../interfaces/state";
import { SET_ACCOUNT_INFO, SET_ERROR, SET_LOADING, SET_WITHDRAWAL_AMOUNT, SET_WITHDRAWAL_TYPE, SET_BUY_TYPE, SET_BUY_AMOUNT, SET_DEPOSIT_TYPE, SET_DEPOSIT_AMOUNT } from "./actions";

export const accountCases = {
    [SET_ACCOUNT_INFO]: (state: IAppState, payload: any) => {
        return {
            ...state,
            accountInfo: payload,
        };
    },
    [SET_ERROR]: (state: IAppState, payload: string) => {
        return {
            ...state,
            error: payload,
        };
    },
    [SET_LOADING]: (state: IAppState, payload: boolean) => {
        return {
            ...state,
            loading: payload,
        };
    },
    [SET_WITHDRAWAL_AMOUNT]: (state: IAppState, payload: number) => {
        return {
            ...state,
            withdrawalAmount: payload,
        };
    },
    [SET_WITHDRAWAL_TYPE]: (state: IAppState, payload: string) => {
        return {
            ...state,
            withdrawalType: payload,
        };
    },
    [SET_BUY_TYPE]: (state: IAppState, payload: string) => {
        return {
            ...state,
            buyType: payload,
        };
    },
    [SET_BUY_AMOUNT]: (state: IAppState, payload: number) => {
        return {
            ...state,
            buyAmount: payload,
        };
    },
    [SET_DEPOSIT_TYPE]: (state: IAppState, payload: string) => {
        return {
            ...state,
            depositType: payload,
        };
    },
    [SET_DEPOSIT_AMOUNT]: (state: IAppState, payload: number) => {
        return {
            ...state,
            depositAmount: payload,
        };
    },
};
