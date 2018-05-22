import React, { Component } from 'react'
import {Button, Theme} from 'etui'
import Properties from "./Properties"
import Highlight from 'react-highlight'


class ButtonDocumentation extends Component {

  constructor(props) {
    super(props)
    // apply default theme
    Theme.apply()
  }

  properties = [
    {name:'label', description:'The text to display', type:'string', default:`"ok"`},
    {name:'data', type:'any', description:'This is sent to the onClick handler', default:`null` },
    {name:'disabled', type:'bool', description:'If set to true, the button is disabled', default:'false'},
    {name:'size', type:'string', description:`'small', 'medium', or 'large`, default:'medium'},
    {name:'mode', type:'string', description:`'regular', 'cancel', or 'disabled'`, default:'regular'}
  ]
  render () {
    return (
      <div>
        <h1>Button</h1>
        <Properties properties={this.properties} />
        <Highlight language="javascript">
{`
import {Button} from "etui"

<Button label="Click me" onClick={this.onButtonClick} data="Hello" />

onButtonClick = (data) => {
  console.log(data)
}
`}
        </Highlight>
        <Button label='Click me' onClick={this.onClick} />
        <Highlight language="javascript">
{`
<Button>Hello</Button>
`}
        </Highlight>
        <Button>hello</Button>

        <h2>Disabled Button</h2>
        <Highlight language="javascript">
{`
<Button label="Can't touch this!" disabled />
`}
        </Highlight>
        <Button label="Can't touch this!" disabled onClick={this.onClick} />

        <h2>Size</h2>
        <p>
          You can use the <code>size</code> property. Accepted values are: <code>"small"</code>, <code>"medium"</code> (default), <code>"large"</code>
        </p>
        <Highlight language="javascript">
{`
<Button size="small">small</Button>
<Button size="medium">medium</Button>
<Button size="large">large</Button>
`}
        </Highlight>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
        <p>
          You may also set the size using <code>small</code> or <code>large</code> as tag properties:
        </p>
        <Highlight language="javascript">
{`
<Button small>small</Button>
<Button>medium</Button>
<Button large>large</Button>
`}
        </Highlight>
        <Button small>small</Button>
        <Button>medium</Button>
        <Button large>large</Button>


        <h2>Mode</h2>
        <p>
          Display mode. Supported are <code>"regular"</code> (default), <code>"disabled"</code>, and <code>"cancel"</code>.
        </p>
        <p>
          Note: setting the mode to <code>"disabled"</code> will have the same effect as setting the <code>disabled</code> attribute - and vice versa. Also, <code>Disabled</code> takes precedence over other modes.
        </p>
        <Highlight language="javascript">{code_mode}</Highlight>
        <Button mode="regular">regular</Button>
        <Button mode="disabled">disabled</Button>
        <Button mode="cancel">cancel</Button>
        <Button mode="busy">busy</Button>

        <br />
        <br />
      </div>
    )
  }

  onClick = (data) => {
    console.log('Button.onClick, data:', data)
  }
  
}

export default ButtonDocumentation


const code_mode = `
<Button mode="regular">regular</Button>
<Button mode="disabled">disabled</Button>
<Button mode="cancel">cancel</Button>
<Button mode="busy">busy</Button>
`
