import React from "react"
import Icon from "../icon/icon"
import {Link} from "react-router-dom"

import "./styles.css"

const FloatingBackBtn =({goBack}) => <span onClick={goBack()} className="FloatingBackBtn" >
<Icon name="chevron-circle-left"/>
</span>

export default FloatingBackBtn