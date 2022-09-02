import React, { Component } from 'react';
import Products from './Products';
import Filter from './Filter';
import Basket from './Basket';
import './women.css';

export default class Women extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

  handleAddToCart = (e, product) => {
    this.setState((state) => {
      const { cartItems } = state;
      let productAlreadyInCart = false;
      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, num: 1 });
      }
      return cartItems;
    });
  };

  render() {
    const { sort, filteredProducts, cartItems } = this.state;
    return (
      <div className="women">
        <div className="products">
          <Filter
            sort={sort}
            handleChangeCategory={this.handleChangeCategory}
          />
          <Products
            allProducts={filteredProducts}
            handleAddToCart={this.handleAddToCart}
          />
        </div>
        <Basket
          cartItems={cartItems}
          handleRemoveFromCart={this.handleRemoveCart}
        />
      </div>
    );
  }
}
