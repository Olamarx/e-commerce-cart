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

// const includesArray = (data, arr) => {
//   return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));
// }

const filterToCheckId = products.filter((product) => product.id === obj.id);
const objeAttr = []
filterToCheckId.forEach(element => {
  objeAttr.push(element.selectedAttr)
});

// const filter = obj.selectedAttr && filterToCheckId ? filterToCheckId : [] 

if ((filterToCheckId.length < 1) && !obj.selectedAttr) {
  // console.log("This item does not have attributes and it is not in the cart", filterToChec);
  return addToCart(obj)
}

if((filterToCheckId.length === 1) && !obj.selectedAttr) return

// console.log("I skipped it", filterToCheckId.length, obj.attributes);
// console.log('array', filterToCheckId);
let result;
// console.log(objeAttr);
const res = []
objeAttr.forEach((element) => {
      // const cartIndObjAttr = element.selectedAttr
      const enteringObjAttr = obj.selectedAttr
      // addToCart(obj)


      // console.log(cartIndObjAttr, enteringObjAttr);
      for (let [key, value] of Object.entries(enteringObjAttr)) {
          
        const exist = objeAttr.findIndex(ele => ele[key] === value) > -1;
        res.push(exist)
        // if (cartIndObjAttr[key] !== enteringObjAttr[key]) {
                  
                  
                  // console.log(cartIndObjAttr[key], enteringObjAttr[key]);
                  // return addToCart(obj)
      // }
    }
  });
  
  
  console.log(res);
  res.includes(false) && addToCart(obj)
  

// for (let i = 0; i < filterToCheckId.length; i++) {
  
//       const cartIndObjAttr = filterToCheckId[i].selectedAttr
//       const enteringObjAttr = obj.selectedAttr
//       console.log(i);
//       for (let [key, value] of Object.entries(enteringObjAttr)) {
//         if (cartIndObjAttr[key] !== enteringObjAttr[key]) {
//           console.log(cartIndObjAttr[key], enteringObjAttr[key]);
//           return addToCart(obj)
//         }
//       }
//   }
  }

// Because I have filtered it, I wont check it will have attributes and it would enhance the scalability


export {
  imageContainer, 
  centered, 
  currencyPrice,
  addTheProduct,
  
}
// if (!obj.attributes && !filterToCheckId) return addToCart(obj) 
// if (!filter && !filterToCheckId)
// const cartIndObjAttrKeys = Object.keys(cartIndObjAttr).sort()
// const enteringObjAttrKeys = Object.keys(enteringObjAttr).sort()
// if (cartIndObjAttrKeys.length !== enteringObjAttrKeys.length) {
//   return "Select All options"
// }