export const Action = {
    ADD_PRODUCT: 'cart/product/REMOVE_PRODUCT',
    REMOVE_PRODUCT: 'cart/product/REMOVE_PRODUCT',
}

const theQuery = `
query allCategories {
    categories{
      name
      products{
        id
          name
        inStock
        gallery
        description
        category
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
        prices{
          currency{
            label
            symbol
          }
          amount        
        }
        brand
        
      }
    }
  }
`;

// reducer
const productReducer = (state = [], action) => {
    const { payload } = action;
    switch (action.type){
        case Action.ADD_PRODUCT:
            return [...state, payload.products];
        case Action.REMOVE_PRODUCT:
            state.filter((product) => product.id !== payload.id);
            break;
        default:
            return state
    }
}

// Action Creator 
// dispatch, name
const addProduct = () => {
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
            console.log(data)
            const { categories } = data.data
            console.log(categories[0]);
            return categories
            // const eachProcduct = categories.filter((product) => product.name === name)
        // dispatch({type: Action.ADD_PRODUCT, payload: eachProcduct})
        });
}

export {
    addProduct,
}

export default productReducer

// export const GetCategories = (category) =>({
//     type: cartTypes.CARTEGORY,
//     payload: { category }
// })

// export const GetProduct = async (productsData) => {


//     return {
//         type: cartTypes.PRODUCT,
//         payload: { productsData }
//     }

// }

// export const GetCurrencies = (currencies) => ({
//     type: cartTypes.CURRENCIES,
//     payload: { currencies }
// })
  
//   const initialize = {
//     //   categories: [],
//     //   category: [],
//       product: [],
//     //   currencies: []
//     };

// const productReducer = (state = initialize, action ) => {
//     // switch(action.type) {
//         // case cartTypes.PRODUCT:
//             console.log(cartTypes.PRODUCT, action)
//     // }
//     return state
// }

//     // if (action.type === cartTypes.PRODUCT) {
//     //     let newState = GetCategory()
//     //     return { ...state, 
//     //     product: newState
//     //     }
//     // const { payload } = action
//     // switch (action.type) {
//         // case cartTypes.CARTEGORIES:
//         //     return { ...state  };
//         //     break;
//         // case cartTypes.CARTEGORY:
//         //         return { ...payload }; 
//         //     break;
//         // case cartTypes.PRODUCT:
//         //         return { ...state,  };
//         //         break;
//             // case cartTypes.CURRENCIES:
//             //     return { ...state };
//         // default:
//         //     return state;
//     // }
// // }

// export default productReducer;

// // CARTEGORY: 'cart/products/CATEGORY',
// PRODUCT: 'cart/product/PRODUCT',
// CURRENCIES: 'cart/product/CURRENCIES'