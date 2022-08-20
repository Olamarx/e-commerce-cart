import React, { Component } from 'react'
import { imageContainer, centered } from './helper'
import { connect } from 'react-redux'
import './products.css'
import addProductImage from "../../../utils/Common.png"
import {fetchProducts } from '../../../redux/action/productActions'
class Products extends Component {

  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    console.log(this.props.products.filterItems);
    const productItems = this.props.products.filterItems.map((product) => (
      <article className="card" key={product.id}>
        <div style={imageContainer}>
          <img className="card_image" src={product.gallery[0]} alt={product.name} />
          {product.inStock ? (<img src={addProductImage} alt={product.name}
          style={{cursor: "pointer"}}
          onClick={(e) => this.props.handleAddToCart(e, product)} />)
          : null}
          {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
        </div>
        <div>
          <div>{product.name}</div>
          <div>{`${product.prices[0].currency.symbol}${product.prices[0].amount}`}</div>
        </div>
      </article>
    ))

    return (
      <div>
        {productItems}
      </div>
    )
    }  
}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps, {fetchProducts})(Products)