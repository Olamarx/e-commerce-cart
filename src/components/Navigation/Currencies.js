import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { getCurrencies } from '../../graphql/queries';

export default class Currencies extends Component {
constructor(props){
  super(props)
  this.state = { symbol: '$' }

  this.handleChange = this.handleChange.bind(this)
}

handleChange(e) {
  this.setState({symbol: e.target.value});
}

  render() {
    return (
        <>
        {/* <Query query={getCurrencies}>
        {({ data }) => {
          if (data) {
            const { currencies } = data
            // console.log(currencies);
            <select
            value={this.state.symbol}
            onChange={this.handleChange}
            >
                  <option value={this.state.symbol}>{null}</option>
                    {
                      currencies.map(({ symbol, label }) => (
                        <option
                        value={symbol}
                        key={symbol}
                        >
                          gdfgdg
                          {label}
                        </option>
                      ))
                    }
                  </select>
                }
        }}
      </Query> */}
      </>
    )
  }
}
