import { Query } from '@apollo/client/react/components';
import  { getAllProducts } from '../graphql/queries';

export const cartTypes = {
    CARTEGORIES: 'cart/products/CATEGORIES',
    CARTEGORY: 'cart/products/CATEGORY',
    PRODUCT: 'cart/product/PRODUCT',
    CURRENCIES: 'cart/product/CURRENCIES'
}

// Action Reducer
// export const GetCategories = () => (
//     // const { data } = fetch.get(endpoint here);
//     return {
//         type: cartTypes.CARTEGORIES,
//         payload: { data }
//     }
// );
export const GetCategories = (category) =>({
    type: cartTypes.CARTEGORY,
    payload: { category }
})



// metrics-webapp, manel

export const GetCategory = () => (dispatch) => {
    const theQuery = `
    query getProducts {
        category {
          name
          products {
            name
            inStock
            category
            brand
            id
            gallery
            attributes {
              id
              name
              type
              items {
                id
                value
                displayValue
              }
            }
            prices {
              currency{
                label
                symbol
              }
              amount
            }
          }
        }
      }
    `;
      let result;
    fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query: theQuery
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        result = data
        console.log(data)
        return data
    });
    dispatch({
        type: cartTypes.CARTEGORY,
        payload: result
    })
}

export const GetProduct = async (productsData) => {


    return {
        type: cartTypes.PRODUCT,
        payload: { productsData }
    }

}

export const GetCurrencies = (currencies) => ({
    type: cartTypes.CURRENCIES,
    payload: { currencies }
})
  
  const initialize = {
      categories: [],
      category: [],
      product: [],
      currencies: []
    };

const reducer = (state = initialize, action ) => {
    const { payload } = action
    switch (action.type) {
        case cartTypes.CARTEGORIES:
            return { ...state  };
            break;
        case cartTypes.CARTEGORY:
                return { ...payload }; 
            break;
        case cartTypes.PRODUCT:
                return { ...state };
                break;
            case cartTypes.CURRENCIES:
                return { ...state };
        default:
            return state;
    }
}

export default reducer;
