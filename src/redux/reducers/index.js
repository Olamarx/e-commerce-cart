import { combineReducers } from "redux";
import productReducer from "../StoreReducer";
import cartReducers from "./cartReducers";

export default combineReducers({
    products: productReducer,
    cart: cartReducers
})