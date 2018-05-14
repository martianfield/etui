/*
import React from "react"
import PropTypes from "prop-types"
import {StyleSheet, css} from "aphrodite"
import anime from "animejs"

// controller
import nc from "./NotificationCenter"

// styling / theme
import cs from "./Common.aphrodite" // c(ommon) s(tyling)
import theme from "./Theme.default"

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
            <div className={css(cs.reset, ls.container)} ref={(div) => this.ref_container = div } style={{transform:'translateY(50px)'}} >
                <div className={css(cs.reset, ls.message)} ref={(div) => this.ref_message = div}>
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
        if(this.messages.length > 0 && !this.active) {
            this.active = true
            let message = this.messages.shift()
            this.ref_message.innerText = message
            anime({
                targets:[this.ref_container],
                translateY:0,
                duration:this.getDuration() / 2,
                complete:this.onShowComplete
            })
        }
    }

    onShowComplete() {
        anime({
            targets:[this.ref_container],
            translateY:50,
            duration:this.getDuration() / 2,
            complete:this.onHideComplete
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


// l(ocal) s(tyle)
const ls = StyleSheet.create({
    container : {
        width:"100%",
        maxWidth:"100%",
        zIndex:"9999999",
        textAlign:"right",
        position:"fixed",
        bottom:"0", right:"0",
        padding:"8px",
        overflow:"hidden"
    },
    message : {
        display:"inline-block",
        maxWidth:"100%",
        padding:"10px 20px 10px 20px",
        whiteSpace:"nowrap",
        textAlign:"left",
        overflow:"hidden",
        boxShadow:"0px 2px 2px 0px silver",
        backgroundColor:theme.colors.inverted.background,
        color:theme.colors.inverted.foreground
    }

})

export default Notification
*/

// TODO very long notification text messes things slightly up because the overflowing text will cover the padding on the right side