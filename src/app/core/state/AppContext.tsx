import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { gameReducer } from './reducers';
import { IAppContextProps, IGameState } from '../interfaces/state';

const AppContext = createContext<IAppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode; value?: IAppContextProps }> = ({ children, value }) => {
    const initialState: IGameState = {
        board: Array.from({ length: 6 }, () => Array(7).fill(0)),
        currentPlayer: 1,
        winner: null,
        draw: false,
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);
    const contextValue = value || { state, dispatch };


    return (
        <AppContext.Provider value={contextValue}>
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
