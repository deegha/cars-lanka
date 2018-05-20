import React from "react"
import { connect } from "react-redux"

import Filter from "./filter"
import { applyFilter, clearFilter } from "../../../actions/filterActions"
import "./filter.css"
import event from "material-ui/svg-icons/action/event";


class FilterContainer extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            isFilterOpen : false,
            filter : {
                make : "",
                model : "",
                max_price : "",
                min_price : "",
                location : {
                    city : "",
                    district : "",
                    province : ""
                },
                transmission : "",
                condition : "",
                body_type : "",
                milage : ""
            },
            makes : []
        }
    }

    componentDidMount() { 
        this.setState({makes : this.props.makes})

        console.log(this.props.filter, "filter container")
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

    clearFilter =_=>event =>  {
        event.preventDefault()
        console.log("here")
        this.props.clearFilter()
    }

    render() { 
        return <Filter makes={this.state.makes} 
                       setLocation={this.setLocation}
                       handleBrand={this.handleBrand} 
                       filter = {this.state.filter}
                       toggleFilter={this.toggleFilter} 
                       handleTextChange = {this.handleTextChange}
                       filterProducts = {this.filterProducts}
                       clearFilter = {this.clearFilter}
                       isFilterOpen={this.state.isFilterOpen} />
    }
}

const mapStateToProps = ({filter}) => ({
    filter
})

const mapDispatchToProps = dispatch => ({
    filterProducts : filter => dispatch(applyFilter(filter)),
    clearFilter : () => dispatch(clearFilter())
})

export default connect(mapStateToProps, mapDispatchToProps) (FilterContainer)


