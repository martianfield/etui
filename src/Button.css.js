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
      font-size:${theme.Button.font_size_small};
    }
  `
  let medium = css `
    span {
      padding:8px 16px 8px 16px;
      font-size:${theme.Button.font_size_medium};
    }
  `
  let large = css `
    span {
      padding:16px 32px 16px 32px;
      font-size:${theme.Button.font_size_large};
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
    medium:medium,
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