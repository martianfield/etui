import React, { Component } from 'react'

import ButtonDocumentation  from './doc/Button'
import ConfirmButtonDocumentation from './doc/ConfirmButton'

export default class App extends Component {
  render () {
    return (
      <div>
        <ButtonDocumentation />
        <ConfirmButtonDocumentation />
      </div>
    )
  }
}
