/**
 * Creted by Deegha on 12/04/2018
 */

import React from "react"
import { connect } from "react-redux"   

import Node from "../reusable/node/node"
import "./list.css"
import ScrollTop from "../reusable/scrollTop/scrollTop"

import Loading from "../reusable/loading/loading"

const List = ({products}) => 

<div className="jobListContainer"> {console.log(products.products)}
    {products.loading?<Loading/>: products.products.map((product, key) => 
        <Node nodeKey={key} key={product.id} product={product}/>)}
    <ScrollTop />
</div>

const mapStateToProps = (state) => ({
    products : state.products
})


export default connect(mapStateToProps)(List)