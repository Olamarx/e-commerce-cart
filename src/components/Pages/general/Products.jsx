/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    const {
      products, addProductImage, centered, imageContainer,
    } = this.props;
    const allProducts = !products ? '' : products.products.map((product) => (
      <article className="card" key={product.id}>
        <div style={imageContainer}>
          <img className="card_image1" src={product.gallery[0]} alt={product.name} />
          {product.inStock ? (
            <img
              src={addProductImage}
              alt={product.name}
              style={{ cursor: 'pointer' }}
            />
          )
            : null}
          {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
        </div>
        <div>
          <div>{product.name}</div>
          <div>{`${product.prices[0].currency.symbol}${product.prices[0].amount}`}</div>
        </div>
      </article>
    ));
    return (
      <>{allProducts}</>
    );
  }
}

export default Products;
