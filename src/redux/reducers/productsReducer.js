import { FETCH_PRODUCTS } from '../action/types';

const init = [];
const productsReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload];

    default:
      return state;
  }
};

export default productsReducer;
