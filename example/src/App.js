import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Start from './Start'
import ButtonDocumentation  from './doc/Button.doc'
import ThemeDocumentation from './doc/Theme.doc'
//import ConfirmButtonDocumentation from './doc/ConfirmButton.doc'
//import NotificationDocumentation from './doc/Notification.doc'

import "./App.css" 

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="documentation">
          <div id="sidebar">
            {this.renderMenuItem("Button", "button")}
            {this.renderMenuItem("Theme", "theme")}
            {/*this.renderMenuItem("ConfirmButton", "confirmbutton")*/}
            {/*this.renderMenuItem("Notification", "notification")*/}
          </div>
          <div id="content">
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Start}/>
            <Route path={process.env.PUBLIC_URL + '/button'} component={ButtonDocumentation}/>
            <Route path={process.env.PUBLIC_URL + '/theme'} component={ThemeDocumentation}/>
            {/*
            <Route path="/confirmbutton" component={ConfirmButtonDocumentation}/>
            <Route path="/notification" component={NotificationDocumentation} />
            */}
          </div>
        </div>
      </Router>
    )
  }

  renderMenuItem(label, key) {
    //let location = `${window.location.protocol}//${window.location.host}/${key}`
    return (
      <div className="menu-item" key={key} onClick={this.onChangeDoc} data-doc={key}>
        <Link to={key}>{label}</Link>
      </div>
    )
  }
}