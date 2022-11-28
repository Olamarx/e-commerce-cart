export const imageContainer = {
  position: 'relative',
  textAlign: 'center',
  color: 'grey',
};
export const centered = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const currencyPrice = (currency, array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].currency.symbol === currency) {
      return array[i].amount;
    }
  }
  return null;
};

export const addTheProduct  = (addToCart, products, product, currency, data) => {
  // I did this initial check for scalability reason
  if (products.length){
    console.log('Hello');
    for (let i = 0; i < products.length; i++) {
    if (product.attribute) {
        for (let [key, value] of Object.entries(products[i].selectedAttr)) {
          for (let [enteringKey, EnteringValue] of Object.entries(product.selectedAttr)) {
              if (key === enteringKey && value === enteringKey) {
              console.log('Send a message that it is already in the cart')
              } 
          }
        }
      } else if (product.id === products[i].id) {
          console.log('Send a message that it is already in the cart')
        } else {
        addToCart({
          ...product,
          count: 1,
          selectedAttr: data ? data : '',
          selectedCurrency: currency,
          currencyPrice: currencyPrice(currency, product.prices),
          sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
      })
}
}
} else {
  addToCart({
    ...product,
    count: 1,
    selectedAttr: data ? data : '',
    selectedCurrency: currency,
    currencyPrice: currencyPrice(currency, product.prices),
    sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
  })
} 
}