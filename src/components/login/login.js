import React from "react"
import Container from  "../reusable/container/container"
import Card from "../reusable/card/card"
import FormConroller from "../reusable/formConroller/formConroller"
import {TextField, RaisedButton } from "material-ui"
import H1 from "../reusable/heading/H1"
import "./login.css"

const Login = ({loginWithFb, authentication}) => 
<Container>
    <div className="loginWrapper"> {console.log(authentication)}
        <H1>Login in to your account</H1>
        <Card>
            <div className="loginWrapper">
                    <FormConroller>
                        <div onClick={loginWithFb()} className="facebookLoginBtn">Login using facebook</div>
                    </FormConroller>
                    <FormConroller>
                        <TextField
                            // value={product.model}
                            // onChange={handleTextChange("model")}
                            hintText="Type your user email"
                            floatingLabelText="Email"
                            // errorText={validation.model}
                        />
                    </FormConroller>
                    <FormConroller>
                        <TextField
                            // value={product.model}
                            // onChange={handleTextChange("model")}
                            hintText="Type your password"
                            floatingLabelText="Password"
                            // errorText={validation.model}
                            type="password"
                        />
                    </FormConroller>
                    <FormConroller>
                        <RaisedButton 
                            label="Login" 
                            buttonStyle={{backgroundColor:"#16a085"}}
                            primary={true}  />
                    </FormConroller>
            </div>
        </Card>
    </div>
</Container> 

export default Login