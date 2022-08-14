import React, { useReducer, createContext } from 'react';

export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    return (
        <BudgetTrackerContext.Provider value={{ aappName: 'Budget Tracker'}}>
            {children}
        </BudgetTrackerContext.Provider>
    )
}
