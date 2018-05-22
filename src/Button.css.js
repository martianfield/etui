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
    position:relative;
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
    cursor:not-allowed;
  }
  
  button.etui-button.size-small span {
    border-radius:${theme.Button.border_radius_small};
    padding:4px 8px 4px 8px;
    font-size:${theme.Button.font_size_small};
  }
  
  button.etui-button.size-medium span {
    border-radius:${theme.Button.border_radius_medium};
    padding:8px 16px 8px 16px;
    font-size:${theme.Button.font_size_medium};
  }
  
  button.etui-button.size-large span {
    border-radius:${theme.Button.border_radius_large};
    padding:16px 32px 16px 32px;
    font-size:${theme.Button.font_size_large};
  }
  
  button.etui-button.mode-cancel span {
    color:${theme.colors[theme.Button.color_cancel] || theme.Button.color_cancel};
    background-color:${theme.colors[theme.Button.backgroundColor_cancel] || theme.Button.backgroundColor_cancel};
  }
  
  button.etui-button .etui-loader-container {
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    padding:1px;
  }
  
  button.etui-button .etui-loader {
    background-color:${theme.colors[theme.Button.backgroundColor_disabled] || theme.Button.backgroundColor_disabled};
    padding:10px 0 10px 0;
    width:100%;
    height:100%;
  }
  
  button.etui-button .etui-loader-bar {
    display: inline-block;
    margin:0px 2px 0px 2px;
    width: 4px;
    height: 100%;
    border-radius: 4px;
    animation: etui-button-loader-animation 1s ease-in-out infinite;
    background-color:${theme.colors[theme.Button.color_disabled] || theme.Button.color_disabled};
  }
  
  button.etui-button .etui-loader-bar:nth-child(1) {
    animation-delay:0;
  }
  button.etui-button .etui-loader-bar:nth-child(2) {
    animation-delay:0.10s;
  }
  button.etui-button .etui-loader-bar:nth-child(3) {
    animation-delay:0.20s;
  }
  
  @keyframes etui-button-loader-animation {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1, 2.2);
    }
    40% {
      transform: scale(1);
    }
  }
  
  `
}

export default {make}