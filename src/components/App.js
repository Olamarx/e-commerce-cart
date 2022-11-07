/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCategories, fetchProducts, fetchCurrencies } from '../redux/action/actionCreators';
import Clothes from './Pages/Clothes/Clothes';
import Tech from './Pages/Tech/Tech';
import ProductDescription from './Pages/PDP/ProductDescription';
import All from './Pages/All/All';
import Navigation from './Navigation/Navigation';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
    this.props.fetchCurrencies();
  }

  render() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<All />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Routes>
      </>
    );
  }
}

export default connect(null,
  {
    fetchCategories,
    fetchProducts,
    fetchCurrencies,
  })(App);
