import React from "react"
import Autocomplete from 'react-google-autocomplete'

import PaddingContainer from "../paddingContainer/paddingContainer"
import FelxRow from "../flexRow/felxRow"
import Card from "../card/card"
import {TextField, SelectField, RaisedButton, AutoComplete} from 'material-ui'
import MenuItem from 'material-ui/MenuItem'
import FormConroller from "../formConroller/formConroller"  
import H1 from "../heading/H1"
import {stylesLoacations} from "./locationStyles.js"

const ProductForm = ({
    validation,
    setLocation,
    handleTransmission,
    handleAutoCompleteChange, 
    handleBodyType,
    handleFuelType,
    makes, handleChange, product, handleTextChange, handleTextChangeContact, submitForm}) => 
<React.Fragment>
 <Card>   
    <PaddingContainer padding="20px 40px">
    <H1>Vehicle details</H1>

            <FormConroller>
            <AutoComplete
                floatingLabelText="Make (Brand)"
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={handleAutoCompleteChange}
                openOnFocus={true}
                value={product.make}
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
 
            <FormConroller>
                <SelectField
                    floatingLabelText="Body Type"
                    value={product.body_type}
                    onChange={handleBodyType}
                    autoWidth={true}
                    >
                    <MenuItem value="Saloon" primaryText="Saloon" />
                    <MenuItem value="Hatchback" primaryText="Hatchback" />
                    <MenuItem value="Station wagen" primaryText="Station wagon" />
                    <MenuItem value="Convertible" primaryText="Convertible" />
                    <MenuItem value="Cope/sport" primaryText="Cope/Sports" />
                    <MenuItem value="Suv/4x4" primaryText="SUV / 4x4" />
                    <MenuItem value="MPV" primaryText="MPV" />
                </SelectField>
            </FormConroller>
       
            <FormConroller>
                <SelectField
                    floatingLabelText="Transmission"
                    value={product.transmission}
                    onChange={handleTransmission}
                    autoWidth={true}
                    >
                    <MenuItem value="Auto Gear" primaryText="Auto gear" />
                    <MenuItem value="Manual Gear" primaryText="Manual (stick shift)" />
                    <MenuItem value="Triptonic" primaryText="Triptonic" />
                </SelectField>
            </FormConroller>
            <FormConroller>
                <SelectField
                    floatingLabelText="Fuel type"
                    value={product.fuel_type}
                    onChange={handleFuelType}
                    autoWidth={true}
                    >
                    <MenuItem value="Petrol" primaryText="Petrol" />
                    <MenuItem value="Diesel" primaryText="Diesel" />
                    <MenuItem value="Other" primaryText="Other" />
                </SelectField>
            </FormConroller>
  
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
                    <MenuItem value="Brand new" primaryText="Brand New" />
                    <MenuItem value="Reconditioned" primaryText="Reconditioned" />
                    <MenuItem value="Used" primaryText="Used" />
                </SelectField>
            </FormConroller>

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
                    value={product.price}
                    onChange={handleTextChange("price")}
                    hintText="Price (Rs) "
                    floatingLabelText="Rs"
                    errorText={validation.price}
                    type="number"
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
                <Autocomplete
                    style={stylesLoacations}
                    onPlaceSelected={setLocation} 
                    types={['(cities)']}
                    componentRestrictions={{country: "lk"}}
                />
                {/* <TextField
                    value={product.location}
                    onChange={handleTextChange("location")}
                    hintText="Location"
                    floatingLabelText="Location"
                    errorText={validation.location}
                /> */}
            </FormConroller>
            <FormConroller>
                <RaisedButton label="Create product" disabled={validation.invalid} onClick={submitForm()} primary={true}  />
            </FormConroller>
    </PaddingContainer>
</Card>
</React.Fragment>
export default ProductForm