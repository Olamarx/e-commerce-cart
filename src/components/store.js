import { combineReducers } from 'redux';

import categoriesReducer from '../redux/reducers/categoriesReducer';
import productsReducer from '../redux/reducers/productsReducer';
// import thunk from 'redux-thunk';
// import rootReducer from '../redux/reducers';
// applyMiddleware, compose,
// const cartItems = localStorage.getItem('cartItems') ?
//  JSON.parse(localStorage.getItem('cartItems')) : [];
// const initState = { cart: { items: cartItems } };
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

// const store = createStore(
//   rootReducer,
//   initState,
//   composeEnhancer(applyMiddleware(thunk)),
// );

export default store;
