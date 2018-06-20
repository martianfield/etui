import Theme from "./Theme"

function make() {
  let theme = Theme.theme()

  return `
  div.etui-checkbox {
    box-sizing:border-box;
    display:inline-flex;
    position:relative;
    cursor:pointer;
  }
  
  div.etui-checkbox .label {
    font-size:14px;
    user-select:none;
    color:${theme.colors[theme.Checkbox.color_label] || theme.Checkbox.color_label};
  }
  
  div.etui-checkbox.label-position-top,
  div.etui-checkbox.label-position-bottom {
    flex-direction:column;
    align-items:center;
  }
  
  div.etui-checkbox.label-position-right,
  div.etui-checkbox.label-position-left {
    flex-direction:row;
  }
  
  div.etui-checkbox.label-position-right .label {
    padding-left:2px;
  }
  
  div.etui-checkbox.label-position-left .label {
    padding-right:2px;
  }
  
  
  div.etui-checkbox .checkbox {
    display:inline-block;
    position:relative;
    
    width:16px;
    height:16px;
  }
  
  div.etui-checkbox .checkbox .box {
    position:absolute;
    top:0; left:0;
    width:16px;
    height:16px;
    background-color: ${theme.colors[theme.Checkbox.color_checkmark] || theme.Checkbox.color_checkmark};
    border:1px solid ${theme.colors[theme.Checkbox.color_box] || theme.Checkbox.color_box};
    border-radius:2px;
  }
  
  div.etui-checkbox .checkbox.checked .box {
    background-color: ${theme.colors[theme.Checkbox.color_box] || theme.Checkbox.color_box};
  }
  
  div.etui-checkbox .checkbox .mark {
    display:inline-block;
    position:absolute;
    top:2px;left:5px;
  }
  
  div.etui-checkbox .checkbox .mark:after {
    /*Add another block-level blank space*/
    content: '';
    display: block;
 
    /*Make it a small rectangle so the border will create an L-shape*/
    width: 4px;
    height: 8px;
 
    /*Add a white border on the bottom and left, creating that 'L' */
    border: solid ${theme.colors[theme.Checkbox.color_checkmark] || theme.Checkbox.color_checkmark};
    border-width: 0 2px 2px 0;
 
    /*Rotate the L 45 degrees to turn it into a checkmark*/
    transform: rotate(45deg);
  }
  `

}

export default {make}