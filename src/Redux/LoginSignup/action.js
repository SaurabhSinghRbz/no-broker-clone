import { LOGINSIGNUPREQ } from "./actionTypes"

export const loginSignupReq = (data) => {
    return {
        type: LOGINSIGNUPREQ,
        payload: data
    }
}