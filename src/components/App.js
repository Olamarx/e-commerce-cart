import React from 'react'; //, { Component }
import { useQuery, gql } from '@apollo/client';




const getData = gql`
    {
    typeDefs,
    resolvers
    }
`;


// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

function DisplayLocations() {
    const { data } = useQuery(getData);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
  
    console.log({ 
        data
    }) 

    // data.locations.map(({ id, name, description, photo }) => (
    //   <div key={id}>
    //     <h3>{name}</h3>
    //     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
    //     <br />
    //     <b>About this location:</b>
    //     <p>{description}</p>
    //     <br />
    //   </div>
    // ));
  }

export default function App() {
    return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <DisplayLocations />
      </div>
    );
  }


// export default class App extends Component {
    
//   render() {
//     const { loading, error, data } = useQuery()
//     return (
//       <div>App</div>
//     )
//   }
// }
