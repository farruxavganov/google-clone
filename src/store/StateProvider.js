import React, { createContext, useReducer, useContext } from 'react';

const Store = createContext();

const StateProvider = ({reducer,initState, children}) =>{
	return ( <Store.Provider value={useReducer(reducer,initState)}>
		{children}
	</Store.Provider>)
}

export const useStateConsumer = () => {
	return useContext(Store);
}

export default StateProvider;