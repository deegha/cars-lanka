import React from "react"

import "./infoMessage.css"

const InfoMessage = ({children, styles}) => <p className="messageP" style={styles}>{children}</p>

export default InfoMessage