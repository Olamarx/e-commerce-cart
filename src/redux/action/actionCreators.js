/* eslint-disable import/prefer-default-export */
import { FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_CURRENCIES } from './types';
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
