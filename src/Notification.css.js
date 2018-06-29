import Theme from "./Theme"

function make() {
  let theme = Theme.theme()

  return `
  div.etui-notification {
    width:100%;
    max-width:100%;
    z-index:9999999;
    text-align:right;
    position:fixed;
    bottom:0; right:0;
    padding:8px;
    overflow:hidden;
    opacity:1;
  }
  
  div.etui-notification-message {
    display:inline-block;
    max-width:100%;
    padding:10px 20px 10px 20px;
    white-space:nowrap;
    textAlign:left;
    overflow:hidden;
    box-shadow:0px 2px 2px 0px silver;
    background-color:#333333;
    color:white;
  }
  
  `
}

export default {make}