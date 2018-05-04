/**
 * Creted by Deegha on 12/04/2018
 */

import React from "react"
import { connect } from "react-redux"   
import { Link } from 'react-router-dom'

import Node from "../reusable/node/node"
import { Filter, FilterView } from "../reusable/filter/"
import ScrollTop from "../reusable/scrollTop/scrollTop"
import Loading from "../reusable/loading/loading"
import {mobileBrekPoint} from "../../services/breakPoints"

import "./list.css"

const List = ({products, makes, filter, ismobile}) => 

<div className="productListContainer"> 
    {makes.loading?null:<Filter makes={makes.makes} />}
    <div className="productListWrapper"> 
        {products.loading?<Loading/>: products.products.map((product, key) =>
            <FilterView filter={filter} product={product} key={key}>
            <Link className="nodeLink" to={"product/"+product.id}>
                <Node nodeKey={key}  product={product} ismobile={ismobile}/>
            </Link>
            </FilterView>)}
    <ScrollTop />
    </div> 
</div>

const mapStateToProps = ({products, makes, filter, windowDim}) =>  ({
    products : products,
    makes : makes,
    filter : filter.filter,
    ismobile : windowDim.width < mobileBrekPoint? true : false
})

export default connect(mapStateToProps)(List)