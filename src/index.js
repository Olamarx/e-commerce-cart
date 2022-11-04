import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import store from './components/store';

const theStore = createStore(store, applyMiddleware(thunk));

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const append = document.querySelector('#root');
const root = createRoot(append);

root.render(
  <React.StrictMode>
    <Router>
      <>
        <Provider store={theStore}>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Provider>
      </>
    </Router>
  </React.StrictMode>,
);
