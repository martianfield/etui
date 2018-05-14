/*
import React, { Component } from 'react'

import {Button, Notification, NotificationCenter} from 'etui'

class NotificationDocumentation extends Component {
  render () {
    let veryLongText = "bag, handbag, pocketbook, purse, clutch, clutch bag, evening bag, étui, reticule, shoulder bag, paper-back book, paperback, paperback book, soft-cover, soft-cover book, softback, softback book"
    return (
      <div>
        <h1>Notification</h1>
        <Button label='good morning!' data='good morning!' onClick={this.onSendOne} />
        <Button label='hi noon!' data='hi noon!' onClick={this.onSendOne} />
        <Button label='good night Jim Bob.' data='good night Jim Bob.' onClick={this.onSendOne} />
        <Button label='very long' data={veryLongText} onClick={this.onSendOne} />
        <Button label='three notifications' data={["first", "second", "third"]} onClick={this.onSendMultiple} />
        <Notification duration={2000} />
      </div>
    )
  }

  onSendOne = (data) => {
    NotificationCenter.send(data)
  }

  onSendMultiple = (data) => {
    data.forEach(element => {
      NotificationCenter.send(element)
    })
  }
  
}

export default NotificationDocumentation
*/