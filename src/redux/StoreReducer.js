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

export const GetCategory = (category) => ({
    type: cartTypes.CARTEGORY,
    payload: { category }
})

export const GetProduct = async () => {
    return (
    <Query query={getAllProducts}>
         {({ data }) => {
            const { category } = data;
            const productsData = category.map(({products, name}) => ({
                name,
                products
            }))
console.log("Hello")
    return {
        type: cartTypes.PRODUCT,
        payload: { productsData }
    }
             }}
      </Query>
)}

export const GetCurrencies = (currencies) => ({
    type: cartTypes.CURRENCIES,
    payload: { currencies }
})
  
  const initialize = {
      categories: [],
      category: [],
      product: ["HELLO"],
      currencies: []
    };

const reducer = (state = initialize, action ) => {
    switch (action.type) {
        case cartTypes.CARTEGORIES:
            return { ...state,  };
            break;
        case cartTypes.CARTEGORY:
                return { ...state }; 
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
