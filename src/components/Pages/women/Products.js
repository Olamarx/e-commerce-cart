import React, { Component } from 'react'
import { imageContainer, centered } from './helper'

export default class Products extends Component {

  render() {
    console.log(this.props.allProducts)
    const productItems = this.props.allProducts.map(product => (
            <article className="card" key={product.id}>
                <div style={imageContainer}>
                    <img className="card_image" src={product.gallery[0]} alt={product.name} />
                    {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
                </div>
                <div>
                    <div>{product.name}</div>
                    <div>{`${product.prices[0].currency.symbol}${product.prices[0].amount}`}</div>
                </div>
            </article>
    ))

    return (
      <div>{productItems}</div>
    )
    }  
}

