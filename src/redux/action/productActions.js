import { FETCH_PRODUCTS, FILTER_PRODUCTS } from "./types";
import { theQuery } from "../StoreReducer";

export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:4000", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
              },
              body: JSON.stringify({
                  query: theQuery
              })
          })
          .then(response => {
              return response.json();
          })
          .then(data => {
            const { categories } = data.data
            
              dispatch({type: FETCH_PRODUCTS, payload: categories})
            });
}

export const filterCategory = (products, theCategory) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS,
        payload: {
            category: theCategory,
            allProducts: theCategory === "" ? products : products.filter((x) => x.category === theCategory)
        }
    })
}