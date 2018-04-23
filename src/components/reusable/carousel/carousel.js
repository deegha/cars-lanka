import React from "react"
import CarouselView from "./carouselView"

class Carousel extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selected : this.props.images[0]
        }
    }



    render () {
        return <img  src={this.state.selected} />
    }
}

export default Carousel