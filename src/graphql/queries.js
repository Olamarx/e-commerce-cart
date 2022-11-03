export const products = `
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

export const categories = `
query categories {
  categories{
    name
   }
}`;
