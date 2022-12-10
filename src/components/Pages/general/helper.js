const imageContainer = {
  position: 'relative',
  textAlign: 'center',
  color: 'grey',
};

const centered = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const currencyPrice = (currency, array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].currency.symbol === currency) {
      return array[i].amount;
    }
  }
};

// I would have used lodash to check the values but you said we should use less dependencies
const isObject = (object) => {
  return object != null && typeof object === 'object';
}
      // const isEqual = (enteringObj, cartObj, addToCart, obj) => {
      // }
const addTheProduct  = (addToCart, products, product, currency, data) => {
  // I did this initial check for scalability reason
  const obj = {
    ...product,
    count: 1,
    selectedAttr: data ? data : '',
    selectedCurrency: currency,
    currencyPrice: currencyPrice(currency, product.prices),
    sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
}
if (!products.length){
  return addToCart(obj)
}
const filterToCheckId = products.filter((product) => product.id === obj.id);
// if ((filterToCheckId.length < 1) && !obj.selectedAttr) {
//   return addToCart(obj)
// }
// if((filterToCheckId.length === 1) && !obj.selectedAttr) return
const arr = []
for (let i = 0; i < filterToCheckId.length; i++) {
  if (JSON.stringify(obj.selectedAttr) !== JSON.stringify(filterToCheckId[i].selectedAttr)) {
    console.log(obj.selectedAttr, 'middle', element.selectedAttr)
    return addToCart(obj)
  }
  };
  }
// Because I have filtered it, I wont check it will have attributes and it would enhance the scalability


export {
  imageContainer, 
  centered, 
  currencyPrice,
  addTheProduct,
  
}