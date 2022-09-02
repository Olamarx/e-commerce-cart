import { combineReducers } from 'redux';
import productReducer from './productsReducers';
import cartReducers from './cartReducers';
import currencyReducer from './currencyReducer';

export default combineReducers({
  products: productReducer,
  cart: cartReducers,
  currencies: currencyReducer,
});
