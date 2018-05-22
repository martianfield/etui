import React, { Component } from 'react'
import {ConfirmButton, Theme} from 'etui'
import Properties from "./Properties"
import Events from "./Events"
import Highlight from 'react-highlight'


class ConfirmButtonDocumentation extends Component {

  constructor(props) {
    super(props)
    // apply default theme
    Theme.apply()
  }

  properties = [
    {name:'label', description:'The main text to display', type:'string', default:`"ok"`},
    {name:'labelConfirm', description:'The text displayed when confirming', type:'string', default:'sure?'},
    {name:'labelYes', description:'Text for the Yes button', type:'string', default:'yes'},
    {name:'labelNo', description:'Text for the No button', type:'string', default:'no'},
    {name:'data', type:'any', description:'This is sent to the onClick handler', default:`null` },
    {name:'disabled', type:'bool', description:'If set to true, the button is disabled', default:'false'},
    {name:'size', type:'string', description:`'small', 'medium', or 'large`, default:'medium'}
  ]
  events = [
    {name:'onConfirm', description:'called when user confirms', attributes:'value of the data property'},
    {name:'onCancel', description:'called when user cancels', attributes:'value of the data property'}
  ]

  render () {
    return (
      <div>
        <h1>ConfirmButton</h1>
        <Properties properties={this.properties} />
        <Events events={this.events} />
        <Highlight language="javascript">
          {code_basic}
        </Highlight>
        <ConfirmButton label="delete" onConfirm={this.onConfirm} onCancel={this.onCancel} data={{foo:"bar"}} />
      </div>
    )
  }

  onConfirm = (data) => {
    console.log('confirmed. data:', data)
  }
  onCancel = (data) => {
    console.log('canceled. data:', data)
  }

}

export default ConfirmButtonDocumentation

const code_basic = `
import {ConfirmButton} from "etui"

<ConfirmButton label="delete" onConfirm={this.onConfirm} onCancel={this.onCancel} data="Hello" />

onConfirm = (data) => {
  console.log('confirmed. data:', data)
}
onCancel = (data) => {
  console.log('canceled. data:', data)
}
`

