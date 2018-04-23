import React from "react"

import PaddingContainer from "../paddingContainer/paddingContainer"
import FelxRow from "../flexRow/felxRow"
import Card from "../card/card"
import {TextField, SelectField, RaisedButton, AutoComplete} from 'material-ui'
import MenuItem from 'material-ui/MenuItem'
import FormConroller from "../formConroller/formConroller"

const ProductForm = ({
    validation,
    handleAutoCompleteChange, 
    makes, handleChange, product, handleTextChange, handleTextChangeContact, submitForm}) => 
 <Card> {console.log(validation)}
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
            <AutoComplete
                floatingLabelText="Make (Brand)"
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={handleAutoCompleteChange}
                openOnFocus={true}
                dataSource={makes.makes}
                />
            </FormConroller>
        </FelxRow>
        <FelxRow>
            {/* <FormConroller>
            <SelectField
                floatingLabelText="Model"
                value={product.model}
                onChange={handleChange}
                autoWidth={true}

                disabled={!product.make}
                >
                <MenuItem value="model1" primaryText="model1" />
                <MenuItem value="model2" primaryText="model2" />
                <MenuItem value="model3" primaryText="model3" />
                <MenuItem value="model4" primaryText="model4" />
                <MenuItem value="model5" primaryText="model5" />
            </SelectField>
            </FormConroller> */}
        
            <FormConroller>
                <TextField
                    value={product.mileage}
                    onChange={handleTextChange("mileage")}
                    hintText="Mileage"
                    floatingLabelText="Mileage"
                    type="number"
                />
            </FormConroller>
        </FelxRow>
        <FelxRow>
            <FormConroller>
                <TextField
                    value={product.manufacture_year}
                    onChange={handleTextChange("manufacture_year")}
                    hintText="Manufacture year"
                    floatingLabelText="Manufacture year"
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
        </FelxRow>
        <FelxRow>
            <FormConroller>
                <TextField
                    value={product.location}
                    onChange={handleTextChange("location")}
                    hintText="Location"
                    floatingLabelText="Location"
                />
            </FormConroller>
            <FormConroller>
                <SelectField
                    floatingLabelText="Condition"
                    value={product.condition}
                    onChange={handleChange}
                    autoWidth={true}
                    >
                    <MenuItem value="brand_new" primaryText="Brand New" />
                    <MenuItem value="reconditioned" primaryText="Reconditioned" />
                    <MenuItem value="used" primaryText="Used" />
                </SelectField>
            </FormConroller>
            {product.contacts.map((contact , key) =>  
                <FormConroller key={contact}>
                    <TextField
                        value={contact.number}
                        onChange={handleTextChangeContact("contact", key)}
                        hintText="Contact number"
                        floatingLabelText="Contact number"
                        type="number"
                    />
                </FormConroller> )}
        
        </FelxRow>   
            <FormConroller>
                <TextField
                    value={product.description}
                    onChange={handleTextChange("description")}
                    hintText="Describe your vehicle"
                    floatingLabelText="Describe your vehicle"
                    multiLine={true}
                />
            </FormConroller>
        
        <FormConroller>
            <RaisedButton label="Create product" onClick={submitForm()} primary={true}  />
        </FormConroller>
    </PaddingContainer>
</Card>

export default ProductForm