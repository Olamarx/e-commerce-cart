import React, { Component } from 'react';
import { connect } from 'react-redux';
import './options.css';

import { Content, Main, Button, Sizes, Span, IndSize, Color, RightContent, AllImages, PDPBody, SmallImage, LeftImages } from './Style'
import { currencyPrice } from '../general/helper';
class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.product.gallery[0],
      isActive: false,
      // image: 

    };
  }

  
  // const cartItem = () => {
    //   this.setState({
      
      //   })
      // }
      
      
      render() {
    
        const handleClick = (product) => {
          console.log(product)
          this.setState({isActive: true})
        };
        const handleSelectedImage = (img) => {
          // console.log(product)
          this.setState({image: img})
        };

    const { product, currency } =  this.props;
    
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

        <RightContent>
              <h3>{product.name}</h3>
              
          
              { product.attributes && product.attributes.map((attr) => (

              <React.Fragment key={attr.id}>
                {attr.items.length && attr.type !== 'swatch' ? (
                <div>
                  <h3>{attr.name}:</h3>
                  <ul className="options-items">
                    { attr.items.map((item) => (
                  <li key={item.id}>
                    <input type="radio" id={item.id}  name="amount" />
                    <label htmlFor={item.id}>{item.displayValue}</label>
                    </li>
                    ))
                    }
                  </ul>
                </div>
              ) : null}

                {attr.type && attr.type === 'swatch' ? (
                <div>
                  <h3>{attr.name}:</h3>
                <Color>
                { attr.items.map((color) => (
                  <Span displayValue={color.displayValue} key={color.id}></Span>
                  ))
                }
                </Color>
                    </div>
                    ) : null}
              </React.Fragment>
              
                )) }
              <div>
              { product.prices && (
                <>
                <h3>Price:</h3>
                <span>{`${currency} ${currencyPrice(currency, product.prices)}`}
                </span>
                </>
              )
              
              }
              </div>

              <Button type='button'>ADD TO CART</Button>

        <Content dangerouslySetInnerHTML={{ __html: product.description }}/>

        </RightContent>
        </PDPBody>
      </Main>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.selected, currency: state.useCurrency });

export default connect(mapStateToProps)(ProductDescription);