/* eslint-disable react/jsx-key */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from '../../utils/Vector.png';
// import style from './Currencies.module.css';

class Currencies extends Component {
  render() {
    return (
      <>
        <img src={img} alt="cart" />
      </>
    //   <div className={style.select}>
    //     <select
    //       id="category"
    //       value={this.state.symbol}
    //       onChange={this.handleChange}
    //     >
    //       <option>{this.state.symbol}</option>
    //       {
    //         this.props.currencies.map((each) => (
    //           <option
    //           // This is due to linter throwing error which I am still reseaching the cause
    //             // key={each.symbol}
    //             value={each.symbol}
    //           >
    //             {`${each.symbol} ${each.label}`}
    //           </option>
    //         ))
    //       }
    //     </select>
    //     <div>
    //       <img src={img} alt="cart" />
    //       {
    //         this.result() ? <span>{this.result()}</span> : null
    //       }
    //     </div>
    //   </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products[0] });
export default connect(mapStateToProps)(Currencies);
