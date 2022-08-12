import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from '@apollo/client/react/components';
import  { getAllProducts } from '../../../graphql/queries';
import { centered, imageContainer } from './helper';
import './women.css'
import {
  GetCategories, GetCategory, GetProduct, GetCurrencies
 } from '../../../redux/StoreReducer'


class Women extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }
  };

  // const categories = getState('categories')

  render() {
    return (
      <div className="App">
        {console.log(this.props.result)}
        <Query query={getAllProducts}>
        {({ data }) => {
                if (data) {
                  // destructuring data
                  const { products } = data.category;
                  // console.log(products)
                  return (
                    <>
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
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    result: state.cart
  }
}

const mapDispatchToProps =() => {
      return {
        GetCategories,
        GetCategory,
        GetProduct,
        GetCurrencies
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Women)




















  // const { name } = data.categories;
  // console.log(name)
  // (<select
  // value={this.state.options}
  // onChange={e => this.setState({options: e.target.value })}
  // >
  //   {
  //     name.map((single) => (
  //       <option
  //       value={single}
  //       key={single}
  //       >
  //         { single.charAt[1].toUpperCase() }
  //       </option>
  //     ))
  //   }
  // </select>)
    


  //   <Query query={getAllProducts}>
      //     {({ loading, error, data }) => {
      //       if (loading) this.setState({ allData: loading })
      //       if (error) this.setState({ allData: error })
      //       if (data){
      //         const { name } = data.category
      //         this.setState({ allData: name })
      //       }
      //     }}
      //   </Query>
      // }