/**
 * Creted by Deegha on 12/04/2018
 */

import React from "react"
import { connect } from "react-redux"   
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'

import Node from "../reusable/node/node"
import { Filter, FilterView } from "../reusable/filter/"
import ScrollTop from "../reusable/scrollTop/scrollTop"
import Loading from "../reusable/loading/loading"
import {mobileBrekPoint} from "../../services/breakPoints"
import { fetchProductsList } from "../../actions/productListActions"
import InfinityScroll from "../infinityScroll/infinityScroll"
import MetaTags from 'react-meta-tags'
import "./list.css"
import SiteImage from "../../utils/logo_transparent_background.png"

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
    }
    
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    render () {
        const {products, makes, filter, ismobile, startAt, getProductsList} = this.props
        return <div className="productListContainer"> 
            {makes.loading?null:<Filter makes={makes.makes} />}
            <div className="productListWrapper"> 
                {products.loading?<Loading/>: Object.keys(products.products).map((product, key) =>
                    <FilterView filter={filter} product={products.products[product]} key={key}>
                    <Link className="nodeLink" to={"product/"+products.products[product].id}>
                        <Node nodeKey={key}  product={products.products[product]} ismobile={ismobile}/>
                    </Link>
                    </FilterView>)}
            <ScrollTop />
            </div> 
        </div>
    }
}

const mapStateToProps = ({products, makes, filter, windowDim}) =>  ({
    products : products,
    startAt : products.lastItem,
    makes : makes,
    filter : filter.filter,
    ismobile : windowDim.width < mobileBrekPoint? true : false
})

const mapDispatchToProps = dispatch => ({
    getProductsList : () =>_ => dispatch(fetchProductsList())
})

export default connect(mapStateToProps,mapDispatchToProps)(List)