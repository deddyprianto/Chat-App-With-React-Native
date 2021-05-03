/* eslint-disable prettier/prettier */
import React, {useContext, createContext, useReducer} from 'react';

const BuatContext = createContext();

export const StateProvider = ({reduce, initial, children}) => (
  <BuatContext.Provider value={useReducer(reduce, initial)}>
    {children}
  </BuatContext.Provider>
);
const useStateValue = () => useContext(BuatContext);
export default useStateValue;
