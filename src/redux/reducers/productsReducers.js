import { FETCH_PRODUCTS, FILTER_PRODUCTS } from '../action/types';

const initialState = { items: [], filterItems: [], categoryName: '' };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filterItems: action.payload };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filterItems: action.payload.allProducts,
        categoryName: action.payload.category,
      };
    default:
      return state;
  }
}
