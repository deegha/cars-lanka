import React from "react"
import { connect } from "react-redux" 

import CreateProduct from "./createProduct"
import { createProductAction, handleChange, handleTextChangeContact, addProductImages } from "../../actions/productActions"
import { getMakes } from "../../actions/makeActions"
class CreateProductContainer extends React.Component {
    componentDidMount() {
        this.props.getAllMakes()
    }
    render () {
        return <CreateProduct 
                    addImage={this.props.addImage}
                    creatProduct={this.props.creatProduct}
                    product={this.props.product} 
                    handleChange={this.props.handleChange} 
                    handleTextChange={this.props.handleTextChange}
                    handleTextChangeContact={this.props.handleTextChangeContact} 
                    submitForm={this.props.submitForm} />
    }
}

const mapStateToProps = state =>({product : state.product.product})
const mapDispatchToProps = dispatch => ({
    creatProduct : product => dispatch(createProductAction(product)),
    handleChange : feild => event => dispatch(handleChange(feild , event.target.innerText)),
    handleTextChange : feild => event => dispatch(handleChange(feild , event.target.value)),
    handleTextChangeContact : (feild, key) => event => dispatch(handleTextChangeContact(feild , key, event.target.value)),
    submitForm : ()=> ()=> dispatch(createProductAction()),
    addImage : image => dispatch(addProductImages(image)),
    getAllMakes : () => dispatch(getMakes())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer)