import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../../redux/action/currencies';
import img from '../../utils/Vector.png'
import style from './Currencies.module.css'


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

  render() {
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
        <div >
          <img src={img} alt="cart" />
          <span className={style.cart}>10</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies.currencies
})

export default connect(mapStateToProps, {fetchCurrencies})(Currencies)