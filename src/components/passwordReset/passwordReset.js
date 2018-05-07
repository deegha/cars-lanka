import React from "react"
import Container from  "../reusable/container/container"
import Card from "../reusable/card/card"
import FormConroller from "../reusable/formConroller/formConroller"
import {TextField, RaisedButton } from "material-ui"
import H1 from "../reusable/heading/H1"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"
import InfoMessage  from "../reusable/infoMessage/infoMessage"

import "../login/login.css"

const PasswordReset = ({ onSubmit, email, isInvalid, onChange, error}) => 
<Container>
    <form onSubmit={onSubmit}>
    <div className="loginWrapper">
        <H1>Reset your password</H1>
        <Card>
            <PaddingContainer padding="70px 10px">
            <div className="loginWrapper">
                    <FormConroller>
                        <InfoMessage>Enter your email address to reset your password</InfoMessage>
                    </FormConroller>
                    <FormConroller>
                        <TextField
                            onChange={onChange()}
                            hintText="Type your user email"
                            floatingLabelText="Email"
                        />
                    </FormConroller>
                    <FormConroller>
                        <RaisedButton 
                            label="Send reset link" 
                            onClick={onSubmit}
                            disabled={isInvalid}
                            primary={true}  />
                    </FormConroller>
            </div>
            { error && <p className="resetPasswordError">{error.message}</p> }
            </PaddingContainer>
        </Card>
    </div>
    </form>
</Container> 

export default PasswordReset