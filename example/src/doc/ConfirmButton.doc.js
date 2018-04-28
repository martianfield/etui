import React, { Component } from 'react'

import {ConfirmButton} from 'etui'

class ConfirmButtonDocumentation extends Component {
  render () {
    return (
      <div>
        <ConfirmButton label="delete this" data={{"foo":"bar"}} onConfirm={this.onConfirm} onCancel={this.onCancel} />
      </div>
    )
  }

  onConfirm = (data) => {
    console.log('ConfirmButton.onConfirm, data:', data)
  }

  onCancel = (data) => {
    console.log('ConfirmButton.onCancel, data:', data)
  }
}

export default ConfirmButtonDocumentation
