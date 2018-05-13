import React from "react"
import FlexRow from "../reusable/flexRow/felxRow"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"
import "./footer.css"

const Footer = () => <div className="footerContainer">
    <FlexRow>
        <PaddingContainer>
            <ul>
                <li>Connect us on facebook</li>
                <li>Follow us on Instagrame</li>
                <li>Twitte us</li>
            </ul>
        </PaddingContainer>       
        <PaddingContainer>
            <ul>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </PaddingContainer>        
    </FlexRow>
</div>

export default Footer   