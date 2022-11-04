import { USE_CURRENCY } from '../action/types';

const useCurrencyReducer = (state = '$', action) => {
  switch (action.type) {
    case USE_CURRENCY:
      return action.payload;

    default:
      return state;
  }
};

export default useCurrencyReducer;
