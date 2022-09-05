import { FETCH_CURRENCIES } from '../action/types';

const initialState = { currencies: [] };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return { ...state, currencies: action.payload };
    default:
      return state;
  }
}
