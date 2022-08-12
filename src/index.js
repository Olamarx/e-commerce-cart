import React from 'react';
// import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux/configfile';

const store = createStore(reducer)

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

const append = document.querySelector('#root');
const root = createRoot(append);

root.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
      <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
        </ApolloProvider>
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
);