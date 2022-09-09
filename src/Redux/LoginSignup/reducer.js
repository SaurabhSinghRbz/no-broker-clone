import { LOGINSIGNUPREQ } from "./actionTypes"

const initState = {
    loginReq: false
}


export const loginReqReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGINSIGNUPREQ: {
            return { ...state, loginReq: action.payload }
        }
        default: {
            return state;
        }
    }
}