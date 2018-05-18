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

    return (
      <button className={`etui-button ${this.props.size}`}
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