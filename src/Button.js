import React from "react"
import PropTypes from "prop-types"
import {StyleSheet, css} from "aphrodite"

import cs from "./Common.aphrodite"
import theme from "./Theme.default"

class Button extends React.Component {
    
    render() {
        return (
            <div className={css(cs.reset, ls.container)}>
                <button className={css(cs.reset, ls.button)} onClick={this.onClick}>{this.props.label || ''}</button>
            </div>
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
    data:PropTypes.any,
    label:PropTypes.string
}

// Styling
const ls = StyleSheet.create({
    button: {
        cursor:"pointer",
        padding:"4px 8px 4px 8px",
        backgroundColor:theme.colors.inverted.background,
        color:theme.colors.inverted.foreground
    },
    container : {
        padding:"1px"
    }
})


// and export
export default Button