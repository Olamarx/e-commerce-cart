import React, { Component } from 'react'

export default class filter extends Component {
  render() {
    return (
      <>
      <label>
        Order by 
        <select value={this.props.sort}
        onChange={this.props.handleChangeCategory}
        >
          <option value="">All Products</option>
          <option value="clothes">Clothes</option>
          <option value="tech">Tech</option>

        </select>
      </label>
      </>
    )
  }
}
