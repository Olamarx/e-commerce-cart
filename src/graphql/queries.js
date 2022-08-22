import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query getProducts {
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
