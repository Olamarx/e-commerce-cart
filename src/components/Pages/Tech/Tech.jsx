/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from '../general/Products';
import Loading from '../loading/Loading';

class Tech extends Component {
  render() {
    const { products, currency } = this.props;

    return (
      <>
        { !products
          ? (
            <Loading />
          )
          : (
              <Products
                products={products}
                currency={currency}
              />
          ) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products[2], currency: state.useCurrency });

export default connect(mapStateToProps)(Tech);
