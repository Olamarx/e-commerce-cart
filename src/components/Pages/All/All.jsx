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
            <main className="main-body">
              <section className="container">
                <Products
                  products={products}
                  addProductImage={addProductImage}
                  currency={currency}
                  centered={centered}
                  imageContainer={imageContainer}
                />
              </section>
            </main>
          ) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products[0], currency: state.useCurrency });

export default connect(mapStateToProps)(All);
