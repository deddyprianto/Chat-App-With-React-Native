/* eslint-disable prettier/prettier */
import {DATA_SUCC} from '../count/initcount';
export const initialState = {
  initial: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case DATA_SUCC:
      return {...state, datauser: action.payload};
    default:
      return state;
  }
};
export default reducer;
