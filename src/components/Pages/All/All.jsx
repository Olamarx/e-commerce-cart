/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from '../general/Products';
import '../general/all.css';
import Loading from '../loading/Loading';

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

const mapStateToProps = (state) => ({ products: state.products[0], currency: state.useCurrency });

export default connect(mapStateToProps)(All);
