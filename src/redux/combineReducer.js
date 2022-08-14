import { combineReducers } from 'redux';
import productReducer from './StoreReducer';


export default combineReducers({
    cart: productReducer
})
