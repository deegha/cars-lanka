import React from "react"
import CarouselView from "./carouselView"

import defaultImage from "../../../asserts/default.jpg"
import Icon from "../icon/icon"
import FlexRow from "../flexRow/felxRow"

import "./carousel.css"

class Carousel extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selected : this.props.images? this.props.images[0] : defaultImage
        }
    }

    changeImage = index=>_ => this.setState({
        selected : this.props.images[index]
    })

    render () {
        return <div className="carouselContainer">   

                <div className="mainImageView">
                    <img  src={this.state.selected}  />
                </div>
                {this.props.images?
                <div className="allImages">
                    {this.props.images.map((img , key) => <img onClick={this.changeImage(key)} src={img} key={img} alt={img} />)}
                </div>:null}
            </div>    
    }
}

export default Carousel