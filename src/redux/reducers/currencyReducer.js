import { FETCH_CURRENCIES } from '../action/types';

const init = [];
const currencyReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return action.payload;

    default:
      return state;
  }
};

export default currencyReducer;
