import React, { Component } from 'react';
import { theQuery } from '../../../redux/StoreReducer';
import './women.css'
import Products from './Products';
import Filter from './Filter'

export default class Women extends Component {
  constructor(props){
    super(props);
    this.state = { products: [], filteredProducts: [] }
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
  }

  componentDidMount() {
      fetch("http://localhost:4000", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
              },
              body: JSON.stringify({
                  query: theQuery
              })
          })
          .then(response => {
              return response.json();
          })
          .then(data => {
            const { categories } = data.data
            this.setState({
              products: categories[0].products,
              filteredProducts: categories[0].products,
            })
          });  
  }
  
handleChangeCategory(e){
  this.setState({sort: e.target.value})
  this.listProducts()
}
listProducts(){
  this.setState(state => {
    if (state.sort === "tech"){
      const filt = state.products.filter(product => product.category === "tech")
      return {filteredProducts: filt }
    } else if (state.sort === "clothes") {
      const filt = state.products.filter(product => product.category === "clothes")
      return {filteredProducts: filt }
    }
    else return { filteredProducts: state.products }
  })
}

  render() {
    // console.log(this.state)
  return (
    <>
    <Filter
    sort={this.state.sort}
    handleChangeCategory={this.handleChangeCategory}
    />
    <Products
    allProducts={this.state.filteredProducts}
    handleAddToCart={this.handleAddToCart}
    />
    </>
    );
  }

    // const { products } = this.props
    
  }
    // <>
    // {/* <Filter categories/>
    // {/* <button onClick={() => categories[1] ? categories[1] : '' }>Clothes</button> */}
    // {/* <section className="container">
    //   {this.state.all.products.map((product) => (
    // <article className="card" key={product.id}>
    //   <div style={imageContainer}>
    //   <img className="card_image" src={product.gallery[0]} alt={product.name} />
    //     {!product.inStock ? (<div style={centered}>Out of stock</div>) : null}
    //   </div>
    //   <div>
    //   <div>{product.name}</div>
    //   <div>{`${product.prices[0].currency.symbol}${product.prices[0].amount}`}</div>
    //   </div>
    // </article>
    //   ))}
    // </section>
    //   */}


// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart
//   }
// }

// const mapDispatchToProps =(dispatch) => {
//       return {
//         Product: dispatch(addProduct)
//         // categories: (product) => dispatch({ type: Action.ADD_PRODUCT, payload: product }),
//       }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Women)


// //   componentDidMount(){
// // this.props.dispatch({
//   payload: addProduct
// })
// }



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