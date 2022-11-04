import { ADD_TO_CART } from '../action/types';

const init = [];
const addToCartReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default addToCartReducer;
