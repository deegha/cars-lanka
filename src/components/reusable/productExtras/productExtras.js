import React from "react"

import Icon from "../icon/icon"

import "./productExtras.css"

const ProductExtras = ({product}) => <div className="productExtrasContainer">
    <span className="productDetailExtras">
        <Icon name="building" />
        {product.make}
    </span> 
    <span className="productDetailExtras">
        <Icon name="building" />
        {product.model}
    </span>   
    <span className="productDetailExtras">
        <Icon name="map-marker" />{product.location}
    </span>
    <span className="productDetailExtras">
        
        <Icon name="desktop" />
        {product.mileage} KM
    </span>
    <span className="productDetailExtras">{console.log(product.contacts[0].number)}
        {Object.keys(product.contacts).map(contact => <span key={contact}><Icon name="calendar" />{product.contacts[contact].number}</span>)}
        
    </span>
</div>

export default ProductExtras