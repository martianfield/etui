import React from "react"
import PropTypes from "prop-types"

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.init(props)

  }

  render() {
    let labelStyle = {}
    if(this.props.colorLabel) {
      labelStyle["color"] = this.props.colorLabel
    }
    let label = this.props.label ? <div className="label" onClick={this.onClick} style={labelStyle}>{this.props.label}</div> : null
    return (
      <div className={`etui-checkbox label-position-${this.props.labelPosition}`}>
        {this.props.labelPosition === "top" || this.props.labelPosition === "left" ? label : null}
        <div className={`checkbox ${this.state.checked ? 'checked':''}`}>
          <div className="box" onClick={this.onClick} id={this.props.id}></div>
          {this.state.checked ? <div className="mark" onClick={this.onClick}></div> : null}
        </div>
        {this.props.labelPosition === "bottom" || this.props.labelPosition === "right" ? label : null}
      </div>
    )

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.entity !== this.props.entity) {
      this.setState(this.init(nextProps))
    }
  }

  init = (props) => {
    this._initialValue = Boolean(props.entity[props.property])
    return {
      checked: Boolean(props.entity[props.property])
    }
  }

  onClick = () => {
    let checked = !this.state.checked
    let isDirty = checked !== this._initialValue

    // fire event handler
    if(this.props.onChange) {
      this.props.onChange({
        data:this.props.data,
        entity:this.props.entity,
        property:this.props.property,
        value:checked,
        isDirty
      })
    }

    // inform watcher
    if(this.props.watcher) {
      if(this.props.watcher.change) {
        this.props.watcher.change(this.props.property, checked, isDirty)
      }
    }

    // update state
    this.setState({...this.state, checked})
  }

}

Checkbox.propTypes = {
  entity:PropTypes.object,
  property:PropTypes.string,
  watcher:PropTypes.object,
  onChange:PropTypes.func,
  data:PropTypes.any,
  id:PropTypes.string,
  label:PropTypes.string,
  labelPosition:PropTypes.oneOf(["top", "right", "bottom", "left"]),
  colorLabel:PropTypes.string
}

Checkbox.defaultProps = {
  entity:{"checked":true},
  property:"checked",
  labelPosition:"right"

}

export default Checkbox