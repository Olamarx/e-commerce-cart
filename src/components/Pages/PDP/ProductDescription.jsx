import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import './options.css';

import { Input, FormLike, AttriLI, AttriH3, MainBodyAttri, Main, PDPBody  } from './Style'
import PriceAndButton from './PriceAndButton';
import Images from './Images';
import { addTheProduct } from '../general/helper';
import { addToCart } from '../../../redux/action/actionCreators';
import Notification from './Notification';
class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.product.gallery[0],
      set: false,
      data: {},
      notify: "",
    };    
  }

      setData = (e) => {
        const { name, value } = e.target;
            this.setState( prev => ({
              data: {
                ...prev.data, 
                [name]:  value,
              }
            }));
      };
      
      handleSubmit = (attributes, product, currency, addToCart) => {
        const { data } = this.state
        const { cart } = this.props

        const objectLength = Object.keys(data).length
        const attributeLength = product.attributes.length
        const calc = objectLength < 1 ? 0 : attributeLength - objectLength
        // console.log(objectLength, attributeLength);
        if (objectLength === attributeLength) {
          addTheProduct(addToCart, cart, product, currency, data)
          this.setState({notify: "Successfully Added to cart."})
        } else {
          this.setState({notify: `Kindly select all product attributes of your choice. You have selected ${calc} out of ${attributeLength}`})
        }

      }
      
      render() {
        const handleSelectedImage = (img) => {
          this.setState({image: img})
        };
        const { notify } = this.state
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
          {notify && (<Notification message={notify} />)}
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

const mapStateToProps = (state) => ({ product: state.selected, currency: state.useCurrency, cart:state.cart });

export default connect(mapStateToProps, { addToCart })(ProductDescription);