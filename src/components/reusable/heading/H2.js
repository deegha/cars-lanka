/**
 * Created by Deegha on 12/05/2018
 */


import React from "react"

import "./H.css"

const H2 = ({children, mobile}) => <h2 className="headingSub" style={mobile?{margin:0,padding:0}:{}}>{children}</h2>

export default H2