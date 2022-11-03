/* eslint-disable react/no-deprecated */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, fetchProducts } from '../../../redux/action/actionCreators';
import './women.css';

class All extends Component {
  componentDidMount() {
    this.props.categories();
    this.props.products();
  }

  render() {
    return (<div>Hell0</div>);
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps,
  {
    categories: fetchCategories,
    products: fetchProducts,
  })(All);
