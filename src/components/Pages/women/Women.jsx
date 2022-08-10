// import React, { Component } from 'react';
// // import API  from './API';
// import { Query } from '@apollo/client/react/components';
// import  { getAllProducts } from '../graphql/queries';

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { allData: null }
//   };

//   componentDidMount() {
//     <Query query={getAllProducts}>
//       {({ loading, error, data }) => {
//         if (loading) this.setState({ allData: loading })
//         if (error) this.setState({ allData: error })
//         if (data){
//           const { name } = data.category
//           this.setState({ allData: name })
//         }
//       }}
//     </Query>
//   }
    
//   render() {
//     return (
//       <div className="App">
//         {/* {console.log(this.state.allData) } */}
//         <Query query={getAllProducts}>
//         {({ loading, error, data }) => {
//                 if (loading) return <h2>Loading..</h2>;
//                 if (error) return <h2>Error: error</h2>;
//                 if (data) {
//                   // destructuring data
//                   const { products } = data.category;
//                   const { name } = data.category;
//                   console.log(name)
//                   return (
//                     <div>
//                       {products.map((product) => (
//                     <div key={product.id}>
//                       {product.gallery}
//                     </div>
//                       ))}
//                     </div>
//                   );
//                 }
//               }}
//         </Query>
//       </div>
//     );
//   }
// }


import React from 'react'

function Women() {
  return (
    <div>women</div>
  )
}

export default Women;