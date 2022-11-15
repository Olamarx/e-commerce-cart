/* eslint-disable import/prefer-default-export */
import {
  FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_CURRENCIES, USE_CURRENCY, ADD_TO_CART, REMOVE_FROM_CART, SELECTED_PRODUCT
} from './types';
import apiData from '../../apiHolder';
import { categories, products, currencies } from '../../graphql/queries';

export const fetchCategories = () => async (dispatch) => {
  const { data } = await apiData(categories);

  dispatch({
    type: FETCH_CATEGORIES,
    payload: data.categories,
  });
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await apiData(products);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: data.categories,
  });
};

export const fetchCurrencies = () => async (dispatch) => {
  const { data } = await apiData(currencies);

  dispatch({
    type: FETCH_CURRENCIES,
    payload: data.currencies,
  });
};

export const useCurrency = (currency) => (dispatch) => {
  dispatch({
    type: USE_CURRENCY,
    payload: currency,
  });
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// export const removeFromCart = (product) => ({
//   type: REMOVE_FROM_CART,
//   payload: product,
// });

export const selectedProduct = (product) => ({
  type: SELECTED_PRODUCT,
  payload: product,
});
