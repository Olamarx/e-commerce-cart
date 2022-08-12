import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Currencies from './Currencies';

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
            Middle Image
          </div>

          <Currencies />
        </nav>
      </header>
      </>
    )
  }
}
