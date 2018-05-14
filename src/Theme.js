import defaultTheme from "./Theme.default"

let __theme = {...defaultTheme}
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

function apply(theme) {
  __theme = __merge({...defaultTheme}, theme)
  __timestamp = new Date().getTime()
}

function theme() {
  return __theme
}

function timestamp() {
  return __timestamp
}

export default {apply, theme, timestamp}