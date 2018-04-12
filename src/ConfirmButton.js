import React from "react"
import PropTypes from "prop-types"

class ConfirmButton extends React.Component {
    state = {
        mode:'closed' 
    }

    render() {
        if(this.state.mode === 'closed') {
            return (
                <div className="etui-confirmButton">
                    <button onClick={this.onOpen}>{this.props.label}</button>
                </div>
            )
        }
        else {
            return (
                <div className="etui-confirmBUtton">
                    <button onClick={this.onYes}>yes</button>
                    <span>are you certain?</span>
                    <button onClick={this.onNo}>no</button>
                </div>
            )
        }
        
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

ConfirmButton.propTypes = {
    label:PropTypes.string.isRequired,
    data:PropTypes.any,
    onConfirm:PropTypes.func,
    onCancel:PropTypes.func
}

export default ConfirmButton