/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { addToCart, selectedProduct } from '../../../redux/action/actionCreators';
import { currencyPrice, centered, imageContainer } from './helper';
import addProductImage from './Common.png';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {

    const setLocalStore = (product) => {
      product.inStock ? localStorage.setItem('selected_item', JSON.stringify({
        ...product,
        count: 1,
        selectedCurrency: currency,
        currencyPrice: currencyPrice(currency, product.prices),
        sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
      })) : null
    }

    const selectedPro = (product) => {
      selectedProduct({
        ...product,
        count: 1,
        selectedCurrency: currency,
        currencyPrice: currencyPrice(currency, product.prices),
        sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
      })
    }

    const {
      products, currency, addToCart, selectedProduct
    } = this.props;

    const allProducts = !products ? '' : products.products.map((product) => (
      <article className="card" key={product.id}>
       <div className="article-child">
        <div style={imageContainer}>
        {product.inStock ? (
          
            <img
            className="card_image1"
            src={product.gallery[0]}
            alt={product.name}
            />

        ) : (<img
          className="card_image1"
          src={product.gallery[0]}
          alt={product.name}
          onClick={() => {
            // setLocalStore(product)
            // selectedPro(product)
          }}
          />)}
          {product.inStock ? (
            <>
            { product.attributes.length ? (
              <NavLink 
              to={`/product/${product.id}`}>
              <img
                onClick={() => {
                  setLocalStore(product)
                  selectedPro(product)
              }}
                src={addProductImage}
                alt={product.name}
                style={{ cursor: 'pointer', position: 'relative', right: '100px', top: '25px', }}
                // onClick={() => }
              />
              </NavLink>
            ) :
            (
            <img
              onClick={() => {
                addToCart({
                    ...product,
                    count: 1,
                    selectedCurrency: currency,
                    currencyPrice: currencyPrice(currency, product.prices),
                    sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
                  })
                setLocalStore(product)
                selectedPro(product)
            }}
              src={addProductImage}
              alt={product.name}
              style={{ cursor: 'pointer', position: 'relative', right: '100px', top: '25px', }}
              // onClick={() => addToCart({
              //   ...product,
              //   count: 1,
              //   selectedCurrency: currency,
              //   currencyPrice: currencyPrice(currency, product.prices),
              //   sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
              // })}
            />
            )
            }
            </>
          )
            : null}
          {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
        </div>
        <div>
          <p>{product.name}</p>
          <span>{`${currency} ${currencyPrice(currency, product.prices)}`}</span>
        </div>
        </div>
      </article>
    ));
    return (
      <main className="main-body">
        <section className="container">
          {allProducts}
        </section>
      </main>
    );
  }
}

export default connect(null, { addToCart, selectedProduct })(Products);
