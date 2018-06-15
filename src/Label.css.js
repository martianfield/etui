import Theme from "./Theme"

function make() {
  let theme = Theme.theme()

  return `
  div.etui-label {
    font-size:14px;
    user-select:none;
    color:${theme.colors[theme.Checkbox.color] || theme.Checkbox.color};
  }
  `
}

export default {make}