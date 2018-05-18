import Theme from "./Theme"

function make() {
  let theme = Theme.theme()

  return `
  button.etui-button {
    box-sizing:border-box;
    border:none;
    padding:1px;
    outline:none;
    cursor:pointer;
  }
  
  button.etui-button:focus {
    outline:none;
  }
  
  button.etui-button span {
    display:inline-block;
    color:${theme.colors[theme.Button.color] || theme.Button.color};
    background-color:${theme.colors[theme.Button.backgroundColor] || theme.Button.backgroundColor};
  }
  
  button.etui-button:disabled span {
    color:${theme.colors[theme.Button.color_disabled] || theme.Button.color_disabled};
    background-color:${theme.colors[theme.Button.backgroundColor_disabled] || theme.Button.backgroundColor_disabled};
  }
  
  button.etui-button.small span {
    padding:4px 8px 4px 8px;
    font-size:${theme.Button.font_size_small};
  }
  
  button.etui-button.medium span {
    padding:8px 16px 8px 16px;
    font-size:${theme.Button.font_size_medium};
  }
  
  button.etui-button.large span {
    padding:16px 32px 16px 32px;
    font-size:${theme.Button.font_size_large};
  }
  
  `
}

export default {make}