import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Currencies from './Currencies';
import logo from '../../utils/logo.png'
import style from './Navigation.module.css'
export default class Navigation extends Component {
  render() {
    const navLinkStyles = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : '300',
      borderBottomWidth: isActive ? '1.5px' : '0px',
      paddingBottom: '30px',
      textDecoration: 'none',
      width: '50px',
      color: isActive ? '#5ECE7B' : 'black',
      borderBottom: isActive ? '1px solid #5ECE7B' : 'none',
    });
    return (
      <>
      <header>
        <nav className={style.nav}>
          <ul className={style.link} >
            <li>
              <NavLink
                to="/"
                // className={style.link}
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
