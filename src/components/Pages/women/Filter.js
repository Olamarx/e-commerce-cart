/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts } from '../../../redux/action/productActions';
import './filter.css';

class Filter extends Component {
  render() {
    return (
      <>
        <label className="label-container" htmlFor="category">
          Order by
          <select
            id="category"
            value={this.props.sort}
            onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}
          >
            <option value="">All Products</option>
            <option value="clothes">Clothes</option>
            <option value="tech">Tech</option>

          </select>
        </label>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  category: state.products.categoryName,
});

export default connect(mapStateToProps, { filterProducts })(Filter);
