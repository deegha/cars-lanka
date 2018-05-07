import React from "react"
import Icon from "../reusable/icon/icon"

import BoldText from "../reusable/boldText/boldText"

const VehicleDetails = ({product}) => 
<div>
    <ul>
        <li>
          
            <BoldText>Make</BoldText> : {product.make}
        </li>
        <li>
       
            <BoldText>Model Year</BoldText> : {product.manufacture_year}
        </li>
        <li>
   
            <BoldText>Condition</BoldText> : {product.condition}
        </li>
        <li>

            <BoldText>Transmission</BoldText> : {product.transmission}
        </li>
        <li>

            <BoldText>Fuel Type</BoldText> : {product.fuel_type}
        </li>
        <li>
     
            <BoldText>Engine capacity</BoldText> : {product.engine_capacity}
        </li>
    </ul>
</div>

export default VehicleDetails