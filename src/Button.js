import React from "react"
import PropTypes from "prop-types"
import {css, cx} from 'emotion'
import Css from "./Button.theme.js"


class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let theme = Css()

    // text between opening and closing tag takes precedence
    let text = (typeof this.props.children === "string") ? this.props.children : this.props.label

    // size
    let css_size
    let size = this.props.size
    if(this.props.small) {
      size = "small"
    }
    if(this.props.large) {
      size = "large"
    }
    switch(size) {
      case "small":
        css_size = theme.small //css_small
        break
      case "large":
        css_size = theme.large // css_large
        break
      default:
        css_size = theme.normal // css_normal
        break
    }

    // disabled / enabled
    let css_state = this.props.disabled ? theme.disabled : theme.enabled

    return (
      <button className={`etui-button ${cx(theme.button, css_state, css_size )}`}
              onClick={this.onClick}
              disabled={this.props.disabled}>
        <span>
          {text}
        </span>
      </button>
    )
  }

  onClick = (e) => {
    e.preventDefault()

    if(this.props.onClick) {
      this.props.onClick(this.props.data)
    }
  }
}

// Properties
Button.propTypes = {
  onClick:PropTypes.func,
  disabled:PropTypes.bool,
  data:PropTypes.any,
  label:PropTypes.string,
  size:PropTypes.oneOf(["small", "medium", "large"])
}


Button.defaultProps = {
  disabled:false,
  label:"ok",
  size:"medium"
}



// and export
export default Button


// TODO enabled=false instead of disabled ... if this is used, reactions are possible ... e.g. shaking, or displaying an alternate label, or a popup message, or a notification