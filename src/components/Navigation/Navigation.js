import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Currencies from './Currencies';
import logo from '../../utils/logo.png'

export default class Navigation extends Component {
  render() {
    const navLinkStyles = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : '300',
      textDecoration: isActive ? 'underline' : 'none',
    });
    return (
      <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={navLinkStyles}
              >
                  WOMEN
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/men"
                style={navLinkStyles}
              >
                MEN
            </NavLink>
            </li>

            <li>
              <NavLink
                to="/kids"
                style={navLinkStyles}
              >
                KIDS
            </NavLink>
            </li>
          </ul>

          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
          <Currencies />
            
          </div>

        </nav>
      </header>
      </>
    )
  }
}
