export const theQuery = `
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



export const getCurrencies =`
  query getCurrencies {
    currencies{
      symbol
      label
    }
  }
`;
