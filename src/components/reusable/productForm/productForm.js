import React from "react"

import PaddingContainer from "../paddingContainer/paddingContainer"
import FelxRow from "../flexRow/felxRow"
import Card from "../card/card"
import {TextField, SelectField, RaisedButton, AutoComplete} from 'material-ui'
import MenuItem from 'material-ui/MenuItem'
import FormConroller from "../formConroller/formConroller"
import H1 from "../heading/H1"
import AlertMessage from "../alertMessages/alertMessage"

const ProductForm = ({
    validation,
    handleTransmission,
    handleAutoCompleteChange, 
    handleBodyType,
    makes, handleChange, product, handleTextChange, handleTextChangeContact, submitForm}) => 
<React.Fragment>
<AlertMessage/>
 <Card>     
    <PaddingContainer padding="20px 40px">
    <H1>Vehicle details</H1>
        <FelxRow>
            <FormConroller>
            <AutoComplete
                floatingLabelText="Make (Brand)"
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={handleAutoCompleteChange}
                openOnFocus={true}
                dataSource={makes.makes}
                errorText={validation.make}
                />
            </FormConroller>
        
            <FormConroller>
                    <TextField
                        value={product.model}
                        onChange={handleTextChange("model")}
                        hintText="Type your vehicle model"
                        floatingLabelText="Model"
                        errorText={validation.model}
                    />
            </FormConroller>
        </FelxRow>
        <FelxRow>
            <FormConroller>
                <SelectField
                    floatingLabelText="Body Type"
                    value={product.body_type}
                    onChange={handleBodyType}
                    autoWidth={true}
                    >
                    <MenuItem value="saloon" primaryText="Saloon" />
                    <MenuItem value="hatchback" primaryText="Hatchback" />
                    <MenuItem value="station_wagen" primaryText="Station wagon" />
                    <MenuItem value="convertible" primaryText="Convertible" />
                    <MenuItem value="cope_sport" primaryText="Cope/Sports" />
                    <MenuItem value="suv/4x4" primaryText="SUV / 4x4" />
                    <MenuItem value="mpv" primaryText="MPV" />
                </SelectField>
            </FormConroller>
       
            <FormConroller>
                <SelectField
                    floatingLabelText="Transmission"
                    value={product.transmission}
                    onChange={handleTransmission}
                    autoWidth={true}
                    >
                    <MenuItem value="auto" primaryText="Auto gear" />
                    <MenuItem value="stick" primaryText="Manual (stick shift)" />
                    <MenuItem value="triptonic" primaryText="Triptonic" />
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
                    errorText={validation.mileage}
                />
            </FormConroller>
       
            <FormConroller>
                <TextField
                    value={product.manufacture_year}
                    onChange={handleTextChange("manufacture_year")}
                    hintText="Manufacture year"
                    floatingLabelText="Manufacture year"
                    type="number"
                    errorText={validation.manufacture_year}
                />
            </FormConroller>
        </FelxRow>
        <FelxRow>
            <FormConroller>
                <TextField
                    value={product.engine_capacity}
                    onChange={handleTextChange("engine_capacity")}
                    hintText="Engine capacity"
                    floatingLabelText="Engine capacity"
                    type="number"
                    errorText={validation.engine_capacity}
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
        
       
    </PaddingContainer>
</Card>
<Card>
    <PaddingContainer padding="20px 40px">
        <H1>Other details</H1>
            <FormConroller>
                <TextField
                    value={product.location}
                    onChange={handleTextChange("location")}
                    hintText="Location"
                    floatingLabelText="Location"
                    errorText={validation.location}
                />
            </FormConroller>
            <FormConroller>
                <TextField
                    value={product.price}
                    onChange={handleTextChange("price")}
                    hintText="Price (Rs) "
                    floatingLabelText="Rs"
                    errorText={validation.price}
                />
            </FormConroller>
            {product.contacts.map((contact , key) =>  
            <FormConroller key={contact}>
                <TextField
                    value={contact.number}
                    onChange={handleTextChangeContact("contact", key)}
                    hintText="Contact number"
                    floatingLabelText="Contact number"
                    type="number"
                    errorText={validation.numberkey}
                />
            </FormConroller> 
            )}

            <FormConroller>
                <RaisedButton label="Create product" disabled={validation.invalid} onClick={submitForm()} primary={true}  />
            </FormConroller>
    </PaddingContainer>
</Card>
</React.Fragment>
export default ProductForm