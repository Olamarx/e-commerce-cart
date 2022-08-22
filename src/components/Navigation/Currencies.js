import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../../redux/action/currencies';

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
        <>
        <select id="category" value={this.state.symbol}
        onChange={this.handleChange}
        >
        <option>{this.state.symbol}</option>
          {
            this.props.currencies.map((each) => (
              each.symbol === "A$" ? null : (
                <option
                key={each.symbol}
                value={each.symbol}
                >
                  {`${each.symbol} ${each.label}`}
                </option>
              )
            ))
          }
          
        </select>
      </>
    )
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies.currencies
})

export default connect(mapStateToProps, {fetchCurrencies})(Currencies)