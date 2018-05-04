/**
 * Created by Deegha on 12/05/2018
 */

import React from "react"

import "./H.css"

const H1 = ({children, mobile}) => <h1 className="headingMain" style={mobile?{padding:0, marginTop:5, marginBottom:5,fontSize:16 }:{}}>{children}</h1>

export default H1