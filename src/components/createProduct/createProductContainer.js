import React from "react"
import { connect } from "react-redux" 

import CreateProduct from "./createProduct"
import { createProductAction, handleChange, handleTextChangeContact, addProductImages, removeProductImages } from "../../actions/productActions"
import { getMakes } from "../../actions/makeActions"
import { createValidationErrorMessage, clearValidationErrorMessage } from "../../actions/errorActions"

class CreateProductContainer extends React.Component {


    componentDidMount() {
        this.props.getAllMakes()
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions = () =>  this.setState({ width: window.innerWidth, height: window.innerHeight })
    
    render () {console.log(this.props.product)
        return <CreateProduct 
                    validation = {this.props.validation}
                    addImage={this.props.addImage}
                    product={this.props.product} 
                    handleChange={this.props.handleChange} 
                    handleTextChange={this.props.handleTextChange}
                    handleTextChangeContact={this.props.handleTextChangeContact} 
                    makes = {this.props.makes}
                    handleTransmission = {this.props.handleTransmission}
                    handleBodyType = {this.props.handleBodyType}
                    handleAutoCompleteChange = {this.props.handleAutoCompleteChange}
                    removeImage = {this.props.removeImage}
                    setLocation = {this.props.setLocation}
                    submitForm={this.props.submitForm} />
    }
}

const mapStateToProps = ({ product, makes, validation } )=>({
    product : product.product,
    makes : makes,
    validation : validation.validation
})
const mapDispatchToProps = dispatch => ({
    handleTransmission : (event, index, values) => dispatch(handleChange("transmission" , values)),
    handleChange : (event, index, values) => dispatch(handleChange("condition" , values)),
    handleBodyType : (event, index, values) => dispatch(handleChange("body_type" , values)),
    handleTextChangeContact : (field, key) => event => dispatch(handleTextChangeContact(field , key, event.target.value)),
    submitForm : ()=> ()=> dispatch(createProductAction()),
    addImage : image => dispatch(addProductImages(image)),
    removeImage : image => dispatch(removeProductImages(image)),
    getAllMakes : () => dispatch(getMakes()),
    handleAutoCompleteChange : textMake => {
        validation("make", textMake, dispatch)
        dispatch(handleChange("make" , textMake  ))
    } ,
    handleTextChange : field => event => {
        validation(field, event.target.value, dispatch)
        dispatch(handleChange(field , event.target.value))
    },
    setLocation : (location) => {
        const {geometry,photos, ...newLocation} = location
        dispatch(handleChange("location" , newLocation))
    } 
})

const validation = (field, value, dispatch) => {
    (value === "")?
        dispatch(createValidationErrorMessage(field, "This feild is mandatory")):
        dispatch(clearValidationErrorMessage(field))
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer)