/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { imageContainer, centered } from '../general/helper';
import { addToCart } from '../../../redux/action/actionCreators';
import addProductImage from '../../../utils/Common.png';
import '../All/loading.css';
import Products from '../general/Products';

class Tech extends Component {
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
                    centered={centered}
                    currency={currency}
                    addToCart={addToCart}
                    imageContainer={imageContainer}
                  />
                </section>
              </div>
            </div>
          ) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products[2], currency: state.useCurrency });

export default connect(mapStateToProps)(Tech);
