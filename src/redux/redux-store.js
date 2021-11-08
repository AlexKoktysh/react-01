import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sibebarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sibebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;