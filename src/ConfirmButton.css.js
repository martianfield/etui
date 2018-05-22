import Theme from "./Theme"

function make() {
  let theme = Theme.theme()

  return `
  div.etui-confirmbutton {
    display:inline-block;
    padding:1px;
    box-sizing:border-box;
  }
  
  div.etui-confirmbutton span {
    box-sizing:border-box;
    display:inline-block;
    cursor:pointer;
  }
  
  div.etui-confirmbutton span.main {
    color:${theme.colors[theme.ConfirmButton.color] || theme.ConfirmButton.color};
    background-color:${theme.colors[theme.ConfirmButton.backgroundColor] || theme.ConfirmButton.backgroundColor}; 
  }
  div.etui-confirmbutton span.yes {
    color:${theme.colors[theme.ConfirmButton.color_yes] || theme.ConfirmButton.color_yes};
    background-color:${theme.colors[theme.ConfirmButton.backgroundColor_yes] || theme.ConfirmButton.backgroundColor_yes}; 
  }
 
  div.etui-confirmbutton span.no {
    color:${theme.colors[theme.ConfirmButton.color_no] || theme.ConfirmButton.color_no};
    background-color:${theme.colors[theme.ConfirmButton.backgroundColor_no] || theme.ConfirmButton.backgroundColor_no}; 
  }
  div.etui-confirmbutton span.confirm {
    color:${theme.colors[theme.ConfirmButton.color_confirm] || theme.ConfirmButton.color_confirm};
    background-color:${theme.colors[theme.ConfirmButton.backgroundColor_confirm] || theme.ConfirmButton.backgroundColor_confirm};
  }
  
  
  div.etui-confirmbutton.size-small span {
    padding:4px 8px 4px 8px;
    font-size:${theme.ConfirmButton.font_size_small};
  } 
  div.etui-confirmbutton.size-small span.main {
    border-radius:${theme.ConfirmButton.border_radius_small};
  }
  div.etui-confirmbutton.size-small span.yes {
    border-radius:${theme.ConfirmButton.border_radius_small} 0 0 ${theme.ConfirmButton.border_radius_small};
  }
  div.etui-confirmbutton.size-small span.no {
    border-radius:0 ${theme.ConfirmButton.border_radius_small} ${theme.ConfirmButton.border_radius_small} 0;
  }
  
  div.etui-confirmbutton.size-medium span {
    padding:8px 16px 8px 16px;
    font-size:${theme.ConfirmButton.font_size_medium};
  }
  div.etui-confirmbutton.size-medium span.main {
    border-radius:${theme.ConfirmButton.border_radius_medium};
  }
  div.etui-confirmbutton.size-medium span.yes {
    border-radius:${theme.ConfirmButton.border_radius_medium} 0 0 ${theme.ConfirmButton.border_radius_medium};
  }
  div.etui-confirmbutton.size-medium span.no {
    border-radius:0 ${theme.ConfirmButton.border_radius_medium} ${theme.ConfirmButton.border_radius_medium} 0;
  }
  
  div.etui-confirmbutton.size-large span {
    padding:16px 32px 16px 32px;
    font-size:${theme.ConfirmButton.font_size_large};
  }
  div.etui-confirmbutton.size-large span.main {
    border-radius:${theme.ConfirmButton.border_radius_large};
  }
  div.etui-confirmbutton.size-large span.yes {
    border-radius:${theme.ConfirmButton.border_radius_large} 0 0 ${theme.ConfirmButton.border_radius_large};
  }
  div.etui-confirmbutton.size-large span.no {
    border-radius:0 ${theme.ConfirmButton.border_radius_large} ${theme.ConfirmButton.border_radius_large} 0;
  }
  
  
  `

}

export default {make}