/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
import { checkData } from './helper';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../action/types';

const init = [];
const addToCartReducer = (state = init, action) => {
  const newData = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, newData]

      case REMOVE_FROM_CART:
        console.log(newData)
        const filter = state.filter((product) => product.id !== newData.id);
      return [...filter];
      
      default:
        return state;
  }
};

export default addToCartReducer;
