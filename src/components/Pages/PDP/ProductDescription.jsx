import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './options.css';

import { Ul, Content, Main, Button, Sizes, Span, IndSize, Color, RightContent, AllImages, PDPBody, SmallImage, LeftImages } from './Style'
import { currencyPrice } from '../general/helper';
class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.product.gallery[0],
      isActive: false,
      // image: 

    };

    
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  // const cartItem = () => {
    //   this.setState({
      
      //   })
      // }

      handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.value);
      }
      
      
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
<form
onSubmit={this.handleSubmit}
style={{ display: 'flex', flexDirection: 'column', gap: '30px', }}
>
              
              {/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" /> */}

          
              { product.attributes && product.attributes.map((attr) => (

                <React.Fragment key={attr.id}>
                <Ul>
                {attr.items.length && attr.type !== 'swatch' ? (
                  <>
                  <h3>{attr.name}:</h3>
                    { attr.items.map((item) => (
                  <li key={item.id}>
                    <input type="radio" id={item.id}  name={attr.id} required/>
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
                    <input style={{backgroundColor: `${color.displayValue}`, width: '20px', height: '20px', }} type='radio' id={color.id} name={attr.id} required/>
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

        </RightContent>

        </PDPBody>
      </Main>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.selected, currency: state.useCurrency });

export default connect(mapStateToProps)(ProductDescription);