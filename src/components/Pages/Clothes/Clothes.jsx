/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { imageContainer, centered } from '../All/helper';
import addProductImage from '../../../utils/Common.png';
import '../All/loading.css';
import Products from '../general/Products';

class Clothes extends Component {
  render() {
    const { products } = this.props;
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

const mapStateToProps = (state) => ({ products: state.products[1] });

export default connect(mapStateToProps)(Clothes);
