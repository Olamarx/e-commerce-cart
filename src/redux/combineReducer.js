import { combineReducers } from 'redux';
import productReducer from './StoreReducer';


const redux = combineReducers({
    cart: productReducer
})

export default redux;
