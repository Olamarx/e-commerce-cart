import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PDPBody } from './Style'

class ProductDescription extends Component {
  render() {
    console.log(this.props.product)
    return (
      <PDPBody>
        <div>Images</div>
        <div>Content</div>
      </PDPBody>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.selected });

export default connect(mapStateToProps)(ProductDescription);