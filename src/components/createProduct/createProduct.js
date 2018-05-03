import React from "react"
import { connect } from "react-redux" 

import { createProduct } from "../../actions/productActions"

import Container from "../reusable/container/container"
import ProductForm from "../reusable/productForm/productForm"
import ImUploader from "../reusable/imageUploader/imageUploader"
import Card from "../reusable/card/card"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"

const CreateProduct = ({validation, 
            handleAutoCompleteChange, 
            handleBodyType,
            makes, 
            addImage, 
            removeImage,
            product, 
            handleChange, 
            handleTextChange, 
            handleTransmission,
            setLocation,
            handleFuelType,
            handleTextChangeContact, submitForm}) => 
<Container>
    <Card>
        <PaddingContainer padding="20px 40px">
            <ImUploader addImage={addImage} removeImage={removeImage} images={product.images} />
        </PaddingContainer>    
    </Card>
    <ProductForm 
        validation ={validation}
        handleBodyType = {handleBodyType}
        makes = {makes}
        handleAutoCompleteChange = {handleAutoCompleteChange} 
        product={product} 
        handleChange={handleChange}
        handleTextChange={handleTextChange} 
        handleTransmission = {handleTransmission}
        handleTextChangeContact={handleTextChangeContact}
        setLocation={setLocation}
        handleFuelType={handleFuelType}
        submitForm={submitForm}/>
</Container>

export default CreateProduct