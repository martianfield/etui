import React from "react"
import {css} from 'emotion'

const className = css({
  padding:"4px",
  boxShadow:"0px 1px 2px rgba(0,0,0,0.5)"
})

class Card extends React.Component {

  render() {
    console.log(className)
    return (
      <div className={`etui-card ${className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Card