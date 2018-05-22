import React from "react"
import PropTypes from "prop-types"

class Events extends React.PureComponent {
  render() {
    let properties = this.props.events.map((prop, index) => {
      return (
        <tr key={index}>
          <td className="code">{prop.name}</td>
          <td>{prop.description}</td>
          <td className="code">{prop.attributes}</td>
        </tr>
      )
    })
    return (
      <table className="properties">
        <thead>
        <tr>
          <th>event</th>
          <th>description</th>
          <th>attributes</th>
        </tr>
        </thead>
        <tbody>
        {properties}
        </tbody>
      </table>
    )
  }
}

Events.propTypes = {
  events:PropTypes.array.isRequired
}

export default Events