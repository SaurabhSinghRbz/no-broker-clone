import { ADDAUSER, ISUSERLOGGED, LOGINSIGNUPREQ } from "./actionTypes"

export const loginSignupReq = (data) => {
    return {
        type: LOGINSIGNUPREQ,
        payload: data
    }
}


export const addAUser = (data) => {
    return {
        type: ADDAUSER,
        payload: data
    }
}


export const isUserLogged = (data) => {
    return {
        type: ISUSERLOGGED,
        payload: data
    }
}