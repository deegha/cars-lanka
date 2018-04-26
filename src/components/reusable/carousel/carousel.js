import React from "react"
import CarouselView from "./carouselView"

import defaultImage from "../../../asserts/default.jpg"

class Carousel extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selected : this.props.images? this.props.images[0] : defaultImage
        }
    }

    render () {
        return <img  src={this.state.selected} />
    }
}

export default Carousel