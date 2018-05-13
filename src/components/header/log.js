import React from "react"

import transBlack from "../../utils/dark_logo_transparent_background.png"
import transBlue from "../../utils/logo_transparent_background.png"
import white from "../../utils/white_logo_color_background.jpg"
import logo_text from "../../utils/logo_webite.png"
import logo_img from "../../utils/logo_L.png"

const Logo = () => <React.Fragment>
        <img src={logo_img} alt="logcars logo" style={{width:"41px"}} />
        <img src={logo_text} alt="logcars logo" />
        </React.Fragment>

export default Logo