import React, { Component } from 'react'

export default class Basket extends Component {
  constructor(props){
    super(props)
    this.state = {cartItems: []}
  }


increaseNumber = (item) => {
  if(item.num >= 1) {
    item.num++;
    console.log(item.num, item)
  }
}

decreaseNumber = (item) => {
if (item.num > 1) {
item.num = item.num - 1
console.log(item.num)
  }
}

  render() {
    let { cartItems } = this.props

    return (
      <div>{cartItems.length === 0 ? "Basket is empty" :
      (<div>You have { cartItems.length} products in the basket</div> )}
      {cartItems.length > 0 && 
      (
        <div>
          <ul>
          <span>My Bag. { cartItems.length} {cartItems.length > 1 ? "items" : "item" }</span>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                <span>{item.name}</span>
                <span>{`${item.prices[0].currency.symbol}${item.prices[0].amount}`}</span>
                <span>size</span>
                <span>color</span>
                </div>
                <div>
                <button onClick={() => this.increaseNumber(item)}>+</button>
                <span>{item.num}</span>
                <button onClick={() => this.decreaseNumber(item)}>-</button>
                </div>
                <img className="card_image" src={item.gallery[0]} alt={item.name} />
              </li>
            ))}
          </ul>
        </div>
      )
      }
      </div>
    )
  }
}