import React from "react"
import {Button, Theme} from "etui"

class ThemeDocumentation extends React.Component {

  constructor(props) {
    super(props)

    this.themes = {
      green: this.createTheme_green(),
      orange: this.createTheme_orange(),
      default: null
    }

    this.onSelectTheme = this.onSelectTheme.bind(this)

  }

  render() {
    return (
      <div>
        <h1>Theme</h1>
        <Button onClick={this.onSelectTheme} data="green">Green</Button>
        <Button onClick={this.onSelectTheme} data="orange">Orange</Button>
        <Button onClick={this.onSelectTheme} data="default">Default</Button>
      </div>
    )
  }

  onSelectTheme(theme) {
    Theme.apply(this.themes[theme])
    this.forceUpdate()
  }

  createTheme_green() {
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

  createTheme_orange() {
    let colors = {
      primary_background:"blue",
      primary_text:"orange",
      primary_background_disabled:"silver",
      primary_text_disabled:"white"
    }
    return {
      colors:colors
    }
  }
}

export default ThemeDocumentation