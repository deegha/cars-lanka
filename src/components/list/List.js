/**
 * Creted by Deegha on 12/04/2018
 */

import React from "react"
import { connect } from "react-redux"   

import Node from "../reusable/node/node"
import { Filter, FilterView } from "../reusable/filter/"
import ScrollTop from "../reusable/scrollTop/scrollTop"
import Loading from "../reusable/loading/loading"
import "./list.css"
const List = ({products, makes, filter}) => 

<div className="productListContainer">
    {makes.loading?null:<Filter makes={makes.makes} />}
    <div className="productListWrapper"> 
        {products.loading?<Loading/>: products.products.map((product, key) =>
            <FilterView filter={filter} product={product} key={key}>
            <Node nodeKey={key}  product={product}/></FilterView>)}
    <ScrollTop />
    </div> 
</div>

const mapStateToProps = ({products, makes, filter}) =>  ({
    products : products,
    makes : makes,
    filter : filter.filter 
})

export default connect(mapStateToProps)(List)