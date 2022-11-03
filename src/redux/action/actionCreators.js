/* eslint-disable import/prefer-default-export */
import { FETCH_CATEGORIES, FETCH_PRODUCTS } from './types';
import apiData from '../../apiHolder';
import { categories, products } from '../../graphql/queries';

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
