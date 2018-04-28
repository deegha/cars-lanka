import React from "react"
import {TextField, SelectField, RaisedButton, AutoComplete} from 'material-ui'
import Autocomplete from 'react-google-autocomplete'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import PaddingContainer from "../paddingContainer/paddingContainer"
import Text from "../text/text"
import FormConroller from "../formConroller/formConroller"
import {stylesLoacations} from "../productForm/locationStyles"

const Filter = ({setLocation, filter, handleBrand, makes, closeFilter, isFilterOpen, filterProducts, handleTextChange}) => 
<ReactCSSTransitionGroup
          transitionName="filter"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {isFilterOpen?
<div className="filterContainer" >
    <div className="filterHeader" onClick={closeFilter()}>
        <PaddingContainer padding="0px 18px 0 0" className="closeFilter" >Close Filter</PaddingContainer>
    </div>
    <PaddingContainer padding="10px" >
        
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
            <RaisedButton label="Filter product"onClick={filterProducts()} primary={true}  />
        </FormConroller>
    </PaddingContainer>
</div>:<div/>}
 </ReactCSSTransitionGroup>
export default Filter