/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_CART } from "../action/types";

const initialState = {items: [] }
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, items: action.payload.cartItems }
        
        default:
            return state;
    }
}