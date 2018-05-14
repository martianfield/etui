import {css, cx} from 'emotion'
import Theme from "./Theme"

let __timestamp = Theme.timestamp()
let __css = null

function __make() {
  let theme = Theme.theme()

  let button = css`
    box-sizing:border-box;
    border:none;
    padding:1px;
    outline:none;
    &:focus {
      outline:none;
    }
    
    &:hover {
      span {
        box-shadow:0px 1px 1px silver;
      }
    }
    
    &:active {
      span {
        box-shadow:inset 0px 1px 1px silver;
      }
    }
    
    span {
      display:inline-block;
    }
    
  `

  let small = css `
    span {
      padding:4px 8px 4px 8px;
    }
  `
  let normal = css `
    span {
      padding:8px 16px 8px 16px;
    }
  `
  let large = css `
    span {
      padding:16px 32px 16px 32px;
    }
  `

  let enabled = css `
    cursor:pointer;
    span {
      color:${theme.colors[theme.Button.color] || theme.Button.color};
      background-color:${theme.colors[theme.Button.backgroundColor] || theme.Button.backgroundColor};
    }
  `

  let disabled = css `
    cursor:not-allowed;
    span {
      color:${theme.colors[theme.Button.color_disabled] || theme.Button.color_disabled};
      background-color:${theme.colors[theme.Button.backgroundColor_disabled] || theme.Button.backgroundColor_disabled};
    }
  `
  return {
    button:button,
    small:small,
    normal:normal,
    large:large,
    enabled:enabled,
    disabled:disabled
  }
}

export default () => {
  if(__css === null || Theme.timestamp() !== __timestamp) {
    __css = __make()
    __timestamp = Theme.timestamp()
  }
  return __css
}