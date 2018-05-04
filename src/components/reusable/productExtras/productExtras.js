import React from "react"

import Icon from "../icon/icon"
import {mobileBrekPoint} from "../../../services/breakPoints"
import "./productExtras.css"

const ProductExtras = ({product, ismobile}) => <div style={ismobile?{padding:0}:{}} className="productExtrasContainer" >
    {product.transmission?
    <span className="productDetailExtras">
        <Icon name="cogs" className="fas fa-cogs" />
        {product.transmission}
    </span>  :null}
    { product.location.name? 
    <span className="productDetailExtras">
        <Icon name="map-marker" />{
            product.location.name}
    </span>:null }
    { product.mileage?
    <span className="productDetailExtras">
        <Icon name="car" className="fas fa-car" />
        {product.mileage} KM
    </span>:null}

    {product.contacts ?
    <span className="productDetailExtras">
        {Object.keys(product.contacts).map(contact => <span key={contact}><Icon name="mobile" className="fas fa-mobile" />{product.contacts[contact].number}</span>)}
        
    </span>:null}
</div>

export default ProductExtras