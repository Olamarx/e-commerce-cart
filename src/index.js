import React from 'react';
// import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux/configfile';
import thunk from 'redux-thunk';
// import { GetCategory } from './redux/StoreReducer';

// GetCategory()

const store = createStore(reducer, applyMiddleware(thunk))

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

const append = document.querySelector('#root');
const root = createRoot(append);

root.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
        </ApolloProvider>
    </Router>
  </React.StrictMode>,
);