import React, { Component } from 'react'

import {  AllImages,SmallImage, LeftImages } from './Style'

class Images extends Component {
  render() {
    const { product, handleSelectedImage, stateImage } = this.props
    return (
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
          src={stateImage} alt={product.gallery[0]} />
      </AllImages>
    )
  }
}

export default Images