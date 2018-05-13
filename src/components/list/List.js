/**
 * Creted by Deegha on 12/04/2018
 */

import React from "react"
import { connect } from "react-redux"   
import { Link } from 'react-router-dom'
import { push } from "react-router-redux"
import Pagination from "react-js-pagination"

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
import Footer from "../footer/footer"

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 0
        }
    }

    componentWillReceiveProps(next) {
        this.setState({"activePage" : next.match.params.page})
    }

    componentDidMount() {
        this.setState({"activePage" : this.props.match.params.page})
    }
    
    handlePageChange = (pageNumber) => {
        this.props.history.push('/page/' +pageNumber)
    }

    setMeta = () =>  <MetaTags>
        <title>New and used vehicles</title>
        <meta name="description" content="Log cars is your online car sale, we do the marketing for your vehic;e" />
        <meta property="og:title" content="New and used vehicles" />
        <meta property="og:image" content="https://logcars.com/static/media/logo_L.13276d87.png" />
        <meta property="og:site_name" content="logcars.com" />
        <meta property="og:type" content="product" />
    </MetaTags>

    render () {
        const {products, makes, filter, ismobile, startAt, getProductsList} = this.props

        const per_page = 10
        const ItemCount = Object.keys(products.products).length
        const pages = Math.ceil(ItemCount / per_page) 
        const current_page = this.state.activePage
        const start_offest = (current_page - 1) * per_page
        let start_count = 0

        return  <div className="productListContainer"> 
       
            {makes.loading?null:<Filter makes={makes.makes} />}
            <div className="productListWrapper"> 
                {this.setMeta()}
                {products.loading? <Loading/>: <React.Fragment>
                        {Object.keys(products.products).map((product, key) => {
                                
                                if(key >= start_offest && start_count < per_page) {
                                    start_count++;
                                    return <FilterView filter={filter} product={products.products[product]} 
                                    key={key}>
                                        <Link className="nodeLink" to={"/product/"+products.products[product].id}>
                                            <Node nodeKey={key}  product={products.products[product]} ismobile={ismobile}/>
                                        </Link>
                                    </FilterView>
                                }

                        })}
                        <div className="paginationContainer">
                            <Pagination
                                hideNavigation={true}
                                hideFirstLastPages={true}
                                activePage={this.state.activePage}
                                itemsCountPerPage={per_page}
                                totalItemsCount={ItemCount}
                                pageRangeDisplayed={10}
                                onChange={this.handlePageChange}
                                />
                        </div>

                    </React.Fragment>}
               
            </div> 
            <ScrollTop />
            {products.loading?null:<Footer />}
        </div>
    }
}

const mapStateToProps = ({products, makes, filter, windowDim }) =>  ({
    products : products,
    startAt : products.lastItem,
    makes : makes,
    filter : filter.filter,
    ismobile : windowDim.width < mobileBrekPoint? true : false
})

const mapDispatchToProps = dispatch => ({
    getProductsList : () =>_ => dispatch(fetchProductsList()),
    changePage : pageNumber => push('/page='+pageNumber)
})

export default connect(mapStateToProps,mapDispatchToProps)(List)