import React, { Component } from 'react';
// import API  from './API';
import { Query } from '@apollo/client/react/components';
import  { getAllProducts } from '../graphql/queries';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = []
  };

  componentDidMount() {
    <Query query={getAllProducts}>

    </Query>
  }
    
  render() {
    return (
      <div className="App">
        <Query query={getAllProducts}>
        {({ loading, error, data }) => {
                if (loading) return <h2>Loading..</h2>;
                if (error) return <h2>Error: error</h2>;
                if (data) {
                  // destructuring data
                  const { products } = data.category;
                  return (
                    <div>
                      {products.map((product) => (
                    <div key={product.id}>
                      {product.gallery}
                    </div>
                      ))}
                    </div>
                  );
                }
              }}
        </Query>
      </div>
    );
  }
}
