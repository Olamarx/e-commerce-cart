import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Query } from '@apollo/client/react/components';
// import  { getAllProducts } from '../../../graphql/queries';
// import { centered, imageContainer } from './helper';
import './women.css'
import { cartTypes } from '../../../redux/StoreReducer'


class Women extends Component {
  // const categories = getState('categories')

  render() {
    return (
      <div> 
        {console.log(this.props.result)}
        Working </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    result: state.cart
  }
}

const mapDispatchToProps =(dispatch) => {
      return {
        categories: () => dispatch({ type: cartTypes.CARTEGORIES }),
        category: () => dispatch({ type: cartTypes.CARTEGORY }),
        product: () => dispatch({ type: cartTypes.PRODUCT }),
        currencies: () => dispatch({ type: cartTypes.CURRENCIES })
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Women)



/* <div className="App">
/* <Query query={getAllProducts}>
{({ data }) => {
        if (data) {
          // destructuring data
          const { products } = data.category;
          // console.log(products)
          return (
            <>
            <button onClick={() => this.props}>Change</button>
            <section className="container">
              {products.map((product) => (
            <article className="card" key={product.id}>
              <div style={imageContainer}>
              <img className="card_image" src={product.gallery[0]} alt={product.name} />
                {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
              </div>
              <div>
              <div>{product.name}</div>
              <div>{`${product.prices[0].currency.symbol}${product.prices[0].amount}`}</div>
              </div>
            </article>
              ))}
            </section>
            </>
          );
        }
      }}
</Query>
</div> */