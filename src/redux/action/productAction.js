import { cartTypes } from "../StoreReducer";

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


const productFromAPI = () => {
    return (dispatch, getState) => {
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
            console.log(data)
            // return data
        dispatch({type: cartTypes.PRODUCT, payload: data})
        });
    
    }
}

export default productFromAPI;
