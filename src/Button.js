import React from "react"
import PropTypes from "prop-types"

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }
    render() {
        return (
            <button onClick={this.onClick}>{this.props.label || ''}</button>
        )
    }

    onClick(e) {
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