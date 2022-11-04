/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, fetchProducts } from '../../../redux/action/actionCreators';
import { imageContainer, centered } from './helper';
import addProductImage from '../../../utils/Common.png';
import Products from '../general/Products';
import '../general/all.css';
import './loading.css';

class All extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
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

const mapStateToProps = (state) => ({ products: state.products[0] });

export default connect(mapStateToProps,
  {
    fetchCategories,
    fetchProducts,
  })(All);
