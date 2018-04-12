import React, { Component } from 'react'

import {Button} from 'etui'

class ButtonDocumentation extends Component {
  render () {
    return (
      <div>
        <Button label='Click me' onClick={this.onClick} />
      </div>
    )
  }

  onClick = (data) => {
    console.log('Button.onClick, data:', data)
  }
  
}

export default ButtonDocumentation
