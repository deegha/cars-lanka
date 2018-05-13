import React from "react"

class InfinityScroll extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollHeight : 0,
            bottom : false
        }
    }

    // componentWillReceiveProps () {
    //     window.scroll(0, this.state.scrollHeight)
    // }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
       
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if(window.pageYOffset !== 0)
            this.setState({scrollHeight : window.pageYOffset})

        if (windowBottom >= docHeight) {
            this.props.getProductsList()
            // this.setState({
            //     bottom: true,
                
            // });
        } else {
            // this.setState({
            //     bottom: false
            // });
        }
    }

    render() { 
        return  <React.Fragment>
                    {this.props.children}
                </React.Fragment>
    }
} 

export default InfinityScroll