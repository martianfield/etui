let colors = {
  primary_background:"#fa569f",
  primary_text:"white",
  primary_background_disabled:"silver",
  primary_text_disabled:"white",
  error:"red",
  white:"white"
}

const button = {
  backgroundColor:"primary_background",
  color:"primary_text",

  backgroundColor_disabled:"primary_background_disabled",
  color_disabled:"primary_text_disabled",

  backgroundColor_busy:"primary_background_disabled",
  color_busy:"primary_text_disabled",

  backgroundColor_cancel:"error",
  color_cancel:"white",

  font_size_small:"12px",
  font_size_medium:"14px",
  font_size_large:"18px",

  border_radius_small:"8px",
  border_radius_medium:"4px",
  border_radius_large:"2px",
}

const confirmButton = {
  backgroundColor:"primary_background",
  color:"primary_text",

  backgroundColor_yes:"primary_background",
  color_yes:"primary_text",

  backgroundColor_no:"error",
  color_no:"white",

  backgroundColor_confirm:"#555555",
  color_confirm:"white",

  font_size_small:"12px",
  font_size_medium:"14px",
  font_size_large:"18px",

  border_radius_small:"8px",
  border_radius_medium:"4px",
  border_radius_large:"2px",
}

export default {
  colors:colors,
  Button:button,
  ConfirmButton:confirmButton
}