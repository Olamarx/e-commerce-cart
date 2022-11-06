/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { imageContainer, centered } from '../general/helper';
// import { addToCart } from '../../../redux/action/actionCreators';
import addProductImage from '../../../utils/Common.png';
import '../All/loading.css';
import Products from '../general/Products';

class Clothes extends Component {
  render() {
    const { products, currency } = this.props;
    return (
      <>
        { !products
          ? (
            <div className="ring">
              Loading
              <span />
            </div>
          )
          : (
            <div className="all">
              <div className="products">
                <section className="container">
                  <Products
                    products={products}
                    addProductImage={addProductImage}
                    currency={currency}
                    centered={centered}
                    imageContainer={imageContainer}
                    // addToCart={addToCart}
                  />
                </section>
              </div>
            </div>
          ) }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.products[1], currency: state.useCurrency,
  };
};

export default connect(mapStateToProps)(Clothes);
