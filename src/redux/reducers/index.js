import { combineReducers } from "redux";
import productReducer from "./productsReducers";
import cartReducers from "./cartReducers";

export default combineReducers({
    products: productReducer,
    cart: cartReducers
})