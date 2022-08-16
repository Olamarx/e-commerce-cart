import { ADD_TO_CART } from "./types";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice()
    let productInCart = false;

    cartItems.forEach((cartProduct) => {
        if(cartProduct.id === product.id){
            cartProduct += 1;
            productInCart = true;
        }
    });

    if (!productInCart) {
        cartItems.push({...product, count: 1})
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    dispatch({type: ADD_TO_CART, payload: { cartItems }})
}