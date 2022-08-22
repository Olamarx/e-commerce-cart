import React, { Component } from 'react';
import Products from './Products';
import Filter from './Filter'
import Basket from './Basket';
import "./women.css"
export default class Women extends Component {
  constructor(props){
    super(props);
    this.state = { cartItems: [] }
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
    cartItems={this.state.cartItems}
    handleRemoveFromCart={this.handleRemoveCart}
    />
    </div>
    );
  }
}

