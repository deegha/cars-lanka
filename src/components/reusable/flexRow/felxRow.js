/**
 * Created by Deegha on 04/12/2018
 */

import React from "react"

import "./felxRow.css"

const FelxRow = ({children, makeColumn}) => <div style={{flexDirection:makeColumn?"column":"row"}} className="felxRow">{children}</div>

export default FelxRow