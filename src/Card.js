import React from "react"

class Card extends React.Component {

  render() {
    console.log(className)
    return (
      <div className={`etui-card`}>
        {this.props.children}
      </div>
    )
  }
}

export default Card