/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.products[1], currency: state.useCurrency,
  };
};

export default connect(mapStateToProps)(Clothes);
