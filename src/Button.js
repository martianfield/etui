import React from "react"
import PropTypes from "prop-types"
//import Theme from "./Theme"

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // text between opening and closing tag takes precedence
    let text = (typeof this.props.children === "string") ? this.props.children : this.props.label

    // disabled overrides mode
    let mode = this.props.disabled ? 'disabled' : this.props.mode

    // disabled mode triggers disabled flag
    let disabled = this.props.disabled || this.props.mode === 'disabled'

    // loader (if busy
    let loader = null
    if(this.props.mode === 'busy') {
      disabled = true
      loader = (
        <div className="etui-loader-container">
          <div className="etui-loader">
            <div className="etui-loader-bar"></div>
            <div className="etui-loader-bar"></div>
            <div className="etui-loader-bar"></div>
          </div>
        </div>
      )
    }

    return (
      <button className={`etui-button size-${this.props.size} mode-${mode}`}
              onClick={this.onClick}
              disabled={disabled}>
        <span>
          {text}
        </span>
        {loader}
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
  size:PropTypes.oneOf(["small", "medium", "large"]),
  mode:PropTypes.oneOf(["regular", "disabled", "cancel", "busy"])
}


Button.defaultProps = {
  disabled:false,
  label:"ok",
  size:"medium",
  mode:"regular"
}



// and export
export default Button


// TODO enabled=false instead of disabled ... if this is used, reactions are possible ... e.g. shaking, or displaying an alternate label, or a popup message, or a notification