import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState =[];

export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators

    return (
        <BudgetTrackerContext.Provider value={{ appName: 'Budget Tracker'}}>
            {children}
        </BudgetTrackerContext.Provider>
    )
}
