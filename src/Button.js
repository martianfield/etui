import React from "react"
import PropTypes from "prop-types"

import css from "./Button.css"

class Button extends React.Component {
    
    render() {
        return (
            <button className={css.etui_button} onClick={this.onClick}>{this.props.label || ''}</button>
        )
    }

    onClick = (e) => {
        e.preventDefault()
        if(this.props.onClick) {
            this.props.onClick(this.props.data)
        }
    }
}

Button.propTypes = {
    onClick:PropTypes.func,
    data:PropTypes.any,
    label:PropTypes.string
}

export default Button