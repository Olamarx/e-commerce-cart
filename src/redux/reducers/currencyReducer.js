import { FETCH_CURRENCIES } from '../action/types';

const initialState = { currencies: [] };
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return { ...state, currencies: action.payload };
    default:
      return state;
  }
}
