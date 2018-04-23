/**
 * Created by Deegha on 05/12/2018
 */


import React from "react"

import { Link } from 'react-router-dom'

import H1 from "../heading/H1"
import H2 from "../heading/H2"
import Text from "../text/text"
import Card from "../card/card"
import FelxRow from "../flexRow/felxRow"
import ProductExtras from "../productExtras/productExtras"
import PaddingContainer from "../paddingContainer/paddingContainer"
import Carousel from "../carousel/carousel"

import "./node.css"

const Node = ({product, nodeKey}) => 
    <Card className="wrapper">
        <PaddingContainer padding="10px">
        <FelxRow>
            <div className="companyLogo">
                <Carousel images={product.images} />
            </div>
            <div className="jobDetails">
                <H1>{product.title}</H1>
                <H2>{product.company}</H2>
                <Text>{product.description.substring(0,500).replace(/<\/?[^>]+(>|$)/g, "")} ...</Text>
                <Link to={"productPage/"+product.id} >Read more...</Link>
                <hr className="lineBreaker"/>
                <ProductExtras product={product} />
            </div>
       </FelxRow>
       </PaddingContainer>
    </Card> 

export default Node