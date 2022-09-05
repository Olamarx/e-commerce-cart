import { FETCH_PRODUCTS, FILTER_PRODUCTS } from './types';
import { theQuery } from '../StoreReducer';

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: theQuery,
    }),
  });
  const data = await response.json();
  dispatch({ type: FETCH_PRODUCTS, payload: data.data.categories[0].products });
};

export const filterProducts = (products, theCategory) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      category: theCategory,
      allProducts: theCategory === '' ? products : products.filter((x) => x.category === theCategory),
    },
  });
};
