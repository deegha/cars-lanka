import React from "react"

import Icon from "../icon/icon"

import "./productExtras.css"

const ProductExtras = ({product}) => <div className="productExtrasContainer">
    {/* <span className="productDetailExtras">
        <Icon name="building" />
        {product.make}
    </span>  */}
    <span className="productDetailExtras">
        <Icon name="cogs" className="fas fa-cogs" />
        {product.transmission}
    </span>   
    <span className="productDetailExtras">
        <Icon name="map-marker" />{
            product.location.name}
    </span>
    <span className="productDetailExtras">
        <Icon name="car" className="fas fa-car" />
        {product.mileage} KM
    </span>
    <span className="productDetailExtras">
        {Object.keys(product.contacts).map(contact => <span key={contact}><Icon name="mobile" className="fas fa-mobile" />{product.contacts[contact].number}</span>)}
        
    </span>
</div>

export default ProductExtras