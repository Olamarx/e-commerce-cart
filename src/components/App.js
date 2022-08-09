import React, { Component } from 'react';
import { gql } from '@apollo/client';
const getData = gql`
   query {
    categories {
    products
    }
  }
`;
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  };

  componentDidMount() {
    this.setState(getData)
  }

  render() {
    return (
      <div>{ console.log(this.state) } App</div>
    )
  }
}
