import React from "react"
import Highlight from 'react-highlight'

class Start extends React.Component {
  render() {
    return (
      <div>
        <h1>ETUI</h1>
        <Highlight language="javascript">{code_1}
        </Highlight>
      </div>
    )
  }
}

export default Start

const code_1 = `
npm install --save etui
`