/* eslint-disable import/prefer-default-export */
import {
  FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_CURRENCIES, USE_CURRENCY,
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
