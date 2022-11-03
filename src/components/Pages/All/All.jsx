/* eslint-disable react/no-deprecated */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { FETCH_CATEGORIES } from '../../../redux/action/types';
import apiData from '../../../apiHolder';
import {fetchCategories} from '../../../redux/action/actionCreator';
import { categories, products } from '../../../graphql/queries';
import './women.css';

class All extends Component {
  componentDidMount() {
    this.props.categories('This is the data');
  }

  render() {
    return (<div>Hell0</div>);
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { categories: fetchCategories })(All);
