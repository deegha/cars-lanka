import React from "react"

import PaddingContainer from "../paddingContainer/paddingContainer"
import FelxRow from "../flexRow/felxRow"
import Card from "../card/card"
import {TextField, SelectField, RaisedButton} from 'material-ui'
import MenuItem from 'material-ui/MenuItem'
import FormConroller from "../formConroller/formConroller"

const ProductForm = ({handleChange, product, handleTextChange, handleTextChangeContact, submitForm}) => 
<Card>
    {console.log(product)}
    <PaddingContainer padding="20px 40px">
        <FelxRow>
        <FormConroller>
            <TextField
                value={product.title}
                onChange={handleTextChange("title")}
                hintText="Advertistment title"
                floatingLabelText="Advertistment title"
                
            />
        </FormConroller>
        <FormConroller>
        <SelectField
            floatingLabelText="make"
            value={product.make}
            onChange={handleChange("make")}
            autoWidth={true}
            >
            <MenuItem value="Toyota" primaryText="Toyota" />
            <MenuItem value="Honda" primaryText="Honda" />
            <MenuItem value="Mazda" primaryText="Mazda" />
            <MenuItem value="BMW" primaryText="BMW" />
            <MenuItem value="Dihatsu" primaryText="Dihatsu" />
        </SelectField>
        </FormConroller>
        <FormConroller>
        <SelectField
            floatingLabelText="Model"
            value={product.model}
            onChange={handleChange("model")}
            autoWidth={true}

            disabled={!product.make}
            >
            <MenuItem value="model1" primaryText="model1" />
            <MenuItem value="model2" primaryText="model2" />
            <MenuItem value="model3" primaryText="model3" />
            <MenuItem value="model4" primaryText="model4" />
            <MenuItem value="model5" primaryText="model5" />
        </SelectField>
        </FormConroller>
        </FelxRow>
        <FelxRow>
        <FormConroller>
            <TextField
                value={product.mileage}
                onChange={handleTextChange("mileage")}
                hintText="Mileage"
                floatingLabelText="Mileage"
                type="number"
            />
        </FormConroller>
        <FormConroller>
            <TextField
                value={product.engine_capacity}
                onChange={handleTextChange("engine_capacity")}
                hintText="Engine capacity"
                floatingLabelText="Engine capacity"
                type="number"
            />
        </FormConroller>
       
        <FormConroller>
            <TextField
                value={product.location}
                onChange={handleTextChange("location")}
                hintText="Location"
                floatingLabelText="Location"
            />
        </FormConroller>
        {/* {product.contacts.map((contact , key) =>  
            <FormConroller>
                <TextField
                    value={contact}
                    onChange={handleTextChangeContact("contact", key)}
                    hintText="Contact number"
                    floatingLabelText="Contact number"
                    type="number"
                />
            </FormConroller> )} */}
       
        </FelxRow>
        <FormConroller>
            <TextField
                value={product.description}
                onChange={handleTextChange("description")}
                hintText="Describe your vehicle"
                floatingLabelText="Describe your vehicle"
                multiLine={true}
                style={{minWidth:"600px"}}
            />
        </FormConroller>
        <FormConroller>
            <RaisedButton label="Create product" onClick={submitForm()} primary={true}  />
        </FormConroller>
    </PaddingContainer>
</Card>

export default ProductForm