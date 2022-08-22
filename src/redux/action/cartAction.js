import { ADD_TO_CART } from "./types";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice()
    let productAlreadyInCart = false;
    cartItems.forEach((item) => {
          if (item.id === product.id) {
            productAlreadyInCart = true;
          }
        })
        if(!productAlreadyInCart){
          cartItems.push({...product, num: 1})
        }
        return dispatch({
            type: ADD_TO_CART,
            payload: {
                cartItems: cartItems
            }
        })
    }