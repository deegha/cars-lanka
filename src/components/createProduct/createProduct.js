import React from "react"
import { connect } from "react-redux" 

import { createProduct } from "../../actions/productActions"

import Container from "../reusable/container/container"
import ProductForm from "../reusable/productForm/productForm"
import ImUploader from "../reusable/imageUploader/imageUploader"
import Card from "../reusable/card/card"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"

const CreateProduct = ({addImage, creatProduct, product, handleChange, handleTextChange, handleTextChangeContact, submitForm}) => 
<Container>
    <Card>
        <PaddingContainer padding="20px 40px">
            <ImUploader addImage={addImage} images={product.images} />
        </PaddingContainer>    
    </Card>
    <ProductForm 
        creatProduct={creatProduct} 
        product={product} 
        handleChange={handleChange}
        handleTextChange={handleTextChange} 
        handleTextChangeContact={handleTextChangeContact}
        submitForm={submitForm}/>
</Container>

export default CreateProduct