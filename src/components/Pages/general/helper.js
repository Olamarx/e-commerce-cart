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
  const obj = {
    ...product,
    count: 1,
    selectedAttr: data ? data : '',
    selectedCurrency: currency,
    currencyPrice: currencyPrice(currency, product.prices),
    sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
}
// let check = false
  if (products.length){
    const filter = products.filter((product) => product.id === obj.id);
    for (let i = 0; i < filter.length; i++) {
        // Because I have filtered it, I wont check it will have attributes and it would enhance the scalability
        for (let [filterKey, filterVal] of Object.entries(filter[i].selectedAttr)) {
        for (let [objKey, objVal] of Object.entries(obj.selectedAttr)) {
            
          // if (obj.selectedAttr && (obj.selectedAttr[key] !== filter[i].selectedAttr[key])) {
          if (filterKey === objKey) {
            console.log(filterKey, objKey, filterVal, objVal);
            // check = true
          }
        }
        }
    }
} else {
  addToCart(obj)
}

//   if (products.length){
//     // console.log('Hello');
//     for (let i = 0; i < products.length; i++) {
//     if (product.attributes && products[i].selectedAttr) {
//         for (let [key, value] of Object.entries(products[i].selectedAttr)) {
//           const getValue = products[i].selectedAttr[key]
//           if (obj.selectedAttr[key] !== getValue) {
//             // console.log(key);
//             console.log('Send a message that it is already in the cart')
//             // console.log(obj.selectedAttr[key], getValue);
//             break;
//             }
//           // for (let [enteringKey, EnteringValue] of Object.entries(product.selectedAttr)) {
//               // if (key === enteringKey && value === enteringKey) {
//               // } 
//           // }
//         }
//       } else if (product.id === products[i].id) {
//           console.log('Send a message that product has the same id')
//           break;
//         } else {
//         addToCart(obj)
//         break;
// }
// }
// } else {
//   addToCart(obj)
// } 
}