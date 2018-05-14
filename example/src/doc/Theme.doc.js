import React from "react"
import {Button, Theme} from "etui"

class ThemeDocumentation extends React.Component {

  constructor(props) {
    super(props)

    let theme = this.createTheme()
    Theme.apply(theme)
  }

  render() {
    return (
      <div>
        <h1>Theme</h1>
        <Button>Hello</Button>
      </div>
    )
  }

  createTheme() {
    let colors = {
      primary_background:"green",
      primary_text:"white",
      primary_background_disabled:"silver",
      primary_text_disabled:"white"
    }
    return {
      colors:colors
    }
  }
}

export default ThemeDocumentation