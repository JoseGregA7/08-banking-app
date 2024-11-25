import React, { ReactNode } from 'react';
import { IAppState } from '../interfaces/state';
import { appReducer } from './reducers';
import { AppContext } from './AppContext';

interface MockAppContextProviderProps {
    children: ReactNode;
    state?: any;
    dispatch?: React.Dispatch<any>;
}

const initialState: IAppState = {
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

export const MockAppContextProvider: React.FC<MockAppContextProviderProps> = ({
    children,
    state = initialState,
    dispatch,
}) => {
    const [defaultState, defaultDispatch] = React.useReducer(appReducer, state);

    return (
        <AppContext.Provider
            value={{
                state: state || defaultState,
                dispatch: dispatch || defaultDispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};