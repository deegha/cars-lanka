export const AUTHENTICATE = "AUTHENTICATE"
export const LOG_OUT = "LOG_OUT"

export const authenticateWithFb = _ => ({
    type : AUTHENTICATE,
    authenticated : true
})

export const logout = _=> ({
    type :LOG_OUT,
    authenticated : false
}) 