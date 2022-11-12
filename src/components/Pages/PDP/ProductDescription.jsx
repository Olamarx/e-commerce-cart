import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import './options.css';

import { Price, Input, FormLike, AttriLI, AttriH3, MainBodyAttri, Main, AllImages, PDPBody, SmallImage, LeftImages } from './Style'
import { currencyPrice } from '../general/helper';
class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.product.gallery[0],
      isActive: false,
        color: "",
        size: "",
        capacity: "",
        wihtPorts: "",
        wihtTouch: "",
        setData: [],


    };    
    // this.handleData = this.handleData.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  // const cartItem = () => {
    //   this.setState({
      
      //   })
      // }

      setData = (e) => {
        const { name, value } = e.target;
  
        if (name === "Size") {
          this.setState({ size: value });
        } else if (name === "Color") {
          this.setState({ color: value });
        } else if (name === "Capacity") {
          this.setState({ capacity: value });
        } else if (name === "With USB 3 ports") {
          this.setState({ wihtPorts: value });
        } else if (name === "Touch ID in keyboard") {
          this.setState({ wihtTouch: value });
        }

      };
      
      handleData = (event) => {
        console.log('working');
        this.setState({ data: event.target.value })
        console.log(this.state)
        // console.log(event.target.value);
      }
      
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.data1);
        // console.log('data', this.state.data);
      }
      
      
      render() {
        
        // const { attributes } = this.props


        const handleSelectedImage = (img) => {
          // console.log(product)
          this.setState({image: img})
        };

    const { product, currency } =  this.props;
    const { attributes, inStock } = product
    return (
      <Main>
      <PDPBody>
        <AllImages>
          <LeftImages>
            {product.gallery && product.gallery.map((img) => (
              <SmallImage
                src={img}
                alt={img}
                key={img}
                style={{cursor: 'pointer'}}
                onClick={() => handleSelectedImage(img)}
                />
            ))}
          </LeftImages>
            <img
            style={{ height: '600px', width: '500px',}}
            src={this.state.image} alt={product.gallery[0]} />
        </AllImages>

<div>

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
                        <AttriH3>
                      PRICE:
                    </AttriH3>
                    <Price>
                      {`${currency} ${currencyPrice(currency, product.prices)}`}
                    </Price>
              </div>


        {/* <RightContent> */}
              {/* <h3>{product.name}</h3> */}
{/* <form
onSubmit={this.handleSubmit}
style={{ display: 'flex', flexDirection: 'column', gap: '30px', }}
> */}
              
              {/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" /> */}

          
              {/* { product.attributes && product.attributes.map((attr) => ( */}

                {/* <React.Fragment key={attr.id}>
                <Ul>
                {attr.items.length && attr.type !== 'swatch' ? (
                  <>
                  <h3>{attr.name}:</h3>
                    { attr.items.map((item) => (
                    <li key={item.id}>
                    <input type="radio" id={item.id} value={this.state.data1} name={attr.id}
                    onChange={(e) => this.setState({ data1: e.target.value })} required/>
                    <label htmlFor={item.id}>{item.displayValue}</label>
                    </li>
                    )
                    )
                  }
                  </>
                  ) : 
                  
                  (<>
                  <h3>{attr.name}:</h3>
                
                  { attr.items.map((color) => (
                  <li key={color.id}>
                    <input 
                    value={item.displayValue}
                    style={{backgroundColor: `${color.displayValue}`, width: '20px', height: '20px', }} type='radio' id={color.id} name={attr.id} required/>
                    <label htmlFor={color.id}/>
                </li>
                  ))
                }
                </>)

                  }
                  </Ul>

              </React.Fragment>
              
                )) }
              <div>
              { product.prices && (
                <>
                <h3>Price:</h3>
                <input type='text'
                style={{ border: 'none', outline: 'none', }}
                value={`${currency} ${currencyPrice(currency, product.prices)}`} readOnly/>
                </>
              )
              
              }
              </div>

              <Button type='submit' value="ADD TO CART" />
        </form>

        <Content dangerouslySetInnerHTML={{ __html: product.description }}/>

        </RightContent> */}

        </PDPBody>
      </Main>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.selected, currency: state.useCurrency });

export default connect(mapStateToProps)(ProductDescription);