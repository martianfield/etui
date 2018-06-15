import React from "react"
import PropTypes from "prop-types"

class Label extends React.Component {

  render() {
    /*
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {label:this.props.label})
    })

    return children
    */
    React.Children.forEach(this.props.children, child => {
      console.log(child)
      //return React.cloneElement(child, {label:this.props.label})
    })
    return (
      <div className="etui-label" onClick={this.onClick}>
        {this.props.children}
      </div>
    )

  }

  onClick = () => {
    console.log('clickety the labely')
    if(this.props.for) {
      window.document.getElementById(this.props.for).click()
    }

  }
}

Label.propTypes = {
  for:PropTypes.string,
  //children:PropTypes.element.isRequired,s
  position:PropTypes.oneOf(["top", "right", "bottom", "left"])
}

Label.defaultProps = {
  position:"top"
}

export default Label