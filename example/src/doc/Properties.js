import React from "react"
import PropTypes from "prop-types"

class Properties extends React.PureComponent {
    render() {
        let properties = this.props.properties.map((prop, index) => {
            return (
                <tr key={index}>
                    <td className="code">{prop.name}</td>
                    <td>{prop.description}</td>
                    <td className="code">{prop.type}</td>
                    <td className="code">{prop.default}</td>
                </tr>
            )
        })
        return (
            <table className="properties">
                <thead>
                    <tr>
                        <th>property</th>
                        <th>description</th>
                        <th>type</th>
                        <th>default</th>
                    </tr>
                </thead>
                <tbody>
                    {properties}
                </tbody>
            </table>
        )
    }
}

Properties.propTypes = {
    properties:PropTypes.array.isRequired
}

export default Properties