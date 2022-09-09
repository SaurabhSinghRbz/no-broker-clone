import { createStore } from "redux"
import {
    loginReqReducer
} from "./LoginSignup/reducer";

export const store = createStore(loginReqReducer)