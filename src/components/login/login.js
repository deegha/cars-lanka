import React from "react"
import Container from  "../reusable/container/container"
import Card from "../reusable/card/card"
import FormConroller from "../reusable/formConroller/formConroller"
import {TextField, RaisedButton } from "material-ui"
import H1 from "../reusable/heading/H1"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"
import "./login.css"

const Login = ({loginWithFb, authentication, handleTextChange, validation, invalidForm, login}) => 
<Container>
    <div className="loginWrapper">
        <H1>Login in to your account</H1>
        <Card>
            <PaddingContainer padding="70px 10px">
            <div className="loginWrapper">
                    <FormConroller>
                        <div onClick={loginWithFb()} className="facebookLoginBtn">Login using facebook</div>
                    </FormConroller>
                    <FormConroller>
                        <TextField
                            onChange={handleTextChange("email")}
                            hintText="Type your user email"
                            floatingLabelText="Email"
                            errorText={validation.email}
                        />
                    </FormConroller>
                    <FormConroller>
                        <TextField
                            onChange={handleTextChange("password")}
                            hintText="Type your password"
                            floatingLabelText="Password"
                            errorText={validation.password}
                            type="password"
                        />
                    </FormConroller>
                    <FormConroller>
                        <RaisedButton 
                            label="Login" 
                            disabled={invalidForm}
                            onClick={login()}
                            primary={true}  />
                    </FormConroller>
            </div>
            </PaddingContainer>
        </Card>
    </div>
</Container> 

export default Login