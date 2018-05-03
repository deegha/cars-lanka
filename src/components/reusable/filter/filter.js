import React from "react"
import {TextField, SelectField, RaisedButton, AutoComplete} from 'material-ui'
import Autocomplete from 'react-google-autocomplete'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import PaddingContainer from "../paddingContainer/paddingContainer"
import Text from "../text/text"
import FormConroller from "../formConroller/formConroller"
import {stylesLoacations} from "../productForm/locationStyles"

const Filter = ({setLocation, filter, handleBrand, makes, toggleFilter, isFilterOpen, filterProducts, handleTextChange}) => 
<div>
{!isFilterOpen?<div className="openFilter" onClick={toggleFilter()}>Filter products</div>:null}
<div className="filterContainer" style={isFilterOpen?{width : "260px"}:{width : "0"}} >
    <div className="filterHeader" onClick={toggleFilter()}>
        <PaddingContainer padding="0px 18px 0 0" className="closeFilter" >Close Filter</PaddingContainer>
    </div>
    <PaddingContainer padding="10px" style={isFilterOpen?{visibility : "hidden"}:{visibility : "visible"}} >
        <form>
        <FormConroller>
            <AutoComplete
                value = {filter.make} 
                floatingLabelText="Make (Brand)"
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={handleBrand}
                openOnFocus={true}
                dataSource={makes}
                />
        </FormConroller>
        <FormConroller>
            <TextField
                    onChange={handleTextChange("minPrice")}
                    hintText="Min price"
                    floatingLabelText="Min price"
                    type="number"
                />
        </FormConroller>
        <FormConroller>
            <TextField
                    onChange={handleTextChange("maxPrice")}
                    hintText="Max price"
                    floatingLabelText="Max price"
                    type="number"
                />
        </FormConroller>
        <FormConroller>
            <Autocomplete
                    style={stylesLoacations}
                    onPlaceSelected={setLocation} 
                    types={['(cities)']}
                    componentRestrictions={{country: "lk"}}
                />
        </FormConroller>
        <FormConroller>
            <RaisedButton type="submit" label="Filter product" onClick={filterProducts()} primary={true}  />
        </FormConroller>
        </form>
    </PaddingContainer>
</div>
</div>
export default Filter