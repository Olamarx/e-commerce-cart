/* eslint-disable import/prefer-default-export */
import { FETCH_CURRENCIES } from './types';
import { getCurrencies } from '../StoreReducer';

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: getCurrencies,
    }),
  });
  const data = await response.json();
  dispatch({ type: FETCH_CURRENCIES, payload: data.data.currencies });
};
