import React, { Component } from 'react'

import { currencyPrice } from '../general/helper';
import { AttriH3, Price, Button, Content } from './Style'

class PriceAndButton extends Component {
  render() {
    const { currency, product, addToCart, handleSubmit } = this.props
    const { inStock } = product
    return (
      <>
                              <AttriH3>
                      PRICE:
                    </AttriH3>
                    <Price>
                      {`${currency} ${currencyPrice(currency, product.prices)}`}
                    </Price>

                    <Button
                      type="button"
                      onClick={() => {
                      handleSubmit(product.attributes, product, currency, addToCart)
                    }}
                    disabled={!inStock}
                  >
                    {!product.inStock ? "OUT OF STOCK" : "ADD TO CART"}
                  </Button>
                  <Content dangerouslySetInnerHTML={{ __html: product.description }}/>
      </>
    )
  }
}

export default PriceAndButton;
