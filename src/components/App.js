import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Men from './Pages/men/Men';
import Kids from './Pages/Kids/Kids';
import Women from './Pages/women/Women';
import Navigation from './Navigation/Navigation';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <Routes>
          <Route path="/" exact element={<Women />} /> 
          <Route path="/men" element={<Men />} /> 
          <Route path="/kids" element={<Kids/>} />
          </Routes> 
        </div>
    )
  }
}
