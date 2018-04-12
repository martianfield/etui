import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, css } from 'aphrodite';

import cs from "./Common.aphrodite"
import theme from "./Theme.default"

class ConfirmButton extends React.Component {
    state = {
        mode:'closed' 
    }

    render() {
        let content = null
        if(this.state.mode === 'closed') {
            content = <button onClick={this.onOpen} className={css(cs.color_inverted, cs.reset, ls.button)}>{this.props.label}</button>
        }
        else {
            content = [
                <button key="yes" onClick={this.onYes} className={css(cs.reset, cs.color_inverted, ls.button)}>yes</button>,
                <span key="question" className={css(cs.reset, cs.color_regular, ls.span)}>are you certain?</span>,
                <button key="no" onClick={this.onNo} className={css(cs.reset, cs.color_inverted, ls.button)}>no</button>
            ]
        }
        return (
            <div className={css(cs.reset, cs.font_size_regular, ls.container)}>
                {content}
            </div>
        )
    }

    onOpen = (e) => {
        e.preventDefault()
        this.setState({...this.state, mode:'open'})
    }

    onNo = (e) => {
        e.preventDefault()
        this.setState({...this.state, mode:'closed'})
        if(this.props.onCancel) {
            this.props.onCancel(this.props.data)
        }
    }

    onYes = (e) => {
        e.preventDefault()
        this.setState({...this.state, mode:'closed'})
        if(this.props.onConfirm) {
            this.props.onConfirm(this.props.data)
        }
    }
}

// Properties
ConfirmButton.propTypes = {
    label:PropTypes.string.isRequired,
    data:PropTypes.any,
    onConfirm:PropTypes.func,
    onCancel:PropTypes.func
}

// Styling
const ls = StyleSheet.create({
    container : {
        padding:"1px"
    },
    button: {
        padding:"4px 8px 4px 8px",
        cursor:"pointer",
        backgroundColor:theme.colors.inverted.background,
        color:theme.colors.inverted.foreground
    },
    span: {
        padding:"4px 8px 3px 8px",
        borderBottom:"1px solid",
        borderTop:"1px solid",
        borderColor:theme.colors.inverted.background
    }
})

// and export
export default ConfirmButton

