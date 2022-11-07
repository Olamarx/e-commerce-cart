/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <main className="main-body">
              <section className="container">
                <Products
                  products={products}
                  currency={currency}
                />
              </section>
            </main>
          ) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products[2], currency: state.useCurrency });

export default connect(mapStateToProps)(Tech);
