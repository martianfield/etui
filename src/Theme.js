import defaultTheme from "./Theme.default"

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

function apply(theme) {
  if(theme) {
    // merge the them with the default theme
    __theme = __merge(__deepClone(defaultTheme), theme)
  }
  else {
    // apply the default theme
    __theme = __deepClone(defaultTheme)
  }

  __timestamp = new Date().getTime()
}

function theme() {
  return __theme
}

function timestamp() {
  return __timestamp
}

export default {apply, theme, timestamp}