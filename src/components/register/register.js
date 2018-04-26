import React from "react"
import Container from  "../reusable/container/container"
import Card from "../reusable/card/card"
import FormConroller from "../reusable/formConroller/formConroller"
import {TextField, RaisedButton } from "material-ui"
import H1 from "../reusable/heading/H1"
import "./register.css"

const Register = () => 
<Container>
    <div className="registerWrapper">
        <H1>Create your account</H1>
        <Card>
            <div className="registerWrapper">
                    
                    <FormConroller>
                        <TextField
                            // value={product.model}
                            // onChange={handleTextChange("model")}
                            hintText="Enter fist name"
                            floatingLabelText="First name"
                            // errorText={validation.model}
                        />
                     </FormConroller>
                    <FormConroller>
                        <TextField
                            // value={product.model}
                            // onChange={handleTextChange("model")}
                            hintText="Enter last name"
                            floatingLabelText="Last name"
                            // errorText={validation.model}
                        />
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
                        <TextField
                            // value={product.model}
                            // onChange={handleTextChange("model")}
                            hintText="Type your password again"
                            floatingLabelText="Confirm password"
                            // errorText={validation.model}
                            type="password"
                        />
                    </FormConroller>
                    <FormConroller>
                        <RaisedButton 
                            label="Create User" 
                            buttonStyle={{backgroundColor:"#16a085"}}
                            primary={true}  />
                    </FormConroller>
            </div>
        </Card>
    </div>
</Container> 

export default Register