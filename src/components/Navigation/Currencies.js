import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../../redux/action/currencies';
import img from '../../utils/Vector.png'
import style from './Currencies.module.css'
import { addToCart } from '../../redux/action/cartAction';

class Currencies extends Component {
constructor(props){
  super(props);
  this.state = { symbol: "$" }
}

componentWillMount() {
  this.props.fetchCurrencies()
}

handleChange = (event) => {
  this.setState({ symbol: event.target.value });
}

result = () => {
  const {cartItems} = this.props
  let result = null
  let check = 0
  for(let i =0; i < cartItems.length; i++) {
    check = cartItems[i].num + check
  }
  result = check
  return result
}


  render() {
    console.log(this.result())
    return (
        <div className={style.select}>
        <select id="category"
        value={this.state.symbol}
        onChange={this.handleChange}
        >
        <option >{this.state.symbol}</option>
          {
            this.props.currencies.map((each) => (
                <option
                key={each.symbol}
                value={each.symbol}
                >
                  {`${each.symbol} ${each.label}`}
                </option>
            ))
          }
        </select>
        <div>
          <img src={img} alt="cart" />
          {
            this.result() ? <span>{this.result()}</span> : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies.currencies,
  cartItems: state.cart.items
})

export default connect(mapStateToProps, {fetchCurrencies, addToCart})(Currencies)