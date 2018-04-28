import React, { Component } from 'react'

import ButtonDocumentation  from './doc/Button.doc'
import ConfirmButtonDocumentation from './doc/ConfirmButton.doc'
import NotificationDocumentation from './doc/Notification.doc'

export default class App extends Component {
  render () {
    return (
      <div>
        <ButtonDocumentation />
        <ConfirmButtonDocumentation />
        <NotificationDocumentation />
      </div>
    )
  }
}
