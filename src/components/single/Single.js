import React from "react"

import FlexColumn from "../reusable/flexColumn/flexColumn"
import FlexRow from "../reusable/flexRow/felxRow"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"
import Carousel from "../reusable/carousel/carousel"
import H2 from "../reusable/heading/H2"
import H1 from "../reusable/heading/H1"
import FloatingBackBtn from "../reusable/floatingBackBtn/floatingBackBtn"

import "./single.css"

import Footer from "./footer"
import ConactDetails from "./contactDetails"
import VehicleDetails from "./vehicleDetails"

const Single = ({product ,ismobile}) => 
    <div>
    <div className="singlePageContainer">
        <FlexColumn>
            <FloatingBackBtn />
            <PaddingContainer>
                <FlexRow makeColumn={ismobile}>
                    <div className="singleColOne" style={ismobile?{width:"100%"}:{}}>
                        <Carousel images={product.images} />
                        <div className="priceTag">
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'LKR' }).format(product.price)}
                        </div>
                        <div style={ismobile?{padding:15}:{}}>
                            <H1>{product.make+" "+product.model}</H1>
                            <H2>Description</H2>
                            <p className="productDescription">{product.description}</p>
                        </div>
                    </div>
                    <div>
                        <ConactDetails product={product}/>
                        <VehicleDetails product={product} />
                    </div>
                </FlexRow>
            </PaddingContainer>
                
           
        </FlexColumn>
    </div>
    <PaddingContainer>
        <Footer />
    </PaddingContainer>
    </div>
export default Single