import React from "react"
import Icon from "../icon/icon"
import {Link} from "react-router-dom"

import "./styles.css"

const FloatingBackBtn = _=> <Link to="/" className="FloatingBackBtn" >
<Icon name="chevron-circle-left"/>
</Link>

export default FloatingBackBtn