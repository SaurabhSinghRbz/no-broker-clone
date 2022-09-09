import { createStore } from "redux"
import {
    loginReqReducer
} from "./LoginSignup/reducer";

export const store = createStore(loginReqReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log(store.getState());
});
