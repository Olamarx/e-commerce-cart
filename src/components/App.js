import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Men from './Pages/men/Men';
import Kids from './Pages/Kids/Kids';
export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="/women" />} /> 
        <Route path="/men/" element={<Men />} /> 
        <Route path="/kids/" element={<Kids/>} />
        </Routes> 
      </div>
    )
  }
}
