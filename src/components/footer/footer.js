import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import FlexRow from "../reusable/flexRow/felxRow"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"
import "./footer.css"
// import FacebookProvider, { Like }from 'react-facebook'
import Icon from "../reusable/icon/icon"
import {mobileBrekPoint} from "../../services/breakPoints"

const Footer = ({ismobile}) => <div className="footerContainer">
    <FlexRow makeColumn={ismobile}>
        <PaddingContainer>
            <ul>
                <li>
                    <a href="https://www.facebook.com/logcars/" target="new">
                    <Icon className="fab fa-facebook-f" name="facebook" />
                    Connect us on facebook</a></li>
                <li>
                    <a href="" target="new">
                        <Icon className="fab fa-instagram" name="instagrame" />
                        Follow us on Instagrame
                    </a>
                    </li>
                <li>
                    <a href="" target="new">
                    <Icon className="fab fa-twitter" name="twitter" />
                    Twitte us
                    </a>
                   </li>
                {/* <li style={{overflow:"hidden"}}>
                <FacebookProvider appId="102709803917490">
                    <Like href="https://www.facebook.com/logcars" colorScheme="light" showFaces share />
                </FacebookProvider>
                </li> */}
              
            </ul>
        </PaddingContainer>       
        <PaddingContainer>
            <ul>
                <li>
                    <Link to="">
                    About us</Link>
                </li>
                <li>
                    <Link to="">
                    Contact us
                    </Link>
                </li>
            </ul>
        </PaddingContainer>     
        <PaddingContainer>
            <ul>
                <li><Link to="/createProduct">Post add for free</Link></li>
            </ul>
        </PaddingContainer>        
    </FlexRow>
</div>

const mapStateToProps = ({windowDim}) => ({
    ismobile : windowDim.width < mobileBrekPoint? true : false
})

export default connect(mapStateToProps)(Footer)   