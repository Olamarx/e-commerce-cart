/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, fetchProducts } from '../../../redux/action/actionCreators';
import { imageContainer, centered } from './helper';
import addProductImage from '../../../utils/Common.png';
import './women.css';
import './loading.css';

class All extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    const allProducts = !products ? '' : products.products.map((product) => (
      <article className="card" key={product.id}>
        <div style={imageContainer}>
          <img className="card_image1" src={product.gallery[0]} alt={product.name} />
          {product.inStock ? (
            <img
              src={addProductImage}
              alt={product.name}
              style={{ cursor: 'pointer' }}
            />
          )
            : null}
          {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
        </div>
        <div>
          <div>{product.name}</div>
          <div>{`${product.prices[0].currency.symbol}${product.prices[0].amount}`}</div>
        </div>
      </article>
    ));

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
            <div className="women">
              <div className="products">
                {allProducts}
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
