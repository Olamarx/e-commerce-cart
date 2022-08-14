export const cartTypes = {
    CARTEGORIES: 'cart/products/CATEGORIES',
    CARTEGORY: 'cart/products/CATEGORY',
    PRODUCT: 'cart/product/PRODUCT',
    CURRENCIES: 'cart/product/CURRENCIES'
}

export const GetCategories = (category) =>({
    type: cartTypes.CARTEGORY,
    payload: { category }
})



// metrics-webapp, manel

// export const GetCategory = () => {
//     const theQuery = `
//     query getProducts {
//         category {
//           name
//           products {
//             name
//             inStock
//             category
//             brand
//             id
//             gallery
//             attributes {
//               id
//               name
//               type
//               items {
//                 id
//                 value
//                 displayValue
//               }
//             }
//             prices {
//               currency{
//                 label
//                 symbol
//               }
//               amount
//             }
//           }
//         }
//       }
//     `;
//     fetch("http://localhost:4000", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//             query: theQuery
//         })
//     }).then(response => {
//         return response.json();
//     }).then(data => {
//         console.log(data)
//         return data
//     });
// }



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
    //   categories: [],
    //   category: [],
      product: [],
    //   currencies: []
    };

const productReducer = (state = initialize, action ) => {
    // switch(action.type) {
        // case cartTypes.PRODUCT:
            console.log(cartTypes.PRODUCT, action)
    // }
    return state
}

    // if (action.type === cartTypes.PRODUCT) {
    //     let newState = GetCategory()
    //     return { ...state, 
    //     product: newState
    //     }
    // const { payload } = action
    // switch (action.type) {
        // case cartTypes.CARTEGORIES:
        //     return { ...state  };
        //     break;
        // case cartTypes.CARTEGORY:
        //         return { ...payload }; 
        //     break;
        // case cartTypes.PRODUCT:
        //         return { ...state,  };
        //         break;
            // case cartTypes.CURRENCIES:
            //     return { ...state };
        // default:
        //     return state;
    // }
// }

export default productReducer;
