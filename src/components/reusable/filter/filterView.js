import React from "react" 

const FilterView = ({ children, filter, product }) => {
    
    let show = true
    
    if(filter.make !== "") {
        if(filter.make.toLowerCase() !== product.make.toLowerCase())  
            show = false  
    }

    if(filter.minPrice !== "") {
        if(filter.minPrice > product.price)  
            show = false  
    }

    if(filter.maxPrice !== "") {
        if(filter.maxPrice < product.price)  
            show = false  
    }
    
    if(filter.location.city !== "" && (product.location.address_components !== undefined)) {
        
        if(filter.location.city !== product.location.address_components[0].long_name) 
            show = false
              
    }else if (filter.location.city !== "" && (product.location.address_components === undefined)) {
        show = false
    }

    // if(filter.district !== "" && (product.location.address_components !== undefined)) {
    //     if(filter.district !== product.location.address_components[1].long_name)  
    //         show = false  
    // }

    // if(filter.province !== "" && (product.location.address_components !== undefined)) {
    //     if(filter.province !== product.location.address_components[2].long_name)  
    //         show = false  
    // }

    if(show)
        return children
    else 
        return <div />
}

export default FilterView