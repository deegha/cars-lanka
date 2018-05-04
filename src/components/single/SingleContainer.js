/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"
import {connect} from "react-redux"

import { setActiveProduct, initializeActiveProduct } from "../../actions/productActions"
import Single from "./Single"
import Loading from "../reusable/loading/loading"
import {mobileBrekPoint} from "../../services/breakPoints"


class SingleContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gallery : "",
            showModal : false
        }
    }

    toggleModal = _=> _=> this.setState({showModal : !this.state.showModal})
    
    componentDidMount() {
        this.props.fetchActiveProduct(this.props.match.params.id)
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        this.props.resetActiveProduct()
    }

    render() {
        return this.props.loading?<Loading />:
        <Single ismobile={this.props.ismobile} changeimage={this.props.changeimage} product={this.props.product} gallery={this.state.gallery}/>
    }
}   

const mapStateToProps = ({product, windowDim}) => ({
    product : product.product,
    loading : product.loading,
    ismobile : windowDim.width < mobileBrekPoint? true : false
}) 


const mapDispatchToProps = dispatch => ({
    fetchActiveProduct : productId => dispatch(setActiveProduct(productId)),
    resetActiveProduct : () => dispatch(initializeActiveProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleContainer)