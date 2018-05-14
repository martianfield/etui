// TODO remove this

function merge(base, override) {
  let _output = {...base}
  return _merge(_output, override)
}

function _merge(base, override) {
  for(let propName in override) {
    if(typeof base[propName] !== 'object') {
      base[propName] = override[propName]
    }
    else {
      base[propName] = _merge(base[propName], override[propName])
    }
  }
  return base
}

export default {merge}