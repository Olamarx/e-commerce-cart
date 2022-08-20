import React, { Component } from 'react';
import { theQuery } from '../../../redux/StoreReducer';
import Products from './Products';
import Filter from './Filter'
import Basket from './Basket';
import "./women.css"
export default class Women extends Component {
  constructor(props){
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] }
    // this.handleChangeCategory = this.handleChangeCategory.bind(this)
    // this.handleAddToCart = this.handleAddToCart.bind(this)
    // this.increaseNumber = this.increaseNumber.bind(this)
    // this.decreaseNumber = this.decreaseNumber.bind(this)
  }



  // componentDidMount() {
  //     fetch("http://localhost:4000", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //                 "Accept": "application/json",
  //             },
  //             body: JSON.stringify({
  //                 query: theQuery
  //             })
  //         })
  //         .then(response => {
  //             return response.json();
  //         })
  //         .then(data => {
  //           const { categories } = data.data
  //           this.setState({
  //             products: categories[0].products,
  //             filteredProducts: categories[0].products,
  //           })
  //         });  
  // }
  
handleChangeCategory = (e) => {
  this.setState({sort: e.target.value})
  this.listProducts()
}
listProducts = () => {
  this.setState(state => {
    if (state.sort === "tech"){
      const filt = state.products.filter(product => product.category === "tech")
      return {filteredProducts: filt }
    } else if (state.sort === "clothes") {
      const filt = state.products.filter(product => product.category === "clothes")
      return {filteredProducts: filt }
    }
    else return { filteredProducts: state.products }
  })
}

handleAddToCart = (e, product) => {
  this.setState((state) => {
    const cartItems = state.cartItems;
    let productAlreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        productAlreadyInCart = true;
      }
    })
    if(!productAlreadyInCart){
      cartItems.push({...product, num: 1})
    }
    return cartItems;
  })
}

// increaseNumber = (item) => {
//       if(item.num >= 1) {
//         item.num++;
//         console.log(item.num, item)
//       }
//   }
//   // if () {
//   //   item.num = item.num + 1
//   //   console.log(item.num)
//   // }

// decreaseNumber = (item) => {
//   if (item.num > 1) {
//     item.num = item.num - 1
//     console.log(item.num)
//   }
// }

  render() {
  return (
    <div className="women">
    <div className="products">
    <Filter
    sort={this.state.sort}
    handleChangeCategory={this.handleChangeCategory}
    />
    <Products
    allProducts={this.state.filteredProducts}
    handleAddToCart={this.handleAddToCart}
    />
    </div>
    <Basket
    // increaseNumber={this.increaseNumber}  
    // decreaseNumber={this.decreaseNumber}
    cartItems={this.state.cartItems}
    handleRemoveFromCart={this.handleRemoveCart}
    />
    </div>
    );
  }
}

