import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { appReducer } from './reducers';
import { IAppContextProps, IAppState } from '../interfaces/state';

const AppContext = createContext< IAppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode; value?: IAppContextProps }> = ({ children }) => {
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

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
