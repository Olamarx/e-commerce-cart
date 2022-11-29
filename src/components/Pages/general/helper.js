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
// const filterToChec = products.filter((product) => product.id === obj.id);
console.log("Let us start");
if (!products.length){
  console.log("Nothing in cart");
  return addToCart(obj)
} 

const filter = obj.selectedAttr && products.filter((product) => product.id === obj.id);
const filterToCheckId = products.filter((product) => product.id === obj.id);

if ((filterToCheckId.length < 1) && !obj.selectedAttr) {
  // console.log("This item does not have attributes and it is not in the cart", filterToChec);
  return addToCart(obj)
}

if((filterToCheckId.length === 1) && !obj.selectedAttr) return

console.log("I skipped it", filterToCheckId.length, obj.attributes);

// if (!obj.attributes && !filterToCheckId) return addToCart(obj) 
// if (!filter && !filterToCheckId)
  for (let i = 0; i < filter.length; i++) {

      const cartIndObjAttr = filter[i].selectedAttr
      const enteringObjAttr = obj.selectedAttr
      const cartIndObjAttrKeys = Object.keys(cartIndObjAttr).sort()
      const enteringObjAttrKeys = Object.keys(enteringObjAttr).sort()

      if (cartIndObjAttrKeys.length !== enteringObjAttrKeys.length) {
        return "Select All options"
      }

      for (let objKey of cartIndObjAttrKeys) {
        if (cartIndObjAttr[objKey] !== enteringObjAttr[objKey]) {
          console.log("Item not in cart");
          console.log(cartIndObjAttr[objKey], enteringObjAttr[objKey]);
          return addToCart(obj)
        }
        // else if (cartIndObjAttrKeys[objKey] === enteringObjAttrKeys[objKey]) {
        //   console.log("Item in cart already");
        //   return "Item in cart already"
        // }
      }

      console.log("Item already in the cart");
      console.log(cartIndObjAttr, enteringObjAttr);
      // return addToCart(obj)
      return
  }
  }

// Because I have filtered it, I wont check it will have attributes and it would enhance the scalability


export {
  imageContainer, 
  centered, 
  currencyPrice,
  addTheProduct,
  
}