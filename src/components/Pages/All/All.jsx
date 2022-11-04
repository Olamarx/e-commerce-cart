/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { imageContainer, centered } from '../general/helper';
import addProductImage from '../../../utils/Common.png';
import Products from '../general/Products';
import '../general/all.css';
import './loading.css';

class All extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

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

const mapStateToProps = (state) => {
  console.log(state);
  return {
  products: state.products[0]
  }
};

export default connect(mapStateToProps)(All);
