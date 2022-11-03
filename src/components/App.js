/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Clothes from './Pages/Clothes/Clothes';
import Tech from './Pages/Tech/Tech';
import All from './Pages/All/All';
import Navigation from './Navigation/Navigation';
import './App.css';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(store)}>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" exact element={<All />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/clothes" element={<Clothes />} />
          </Routes>
        </div>
      </Provider>
    );
  }
}
