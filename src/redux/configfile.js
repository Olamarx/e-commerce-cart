import { combineReducers } from 'redux';
import reducer from './StoreReducer';


export default combineReducers({
    cart: reducer
})
