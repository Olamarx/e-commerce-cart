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

const isEqual = (enteringObj, cartObj) => {
  let firstProp = Object.getOwnPropertyNames(enteringObj);
  let secondProp = Object.getOwnPropertyNames(cartObj);
  if (firstProp.length != secondProp.length) {
    // console.log(false)
      return false;
  }
  for (let i = 0; i < firstProp.length; i++) {
      let val1 = enteringObj[firstProp[i]];
      let val2 = cartObj[firstProp[i]];
      let isObjects = isObject(val1) && isObject(val2);
      if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
        // console.log(false)
          return false;
      }
  }
// console.log(true)

  return true;
}




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

const filter = products.filter((product) => product.id === obj.id);

if (!filter.length) return addToCart(obj)


// if  (products.length){
//     for (let i = 0; i < products.length; i++) {
   
//       if (!product.attributes && (product.id !== products[i].id)) {
//         console.log('Hello');
//         return addToCart(obj)
//       }

//       const cartIndObjAttr = products[i].selectedAttr
//       const enteringObjAttr = obj.selectedAttr
   
//       const isEqual = () => {
//           let firstProp = Object.getOwnPropertyNames(enteringObjAttr);
//           let secondProp = Object.getOwnPropertyNames(cartIndObjAttr);
   
//           if (firstProp.length !== secondProp.length) {
//               return false;
//           }
//           for (let i = 0; i < firstProp.length; i++) {
//               let val1 = enteringObjAttr[firstProp[i]];
//               let val2 = cartIndObjAttr[firstProp[i]];
//               let isObjects = isObject(val1) && isObject(val2);
   
//               if (isObjects && !isEqual() || !isObjects && val1 !== val2) {
//                   return false;
//               }
   
//             }
//         return addToCart(obj)
//         }
//         isEqual()
//       }
//   } else {
//       console.log('does not have any products before')
//       return addToCart(obj)
//     } 
  }
// }
//  else {
//   addTheProduct(obj)
// }
   
// }
// Because I have filtered it, I wont check it will have attributes and it would enhance the scalability


export {
  imageContainer, 
  centered, 
  currencyPrice,
  addTheProduct,
  
}