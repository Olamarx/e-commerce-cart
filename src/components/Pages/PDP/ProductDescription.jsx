import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sizes, Span, IndSize, Color, RightContent, AllImages, PDPBody, SmallImage, LeftImages } from './Style'

class ProductDescription extends Component {
  render() {
    const { product } =  this.props;
    return (
      <PDPBody>
        <AllImages>
          <LeftImages>
            {product.gallery && product.gallery.map((img) => (
              <SmallImage  src={img} alt={img} key={img}/>
            ))}
          </LeftImages>
            <img src={product.gallery[0]} alt={product.gallery[0]} />
        </AllImages>
        <RightContent>
          {/* <div dangerouslySetInnerHTML={{ __html: value }}/> */}
              <h3>{product.name}</h3>
              
              
              { product.attributes && product.attributes.map((attr) => (
              <React.Fragment key={attr.id}>

                {attr.items.length && attr.type !== 'swatch' ? (
                <>
                  <h3>{attr.name}:</h3>
                  <Sizes>
                    { attr.items.map((item) => (
                  <IndSize key={item.id}>{item.displayValue}</IndSize>
                    ))
                    }
                  </Sizes>
                </>
              ) : null}

                {attr.type && attr.type === 'swatch' ? (
                <>
                  <h3>{attr.name}:</h3>
                <Color>
                { attr.items.map((color) => (
                  <Span displayValue={color.displayValue} key={color.id}></Span>
                ))
              }
              </Color>
                    </>
                    ) : null}
                  </React.Fragment>
              
                )) }
        </RightContent>
      </PDPBody>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.selected });

export default connect(mapStateToProps)(ProductDescription);