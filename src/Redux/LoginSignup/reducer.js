import { ADDAUSER, ISUSERLOGGED, LOGINSIGNUPREQ } from "./actionTypes";

const initState = {
    loginReq: false,
    userData: [],
    isUserLoggedIn: false
};

export const loginReqReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGINSIGNUPREQ: {
            return { ...state, loginReq: action.payload };
        }
        case ADDAUSER: {
            return { ...state, userData: [...state.userData, action.payload] };
        }
        case ISUSERLOGGED: {
            return { ...state, isUserLoggedIn: true };
        }
        default: {
            return { ...state }
        }
    }
};
