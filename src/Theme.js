import defaultTheme from "./Theme.default"

import ButtonCss from "./Button.css.js"
import CheckboxCss from "./Checkbox.css.js"
import ConfirmButtonCss from "./ConfirmButton.css.js"
import LabelCss from "./Label.css.js"

let __theme = __deepClone(defaultTheme)
let __timestamp = new Date().getTime()

function __merge(base, override) {
  for(let propName in override) {
    if(typeof base[propName] !== 'object') {
      base[propName] = override[propName]
    }
    else {
      base[propName] = __merge(base[propName], override[propName])
    }
  }
  return base
}

function __deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function __mountCss() {
  let cssButton = ButtonCss.make()
  let cssCheckbox = CheckboxCss.make()
  let cssConfirmButton = ConfirmButtonCss.make()
  let cssLabel = LabelCss.make()
  let css = [cssButton, cssCheckbox, cssConfirmButton, cssLabel].join('')

  let head = document.getElementsByTagName("head")[0]

  // unmount
  let mounted = document.querySelectorAll("[data-etui='default']")
  if(mounted) {
    mounted.forEach(m => head.removeChild(m))
  }

  // via style
  let style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.setAttribute('data-etui', 'default')
  if(style.styleSheet) { // IE
    style.styleSheet.cssText = css
  }
  else {
    style.appendChild(document.createTextNode(css))
  }
  head.appendChild(style)
}

function apply(theme) {
  if(theme) {
    // merge the them with the default theme
    __theme = __merge(__deepClone(defaultTheme), theme)
  }
  else {
    // apply the default theme
    __theme = __deepClone(defaultTheme)
  }

  __mountCss()
  __timestamp = new Date().getTime()
}

function theme() {
  return __theme
}

function timestamp() {
  return __timestamp
}



export default {apply, theme, timestamp}