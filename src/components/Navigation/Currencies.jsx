/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useCurrency } from '../../redux/action/actionCreators';

import img from '../../utils/Vector.png';
import style from './Currencies.module.css';

class Currencies extends Component {
  constructor(props) {
    super(props);
    this.state = { symbol: this.props.currency };
  }

  handleChange = (event) => {
    this.props.useCurrency(event.target.value);
    this.setState({ symbol: event.target.value });
  };

  render() {
    const { cart } = this.props;

    return (
      <div className={style.select}>
        <select
          id="category"
          value={this.state.symbol}
          onChange={(e) => this.handleChange(e)}
        >
          <option>
            {this.state.symbol}
          </option>
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
            cart.length ? (<small>{cart.length}</small>) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  currency: state.useCurrency,
  cart: state.cart,
});
export default connect(mapStateToProps, { useCurrency })(Currencies);
