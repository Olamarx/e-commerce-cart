/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
import { ADD_TO_CART } from '../action/types';

const init = [];
const addToCartReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newData = action.payload;
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === newData.id) {
          return [...state];
        }
      }
      return [...state, action.payload];

    default:
      return state;
  }
};

export default addToCartReducer;
