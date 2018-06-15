import React from "react"
import {Checkbox, Label, Positions} from "etui"
import Highlight from 'react-highlight'

class CheckboxDocumentation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      changeEventData:''
    }

    this.user = {
      married:true
    }
  }

  render() {
    return (
      <div>
        <h1>Checkbox</h1>
        <Checkbox />
        <Highlight language="javascript">{code_simple}</Highlight>

        <h2>Labeling</h2>
        <p>
          Use the `label` and `labelPosition` properties
        </p>
        <table><tbody><tr>
          <td><Checkbox label="top" labelPosition="top" /></td>
          <td><Checkbox label="right" labelPosition="right" /></td>
          <td><Checkbox label="bottom" labelPosition="bottom" /></td>
          <td><Checkbox label="left" labelPosition="left" /></td>
        </tr></tbody></table>
        <Highlight language="javascript">{code_labeling_1}</Highlight>
        <p>
          You can also use the <code>Label</code> control (useful if the label has a different parent)
        </p>
        <table>
          <tbody>
            <tr>
              <td><Label for="checkbox_2">ok?</Label></td>
              <td><Checkbox id="checkbox_2"/></td>
            </tr>
          </tbody>
        </table>
        <Highlight language="javascript">{code_labeling_2}</Highlight>

        <h2>Disabled / Enabled</h2>

        <h2>Handling Data (entity, property, onChange)</h2>
        <Label for="checkbox2">ok?</Label>
        <Checkbox id="checkbox2" onChange={this.onChange} entity={this.user} property={"married"} />
        <div>
          {this.state.changeEventData}
        </div>

      </div>
    )
  }

  onChange = (e) => {
    let changeEventData = JSON.stringify(e)
    this.setState({...this.state, changeEventData})
  }


}

let code_simple = `
import {Checkbox} from "etui"

...

<Checkbox />
`

let code_labeling_1 = `
<Checkbox label="top" labelPosition="top" />
<Checkbox label="right" labelPosition="right" />
<Checkbox label="bottom" labelPosition="bottom" />
<Checkbox label="left" labelPosition="left" />
`
let code_labeling_2 = `
<table>
  <tbody>
    <tr>
      <td><Label for="checkbox_2">ok?</Label></td>
      <td><Checkbox id="checkbox_2"/></td>
    </tr>
  </tbody>
</table>
`




export default CheckboxDocumentation