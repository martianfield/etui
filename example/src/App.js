import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Start from './Start'
import ButtonDocumentation  from './doc/Button.doc'
import ThemeDocumentation from './doc/Theme.doc'
import WatcherDocumentation from './doc/Watcher.doc'
import ConfirmButtonDocumentation from './doc/ConfirmButton.doc'
import CheckboxDocumentation from './doc/Checkbox.doc'
import NotificationDocumentation from './doc/Notification.doc'

import "./App.css" 

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="documentation">
          <div id="sidebar">
            {this.renderMenuItem("Start", "start")}
            {this.renderMenuItem("Button", "button")}
            {this.renderMenuItem("ConfirmButton", "confirmbutton")}
            {this.renderMenuItem("Checkbox", "checkbox")}
            {this.renderMenuItem("Theme", "theme")}
            {this.renderMenuItem("Watcher", "watcher")}
            {this.renderMenuItem("Notification", "notification")}
          </div>
          <div id="content">
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Start}/>
            <Route path={process.env.PUBLIC_URL + '/start'} component={Start}/>
            <Route path={process.env.PUBLIC_URL + '/button'} component={ButtonDocumentation}/>
            <Route path={process.env.PUBLIC_URL + '/confirmbutton'} component={ConfirmButtonDocumentation}/>
            <Route path={process.env.PUBLIC_URL + '/checkbox'} component={CheckboxDocumentation}/>
            <Route path={process.env.PUBLIC_URL + '/theme'} component={ThemeDocumentation}/>
            <Route path={process.env.PUBLIC_URL + '/watcher'} component={WatcherDocumentation}/>
            <Route path={process.env.PUBLIC_URL + '/notification'} component={NotificationDocumentation} />
            {/*


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