import React from "react"
import PropTypes from "prop-types"
import animate from "amator"

// controller
import nc from "./NotificationCenter"

class Notification extends React.Component {
  constructor(props) {
    super(props)

    // scope methods
    this.showNotification = this.showNotification.bind(this)
    this.onMessageReceived = this.onMessageReceived.bind(this)
    this.onShowComplete = this.onShowComplete.bind(this)
    this.onHideComplete = this.onHideComplete.bind(this)

    // subscribe to NotificationCenter
    nc.__on = this.onMessageReceived

    // refs
    this.ref_container = null // container ref
    this.ref_message = null // message ref

    // flags
    this.active = false

    // the message stack
    this.messages = []
  }

  render() {
    return (
      <div className="etui-notification" ref={(div) => this.ref_container = div} style={{transform:'translateY(50px)'}} >
        <div className="etui-notification-message" ref={(div) => this.ref_message = div}>
          message comes here
        </div>
      </div>
    )
  }

  getDuration() {
    return isNaN(this.props.duration) ? 1000 : Number(this.props.duration)
  }

  onMessageReceived(m) {
    this.messages.push(m)
    this.showNotification()
  }

  showNotification() {
    if(this.messages.length > 0 && !this.active && this.ref_message && this.ref_container) {
      this.active = true

      let message = this.messages.shift()
      this.ref_message.innerText = message

      animate({bottom:0}, {bottom:50}, {
        duration:this.getDuration()/2,
        step:(value) => {
          this.ref_container.style.bottom = `${value.bottom}px`
        },
        done:() => {
          this.onShowComplete()
        }
      })
    }
  }

  onShowComplete() {
    animate({bottom:50}, {bottom:0}, {
      duration:this.getDuration()/2,
      step:(value) => {
        this.ref_container.style.bottom = `${value.bottom}px`
      },
      done:() => {
        this.onHideComplete()
      }
    })
  }

  onHideComplete() {
    this.active = false
    this.showNotification()
  }
}

Notification.propTypes = {
  duration:PropTypes.number.isRequired // duration in miliseconds
}

Notification.defaultProps = {
  duration:1000
}

export default Notification


// TODO very long notification text messes things slightly up because the overflowing text will cover the padding on the right side