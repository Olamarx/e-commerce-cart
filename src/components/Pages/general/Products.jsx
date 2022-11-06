/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../../redux/action/actionCreators';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    const {
      products, addProductImage, centered, imageContainer, currency, addToCart,
    } = this.props;

    const currencyPrice = (currency, array) => {
      for (let i = 0; i < array.length; i += 1) {
        if (array[i].currency.symbol === currency) {
          return array[i].amount;
        }
      }
    };

    const allProducts = !products ? '' : products.products.map((product) => (
      <article className="card" key={product.id}>
        <div style={imageContainer}>
          <img className="card_image1" src={product.gallery[0]} alt={product.name} />
          {product.inStock ? (
            <img
              src={addProductImage}
              alt={product.name}
              style={{ cursor: 'pointer' }}
              onClick={() => addToCart({
                ...product,
                count: 1,
                sum: product.count * product.prices[0].amount,
              })}
            />
          )
            : null}
          {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
        </div>
        <div>
          <div>{product.name}</div>
          <div>{`${currency} ${currencyPrice(currency, product.prices)}`}</div>
        </div>
      </article>
    ));
    return (
      <>{allProducts}</>
    );
  }
}

export default connect(null, { addToCart })(Products);
