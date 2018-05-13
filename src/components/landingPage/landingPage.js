import React from "react"

class LandingPage extends React.Component {
    componentWillMount() {
        this.props.history.push('/page/1')
    }

    render() {
        return <div>LandingPage</div>
    }
}

export default LandingPage