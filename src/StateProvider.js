//used to track the cart

import React, { createContext, useContext, useReducer } from 'react';

//this is the data layer
export const StateContext = createContext();

//building a provider (wrapping entire app around this)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//how to use it inside a component
export const useStateValue = () => useContext(StateContext);
