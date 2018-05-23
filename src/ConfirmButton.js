import React from "react"
import PropTypes from "prop-types"

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAsking:false
    }
  }

  render() {
    // text between opening and closing tag takes precedence
    let label = (typeof this.props.children === "string") ? this.props.children : this.props.label
    let content = null
    if(!this.state.isAsking) {
      content = <span className="main" onClick={this.onClick}>{label}</span>
    }
    else {
      content = [
          <span key="yes" className="yes" onClick={this.onYes}>{this.props.labelYes}</span>,
          <span key="confirm" className="confirm">{this.props.labelConfirm}</span>,
          <span key="no" className="no" onClick={this.onNo}>{this.props.labelNo}</span>
      ]
    }

    return (
      <div className={`etui-confirmbutton size-${this.props.size}`}>
        {content}
      </div>
    )
  }

  onClick = (e) => {
    this.setState({...this.state, isAsking:true})
  }

  onYes = (e) => {
    if(this.props.onConfirm) {
      this.props.onConfirm(this.props.data)
    }
    this.setState({...this.state, isAsking:false})
  }

  onNo = (e) => {
    if(this.props.onCancel) {
      this.props.onCancel(this.props.data)
    }
    this.setState({...this.state, isAsking:false})
  }
}

// Properties
ConfirmButton.propTypes = {
  onConfirm:PropTypes.func,
  onCancel:PropTypes.func,
  disabled:PropTypes.bool,
  data:PropTypes.any,
  label:PropTypes.string.isRequired,
  labelConfirm:PropTypes.string.isRequired,
  labelYes:PropTypes.string.isRequired,
  labelNo:PropTypes.string.isRequired,
  size:PropTypes.oneOf(["small", "medium", "large"])
}


ConfirmButton.defaultProps = {
  disabled:false,
  label:"delete",
  labelConfirm:'sure?',
  labelYes:'yes',
  labelNo:'no',
  size:"small"
}



// and export
export default ConfirmButton
