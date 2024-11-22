
import { IAppState } from "../../interfaces/state";
import { SET_ACCOUNT_INFO, SET_ERROR, SET_LOADING } from "./actions";

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
};
