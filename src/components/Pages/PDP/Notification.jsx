import React, { Component } from 'react'

class Notification extends Component {
  render() {
    const { message } = this.props
    return (
      <h3 
        style={message.includes('Successfully') ? { color:'green' } : { color:'red' }}
      >{message}</h3>
    )
  }
}

export default Notification;
