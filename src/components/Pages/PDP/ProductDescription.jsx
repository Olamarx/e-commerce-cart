import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import './options.css';

import { Input, FormLike, AttriLI, AttriH3, MainBodyAttri, Main, PDPBody  } from './Style'
import PriceAndButton from './PriceAndButton';
import Images from './Images';
import { currencyPrice } from '../general/helper';
import { addToCart } from '../../../redux/action/actionCreators';
import Notification from './Notification';
class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.product.gallery[0],
      set: false,
      "Color": "",
        "Size": "",
        "Capacity": "",
        "With USB 3 ports": "",
        "Touch ID in keyboard": "",
    };    
  }

      setData = (e) => {
        const { name, value } = e.target;
        if (name === "Size") {
          this.setState({ Size: value });
        } else if (name === "Color") {
          this.setState({ color: value });
        } else if (name === "Capacity") {
          this.setState({ Capacity: value });
        } else if (name === "With USB 3 ports") {
          this.setState({ "With USB 3 ports": value });
        } else if (name === "Touch ID in keyboard") {
          this.setState({ "Touch ID in keyboard": value });
        }
      };
      
      handleSubmit = (attributes, product, currency, addToCart) => {
        const { state } = this
        const data = [state["Touch ID in keyboard"], state['Size'], state['Capacity'], state["With USB 3 ports"], state["Color"]]
        const filter = data.filter((datum) => datum !== "")
        const attr =  {
        "Color": state["Color"],
        "Size": state['Size'],
        "Capacity": state['Capacity'],
        "With USB 3 ports": state["With USB 3 ports"],
        "Touch ID in keyboard": state["Touch ID in keyboard"],
      }
        if (filter.length === attributes.length) {
        console.log(filter);
        addToCart({
          ...product,
          count: 1,
          selectedAttr: attr,
          selectedCurrency: currency,
          currencyPrice: currencyPrice(currency, product.prices),
          sum: 1 * parseFloat(currencyPrice(currency, product.prices)),
        })
        this.setState({ set: false })
        } else {
          this.setState({ set: true });
        }
      }
      
      
      render() {
        const handleSelectedImage = (img) => {
          this.setState({image: img})
        };
        const { set } = this.state
    const { product, currency, addToCart } =  this.props;
    const { attributes, inStock } = product
    return (
      <>
      <Main>
      <PDPBody>
        <Images
          product={product}
          handleSelectedImage={handleSelectedImage}
          stateImage={this.state.image}
          />

<div>
          {set ? (<Notification message="Kindly select out of the options" />) : null }
              {attributes && attributes.map((attribute) => (
              <MainBodyAttri key={attribute.name}>
                  <AttriH3>{attribute.name.toUpperCase()}:</AttriH3>
                  <AttriLI>
                    {attribute.items.map((item) => {
                       item.key = uuidv4()
                      return (
                      <React.Fragment key={item.id}>
                        <FormLike>
                        <Input
                          type="radio"
                          onChange={this.setData}
                          id={item.key}
                          disabled={!inStock}
                          name={attribute.name}
                          value={item.value}
                        />

                        <label 
                          className={
                            attribute.name === "Color" ? "label-color" : "label-no-color"
                          }
                          htmlFor={item.key}
                          style={{
                            backgroundColor:
                              attribute.name === "Color" && `${item.displayValue}`,
                          }}
                        >
                          {item.value}
                        </label>
                      </FormLike>
                    </React.Fragment>
                    )
                        }
                    
                    )}
                  </AttriLI>
                </MainBodyAttri>
              ))}
 <PriceAndButton 
  currency={currency}
  product={product}
  addToCart={addToCart}
  handleSubmit={this.handleSubmit}
 />
              </div>
        </PDPBody>

      </Main>
     </>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.selected, currency: state.useCurrency });

export default connect(mapStateToProps, { addToCart })(ProductDescription);