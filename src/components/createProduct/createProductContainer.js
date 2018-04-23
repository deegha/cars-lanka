import React from "react"
import { connect } from "react-redux" 

import CreateProduct from "./createProduct"
import { createProductAction, handleChange, handleTextChangeContact, addProductImages } from "../../actions/productActions"
import { getMakes } from "../../actions/makeActions"
class CreateProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0, validation : {} }
    }

    componentDidMount() {
        this.props.getAllMakes()
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    componentWillReceiveProps (props) {
        this.validateForm (props.product)
    }

    validateForm = (product) => {
       this.validationReqiredFeild(product.title)
    }

    validationReqiredFeild = feild => (!feild || feild === "")  ? this.setState({
        validation : {...this.state.validation, feild : feild+" This feild is required"}
    }) : {}

    updateWindowDimensions = () =>  this.setState({ width: window.innerWidth, height: window.innerHeight })
    
    render () {
        return <CreateProduct 
                    validation = {this.state.validation}
                    addImage={this.props.addImage}
                    product={this.props.product} 
                    handleChange={this.props.handleChange} 
                    handleTextChange={this.props.handleTextChange}
                    handleTextChangeContact={this.props.handleTextChangeContact} 
                    makes = {this.props.makes}
                    handleAutoCompleteChange = {this.props.handleAutoCompleteChange}
                    submitForm={this.props.submitForm} />
    }
}

const mapStateToProps = ({ product, makes } )=>({
    product : product.product,
    makes : makes
})
const mapDispatchToProps = dispatch => ({
    // handleChange : feild => event => dispatch(handleChange(feild , event.target.value)),
    handleChange : (event, index, values) => dispatch(handleChange("condition" , values)),
    handleTextChange : feild => event => dispatch(handleChange(feild , event.target.value)),
    handleTextChangeContact : (feild, key) => event => dispatch(handleTextChangeContact(feild , key, event.target.value)),
    submitForm : ()=> ()=> dispatch(createProductAction()),
    addImage : image => dispatch(addProductImages(image)),
    getAllMakes : () => dispatch(getMakes()),
    handleAutoCompleteChange : textMake => dispatch(handleChange("make" , textMake  ))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer)