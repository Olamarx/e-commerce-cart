/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/action/cartAction';
import './basket.css';

class Basket extends Component {
  increaseNumber = (item) => {
    if (item.num >= 1) {
      item.num += 1;
    }
  };

  decreaseNumber = (item) => {
    if (item.num > 1) {
      item.num -= 1;
    }
  };

  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <>
        {cartItems.length > 0
      && (
        <div className="cart-bag">
          <ul>
            <div className="item-number">
              <span className="my-bag">My Bag.</span>
              <span className="item-number">
                {' '}
                { cartItems.length}
                {' '}
                {cartItems.length > 1 ? 'items' : 'item' }
              </span>
            </div>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="description">
                  <p>{item.name}</p>
                  <p className="description_para">
                    {item.description.includes('<', 0)
                      ? item.description.slice(3, item.description.length - 4) : item.description }
                  </p>
                  <h4>{`${item.prices[0].currency.symbol}${item.prices[0].amount}`}</h4>
                  <div>
                    Size:
                    <div className="size-btn">
                      <button type="button">XS</button>
                      <button type="button">S</button>
                      <button type="button">M</button>
                      <button type="button">L</button>
                    </div>
                  </div>
                  {item.attributes[1] && item.attributes[1].name === 'Color'
                    ? (
                      <div>
                        color:
                        <div className="color-gorup">
                          { item.attributes[1].items.map((ind) => (
                            <span className="color-product" style={{ backgroundColor: ind.value }} key={ind.id}>{null}</span>
                          ))}
                        </div>
                      </div>
                    ) : null }
                </div>
                <div className="buttons">
                  <button onClick={() => this.increaseNumber(item)} type="button">+</button>
                  <span>{item.num}</span>
                  <button onClick={() => this.decreaseNumber(item)} type="button">-</button>
                </div>
                <div className="image_card">
                  <img className="card_image2" src={item.gallery[0]} alt={item.name} />
                </div>
              </li>
            ))}
          </ul>
          <div className="total-amount">
            <h3>Total</h3>
            <h3>Total</h3>
          </div>
        </div>
      )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { addToCart })(Basket);
