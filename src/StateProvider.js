//setup data layer
//we need this to track basket

import React, { createContext, useContext, useReducer } from 'react';

//THIS PREPARES THE DAYA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER  so that we can wrap our entire app inside this provider and gives access to StateContext AND provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we use of it inside of a component
//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
