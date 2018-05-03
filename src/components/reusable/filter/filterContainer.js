import React from "react"
import { connect } from "react-redux"

import Filter from "./filter"
import { applyFilter } from "../../../actions/filterActions"
import "./filter.css"


class FilterContainer extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            isFilterOpen : false,
            filter : {
                make : "",
                minPrice : "",
                maxPrice : "",
                location : {
                    city : "",
                    district : "",
                    province : ""
                }
            },
            makes : []
        }
    }

    componentDidMount() { 
        this.setState({makes : this.props.makes})
    }

    toggleFilter = _=>_=> this.setState({isFilterOpen : !this.state.isFilterOpen})

    handleBrand = (make) => this.setStateFilter({"make" : make})
    handleTextChange = feild => event => this.setStateFilter({[feild] : event.target.value })
    setLocation = location => {
        location.name !== ""? this.setStateFilter({"location": {
            city : location.address_components[0].long_name,
            district : location.address_components[1].long_name,
            province : location.address_components[2].long_name
        } }):  this.setStateFilter({"location": {
            city : "",
            district : "",
            province : ""
        } }) 
    }

    setStateFilter = (object) => this.setState({filter : {...this.state.filter, ...object} })

    filterProducts =  _=> event => { 
        event.preventDefault()
        this.props.filterProducts(this.state.filter)
    }

    render() {  console.log(this.state.filter)
        return <Filter makes={this.state.makes} 
                       setLocation={this.setLocation}
                       handleBrand={this.handleBrand} 
                       filter = {this.state.filter}
                       toggleFilter={this.toggleFilter} 
                       handleTextChange = {this.handleTextChange}
                       filterProducts = {this.filterProducts}
                       isFilterOpen={this.state.isFilterOpen} />
    }
}

const mapStateToProps = ({filter}) => ({
    filter
})

const mapDispatchToProps = dispatch => ({
    filterProducts : filter => dispatch(applyFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps) (FilterContainer)


