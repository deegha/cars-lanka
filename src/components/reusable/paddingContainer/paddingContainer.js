/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"

const PaddingContainer = ({children, padding, className, clickMethod}) => <div onClick={clickMethod} className={className} style={{padding : padding}}>{children}</div>

export default PaddingContainer